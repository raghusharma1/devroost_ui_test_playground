import { BasePage } from './BasePage.js';
import { SearchResultsPage } from './SearchResultsPage.js';
import { ExplorePage } from './ExplorePage.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Navigates to the Unsplash homepage
   */
  async navigateToHome() {
    await this.page.goto('https://unsplash.com', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    return this;
  }
}