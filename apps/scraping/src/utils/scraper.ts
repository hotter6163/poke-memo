import { chromium, Page } from '@playwright/test';

export const scraper = (handler: (page: Page) => Promise<void>) => async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await handler(page);

  await browser.close();
};
