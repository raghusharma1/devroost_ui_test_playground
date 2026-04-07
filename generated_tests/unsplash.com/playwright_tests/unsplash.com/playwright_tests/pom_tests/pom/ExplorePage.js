import { BasePage } from './BasePage.js';

export class ExplorePage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Navigates directly to the explore page
   */
  async navigateToExplore() {
    await this.page.goto('https://unsplash.com/explore', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    return this;
  }
}