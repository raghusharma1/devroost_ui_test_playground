export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    return this;
  }

  async waitForURL(urlPattern) {
    await this.page.waitForURL(urlPattern, { timeout: 60000 });
    return this;
  }
}
