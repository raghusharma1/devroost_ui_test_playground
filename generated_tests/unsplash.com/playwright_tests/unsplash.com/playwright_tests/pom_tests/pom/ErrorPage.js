import { BasePage } from './BasePage.js';

export class ErrorPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectors
    // 1. page.getByRole('link', { name: 'Go home' })
    // 2. page.getByRole('link', { name: /Go home/ })
    // 3. page.getByText('Go home')
    this.goHomeLink = page.getByRole('link', { name: 'Go home' });
  }

  /**
   * Clicks the 'Go home' link on the error or block page
   * @returns {Promise<void>}
   */
  async clickGoHome() {
    await this.goHomeLink.click({ timeout: 30000 });
  }
}