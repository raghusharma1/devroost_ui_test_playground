export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigates to a specific URL
   * @param {string} url 
   */
  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  /**
   * Returns the current page URL
   * @returns {string}
   */
  getUrl() {
    return this.page.url();
  }
}