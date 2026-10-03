// Dependencies: Node.js 20+, Playwright, and a locally installed Chrome or Edge.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const original = execFileSync('git', ['show', '85969cb:index.html'], { cwd: root, encoding: 'utf8' });
const chrome = [process.env.BROWSER_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => p && fs.existsSync(p));
assert(chrome, 'Chrome or Edge is required; alternatively set BROWSER_PATH');
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/original.html') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(original);
  }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404); return res.end();
  }
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
  res.setHeader('Content-Type', (types[path.extname(file)] || 'text/plain') + '; charset=utf-8');
  res.end(fs.readFileSync(file));
});
let browser, page;
const errors = [];
const evaluate = expression => page.evaluate(expression);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function navigate(url) {
  await page.goto(url, {waitUntil: 'load'});
}
// A missing style rule, changed content, or broken breakpoint changes these observations.
const snapshot = `(() => [...document.body.querySelectorAll('*')]
  .filter(el => !['SCRIPT', 'STYLE'].includes(el.tagName))
  .map(el => {
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    return { tag: el.tagName, id: el.id, text: el.children.length ? '' : el.textContent.trim(),
      href: el.getAttribute('href'), src: el.getAttribute('src'),
      style: Object.fromEntries(['display','color','backgroundColor','fontSize','fontWeight',
        'marginTop','marginBottom','paddingTop','paddingBottom','borderRadius','gap','gridTemplateColumns']
        .map(key => [key, s[key]])), rect: [r.x, r.y, r.width, r.height].map(n => Math.round(n * 100) / 100) };
  }))()`;

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ executablePath: chrome, headless: true });
  page = await browser.newPage();
  page.on('pageerror', error => errors.push(error.message));
  // External media availability is separate from this local refactor.
  await page.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  for (const width of [1280, 768, 480, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await navigate(base + '/original.html');
    const before = await evaluate(snapshot);
    await navigate(base + '/index.html');
    assert.deepEqual(await evaluate(snapshot), before, `Initial content/layout changed at ${width}px`);
    console.log(`PASS original content and layout: ${width}px`);
    await evaluate(`document.querySelector('#theme-toggle').click()`);
    const darkAfter = await evaluate(snapshot);
    await navigate(base + '/original.html');
    await evaluate(`document.querySelector('#theme-toggle').click()`);
    assert.deepEqual(darkAfter, await evaluate(snapshot), `Dark theme changed at ${width}px`);
    for (let id = 1; id <= 5; id++) {
      await navigate(base + '/original.html');
      await evaluate(`document.querySelectorAll('.project-card')[${id - 1}].click()`);
      const detailBefore = await evaluate(snapshot);
      await navigate(base + '/index.html');
      await evaluate(`document.querySelectorAll('.project-card')[${id - 1}].click()`);
      assert.deepEqual(await evaluate(snapshot), detailBefore, `Detail ${id} changed at ${width}px`);
    }
    console.log(`PASS dark theme and five detail layouts: ${width}px`);
  }
  await navigate(base + '/index.html');
  assert.equal(await evaluate(`!!document.querySelector('script[src]') && !document.querySelector('[onclick], [onkeydown], [style], style, script:not([src])')`), true,
    'The site must load external features without inline code/styles');
  await evaluate(`document.querySelector('#theme-toggle').click()`);
  assert.deepEqual(await evaluate(`[document.body.classList.contains('dark'), document.querySelector('#theme-toggle').textContent]`), [true, '☀️']);
  await evaluate(`document.querySelector('#theme-toggle').click()`);
  assert.equal(await evaluate(`document.body.classList.contains('dark')`), false);
  await evaluate(`document.querySelector('.hamburger').click()`);
  assert.equal(await evaluate(`document.querySelector('#mobile-drawer').classList.contains('open')`), true);
  await evaluate(`document.querySelector('#mobile-drawer a').click()`);
  assert.equal(await evaluate(`document.querySelector('#mobile-drawer').classList.contains('open')`), false);
  for (let id = 1; id <= 5; id++) {
    await evaluate(`document.querySelector('[data-project-id="detail-${id}"]').click()`);
    assert.deepEqual(await evaluate(`[getComputedStyle(document.querySelector('#main-view')).display, [...document.querySelectorAll('.project-detail')].filter(el => getComputedStyle(el).display !== 'none').map(el => el.id), location.hash]`),
      ['none', [`detail-${id}`], `#detail-${id}`]);
    await evaluate(`document.querySelector('#detail-${id} .detail-back').click()`);
    await pause(150);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('#main-view')).display`), 'block');
    await evaluate('history.forward()'); await pause(150);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('#detail-${id}')).display`), 'block');
    await evaluate('history.back()'); await pause(150);
  }
  for (const key of ['Enter', ' ']) {
    await page.locator('[data-project-id="detail-1"]').focus();
    await page.keyboard.press(key === ' ' ? 'Space' : key);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('#detail-1')).display`), 'block');
    await evaluate(`document.querySelector('.nav-logo').click()`);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('#main-view')).display`), 'block');
  }
  const hash = await evaluate('location.hash');
  await evaluate(`const badCard = document.querySelector('[data-project-id]'); badCard.dataset.projectId = 'missing'; badCard.click()`);
  assert.equal(await evaluate('location.hash'), hash, 'Invalid project must not change the URL');
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('#main-view')).display`), 'block');
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log('PASS theme, mobile menu, five details, keyboard, history, navigation and invalid references');
  await page.unroute('**/*');
  await page.route('https://**/*', route => route.abort());
  await navigate(require('node:url').pathToFileURL(path.join(root, 'index.html')).href);
  await page.locator('[data-project-id="detail-1"]').click();
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('#detail-1')).display`), 'block');
  await page.locator('#theme-toggle').click();
  assert.equal(await evaluate(`document.body.classList.contains('dark')`), true);
  assert.deepEqual(errors, [], 'Browser runtime errors when opened as a local file');
  console.log('PASS direct file opening without a local server');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  server.close();
});
