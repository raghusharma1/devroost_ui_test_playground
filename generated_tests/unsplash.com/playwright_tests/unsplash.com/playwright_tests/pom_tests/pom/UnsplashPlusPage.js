import { BasePage } from './BasePage.js';

export class UnsplashPlusPage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Navigates directly to the Unsplash+ landing page
   * @returns {Promise<this>}
   */
  async goto() {
    await this.navigate('https://unsplash.com/plus');
    return this;
  }
}