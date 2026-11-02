// Compare the production build against the pinned, unmodified remote main.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { execFileSync } = require('node:child_process');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const baseline = 'e1dd9f41bd4b6cae3c96d6be82b9a1070579684c';
const chrome = [process.env.BROWSER_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => p && fs.existsSync(p));
assert(chrome, 'Set BROWSER_PATH to Chrome or Edge');
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  try {
    let body;
    if (pathname.startsWith('/baseline/')) {
      const file = pathname.slice('/baseline/'.length) || 'index.html';
      body = execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root });
    } else {
      const base = path.join(root, 'dist');
      const file = path.resolve(base, '.' + (pathname === '/' ? '/index.html' : pathname));
      if (!file.startsWith(base + path.sep)) throw new Error('Invalid path');
      body = fs.readFileSync(file);
    }
    const type = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' }[path.extname(pathname)] || 'text/html';
    res.setHeader('Content-Type', `${type}; charset=utf-8`);
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
// A lost section, changed stylesheet, media URL, or hidden-view rule must fail parity.
const snapshot = () => [...document.querySelectorAll('nav, nav *, #mobile-drawer, #mobile-drawer *, #main-view, #main-view *, #detail-view, #detail-view *')].map(el => {
  const s = getComputedStyle(el), r = el.getBoundingClientRect();
  return { tag: el.tagName, id: el.id, text: el.children.length ? '' : el.textContent.replace(/\s+/g, ' ').trim(),
    href: el.getAttribute('href'), src: el.getAttribute('src'),
    style: Object.fromEntries(['display', 'color', 'backgroundColor', 'fontSize', 'fontWeight', 'lineHeight',
      'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'borderRadius', 'gap', 'gridTemplateColumns'].map(key => [key, s[key]])),
    rect: [r.x, r.y, r.width, r.height].map(n => Math.round(n * 100) / 100) };
});
let browser;
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ executablePath: chrome, headless: true });
  const errors = [];
  const pages = await Promise.all([browser.newPage(), browser.newPage()]);
  for (const page of pages) {
    page.on('pageerror', e => errors.push(e.message));
    await page.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  }
  const [reference, actual] = pages;
  async function load(page, url) {
    await page.goto(base + url);
    await page.locator('#main-view').waitFor();
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  }
  for (const width of [1280, 900, 768, 480, 375, 320]) {
    for (const page of pages) await page.setViewportSize({ width, height: 900 });
    await load(reference, '/baseline/');
    await load(actual, '/');
    assert.deepEqual(await actual.evaluate(snapshot), await reference.evaluate(snapshot), `Main parity at ${width}px`);
    for (const page of pages) await page.locator('[data-toggle-theme]').click();
    for (const page of pages) await page.waitForTimeout(250);
    assert.deepEqual(await actual.evaluate(snapshot), await reference.evaluate(snapshot), `Dark parity at ${width}px`);
    for (let i = 1; i <= 7; i++) {
      for (const page of pages) {
        await page.locator(`[data-project-id="detail-${i}"]`).click();
        await page.waitForTimeout(80);
      }
      assert.deepEqual(await actual.evaluate(snapshot), await reference.evaluate(snapshot), `Detail ${i} parity at ${width}px`);
      for (const page of pages) {
        await page.locator(`#detail-${i} [data-back-to-projects]`).click();
        await page.locator('#main-view').waitFor({ state: 'visible' });
      }
    }
    console.log(`PASS main/dark/seven details: ${width}px`);
  }
  await load(actual, '/');
  for (const key of ['Enter', 'Space']) {
    // Start each keyboard case with a new main entry. The logo intentionally
    // preserves main's detail history state instead of replacing the URL.
    await load(actual, `/?keyboard=${key}`);
    await actual.locator('[data-project-id="detail-7"]').focus();
    await actual.keyboard.press(key);
    await actual.locator('#detail-7').waitFor({ state: 'visible' });
    assert.equal(new URL(actual.url()).hash, '#detail-7');
    await actual.goBack();
    await actual.locator('#main-view').waitFor({ state: 'visible' });
    await actual.goForward();
    await actual.locator('#detail-7').waitFor({ state: 'visible' });
    await actual.locator('[data-show-main]').first().click();
    await actual.locator('#main-view').waitFor({ state: 'visible' });
  }
  await actual.locator('[data-toggle-menu]').click();
  assert(await actual.locator('#mobile-drawer').evaluate(el => el.classList.contains('open')));
  await actual.locator('#mobile-drawer a[href="#awards"]').click();
  assert.equal(await actual.locator('#mobile-drawer').evaluate(el => el.classList.contains('open')), false);
  await actual.locator('[data-toggle-theme]').click();
  await actual.reload();
  assert.equal(await actual.locator('body').evaluate(el => el.classList.contains('dark')), false);
  await load(actual, '/#detail-7');
  await actual.locator('#main-view').waitFor({ state: 'visible' });
  assert.equal(await actual.locator('#detail-view').isVisible(), false);
  await actual.locator('[data-project-id="detail-1"]').evaluate(el => el.setAttribute('data-project-id', 'missing'));
  await actual.locator('[data-project-id="missing"]').click();
  assert.equal(await actual.locator('#main-view').isVisible(), true);
  assert.equal(new URL(actual.url()).hash, '#detail-7');
  assert.deepEqual(errors, [], 'Browser JavaScript exceptions');
  console.log('PASS keyboard, history, main navigation, mobile menu, reload, invalid ID, no JS exceptions');
  await actual.goto(base + '/');
  await actual.locator('#main-view').waitFor();
  await actual.setViewportSize({ width: 1280, height: 900 });
  await actual.screenshot({ path: path.join(root, 'tests/desktop.png'), fullPage: true });
  await actual.setViewportSize({ width: 375, height: 900 });
  await actual.screenshot({ path: path.join(root, 'tests/mobile.png'), fullPage: true });
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  server.close();
});
