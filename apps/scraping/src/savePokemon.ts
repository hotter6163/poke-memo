const playwright = require('@playwright/test');

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false, // ヘッドレスモードをオフ
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://ja.wikipedia.org/');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
