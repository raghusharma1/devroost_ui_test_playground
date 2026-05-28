import { BasePage } from './BasePage.js';

export class PhotoDetailPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    // Selectors
    // 1. page.getByRole('button', { name: 'Got it!' })
    // 2. page.locator('[role="dialog"]').getByRole('button', { name: 'Got it!' })
    // 3. page.getByRole('button', { name: /Got it!/ })
    this.dismissOverlayBtn = page.getByRole('button', { name: 'Got it!' });
  }

  /**
   * Dismisses the Unsplash+ promotional overlay
   * @returns {Promise<this>}
   */
  async dismissOverlay() {
    // The overlay might be optional or take a moment to appear
    try {
      await this.dismissOverlayBtn.waitFor({ state: 'visible', timeout: 15000 });
      await this.dismissOverlayBtn.click({ timeout: 30000 });
    } catch (e) {
      // If the overlay doesn't appear, we continue
    }
    return this;
  }
}
