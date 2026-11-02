const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const dist = root;
const chrome = [process.env.BROWSER_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => p && fs.existsSync(p));
assert(chrome, 'Set BROWSER_PATH to Chrome or Edge');
const server = http.createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(dist + path.sep)) throw new Error('Invalid path');
    const type = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
      '.svg': 'image/svg+xml', '.png': 'image/png' }[path.extname(file)] || 'application/octet-stream';
    res.setHeader('Content-Type', type);
    res.end(fs.readFileSync(file));
  } catch { res.writeHead(404); res.end(); }
});
let browser;
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ executablePath: chrome, headless: true });
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  async function load(suffix = '/') {
    await page.goto(base + suffix);
    await page.locator('#main-view').waitFor({ state: 'visible' });
    await page.addStyleTag({ content: '* { scroll-behavior: auto !important; transition: none !important; }' });
  }
  async function noOverflow(label) {
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), label);
  }
  for (const width of [1280, 900, 768, 480, 375, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await load();
    const featured = page.getByRole('group', { name: '대표 프로젝트', exact: true });
    const other = page.getByRole('group', { name: '다른 프로젝트', exact: true });
    assert.deepEqual(await featured.locator('[data-project-id]').evaluateAll(els => els.map(el => el.dataset.projectId)),
      ['detail-7', 'detail-4', 'detail-6', 'detail-5', 'detail-9', 'detail-2']);
    assert.equal(await other.locator('[data-project-id]').count(), 7);
    await noOverflow(`Main overflow at ${width}px`);
    for (let i = 1; i <= 13; i++) {
      await page.locator(`[data-project-id="detail-${i}"]`).click();
      const detail = page.locator(`#detail-${i}`);
      await detail.waitFor({ state: 'visible' });
      assert.equal(new URL(page.url()).hash, `#detail-${i}`);
      assert.equal(await page.locator('.project-detail:visible').count(), 1);
      if ([8, 9, 11, 12, 13].includes(i)) {
        const frames = await detail.locator('.preview-gallery-portrait .preview-image-link').evaluateAll(els =>
          els.map(el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }));
        assert(frames.every(r => r.width <= 181 && r.height <= 300), `Compact portrait previews at ${width}px`);
        if (width <= 480) assert(Math.abs(frames[0].y - frames[1].y) < 1 && frames[1].x > frames[0].x,
          `Two portrait columns on mobile at ${width}px`);
      }
      if ([2, 4, 5, 10].includes(i)) {
        const heights = await detail.locator('.preview-image-link').evaluateAll(els => els.map(el => el.getBoundingClientRect().height));
        assert(heights.every(height => height <= (width <= 480 ? 180 : 220) + 1), `Landscape preview height at ${width}px`);
      }
      await noOverflow(`Detail ${i} overflow at ${width}px`);
      await detail.locator('[data-back-to-projects]').click();
      await page.locator('#main-view').waitFor({ state: 'visible' });
    }
    await page.locator('[data-toggle-theme]').click();
    assert(await page.locator('body').evaluate(el => el.classList.contains('dark')));
    await noOverflow(`Dark overflow at ${width}px`);
    console.log(`PASS ${width}px: featured order, 13 details, back navigation, theme, no overflow`);
  }
  await load();
  for (const id of [2, 4, 5, 8, 9, 10, 11, 12, 13]) {
    const previews = page.locator(`#detail-${id} .preview-gallery img`);
    assert(await previews.count() >= 3, `At least three previews for detail ${id}`);
    const decoded = await previews.evaluateAll(async images => Promise.all(images.map(async img => {
      img.loading = 'eager';
      try { await img.decode(); return img.naturalWidth > 0 && !!img.alt; } catch { return false; }
    })));
    assert(decoded.every(Boolean), `Preview assets load with alt text for detail ${id}`);
  }
  assert.equal(await page.locator('#detail-1 img').count(), 0, 'Food app remains excluded from previews');
  assert.equal(await page.locator('#detail-1 a[href="https://github.com/ssa25879/ait-FridgePick"]').count(), 1);
  assert((await page.locator('#detail-8').textContent()).includes('기존 식품 정보 앱을 개선·확장'));
  for (const [id, repo] of [[11, 'ait-onepage-handover'], [12, 'ait-ReviewQ'], [13, 'ait-subscription-radar']]) {
    assert.equal(await page.locator(`#detail-${id} a[href="https://github.com/ssa25879/${repo}"]`).count(), 1);
  }
  const capstone = page.locator('#detail-2');
  await page.locator('[data-project-id="detail-2"]').click();
  await capstone.waitFor({ state: 'visible' });
  assert(!(await capstone.locator('.detail-tags').innerText()).includes('React'));
  assert.equal(await capstone.locator('.detail-section').filter({ has: page.getByRole('heading', { name: '담당 내용', exact: true }) }).locator('li').count(), 3);
  assert.equal(await capstone.locator('a[href="https://github.com/ssa25879/capstone"]').count(), 1);
  assert.equal(await page.locator('#detail-7 a[href="https://github.com/ssa25879/UrbanSurvival"]').count(), 1);
  assert.equal(await page.locator('#detail-4 a[href="https://youtu.be/3g2RF_wvLGw"]').count(), 1);
  assert.equal(await page.locator('#detail-9 a[href="https://ssa25879.github.io/web-TurnCal/"]').count(), 1);
  for (const key of ['Enter', 'Space']) {
    await load(`/?keyboard=${key}`);
    await page.locator('[data-project-id="detail-2"]').focus();
    await page.keyboard.press(key);
    await capstone.waitFor({ state: 'visible' });
    await page.goBack();
    await page.locator('#main-view').waitFor({ state: 'visible' });
    await page.goForward();
    await capstone.waitFor({ state: 'visible' });
    await page.locator('[data-show-main]').first().click();
    await page.locator('#main-view').waitFor({ state: 'visible' });
  }
  await page.locator('[data-toggle-menu]').click();
  assert(await page.locator('#mobile-drawer').evaluate(el => el.classList.contains('open')));
  await page.locator('#mobile-drawer a[href="#awards"]').click();
  assert.equal(await page.locator('#mobile-drawer').evaluate(el => el.classList.contains('open')), false);
  await load('/#detail-7');
  assert.equal(await page.locator('#detail-view').isVisible(), false);
  assert.equal(await page.locator('body').evaluate(el => el.classList.contains('dark')), false);
  await page.locator('[data-project-id="detail-1"]').evaluate(el => el.setAttribute('data-project-id', 'missing'));
  await page.locator('[data-project-id="missing"]').click();
  assert(await page.locator('#main-view').isVisible());
  assert.deepEqual(errors, [], 'Browser JavaScript exceptions');
  await load();
  for (const [width, name] of [[1280, 'desktop'], [375, 'mobile']]) {
    await page.setViewportSize({ width, height: 900 });
    await page.screenshot({ path: path.join(__dirname, `${name}.png`), fullPage: true });
  }
  await page.unroute('**/*');
  await page.route('https://**/*', route => route.abort());
  await page.goto(require('node:url').pathToFileURL(path.join(root, 'index.html')).href);
  await page.locator('[data-project-id="detail-2"]').click();
  await capstone.waitFor({ state: 'visible' });
  await page.locator('[data-toggle-theme]').click();
  assert(await page.locator('body').evaluate(el => el.classList.contains('dark')));
  assert.deepEqual(errors, [], 'Local file JavaScript exceptions');
  console.log('PASS content, links, keyboard, history, mobile menu, reload, invalid ID, direct file opening, no JS exceptions');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  server.close();
});
