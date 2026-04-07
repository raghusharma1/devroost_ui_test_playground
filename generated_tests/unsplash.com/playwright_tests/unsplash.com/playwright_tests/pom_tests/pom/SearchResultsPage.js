import { BasePage } from './BasePage.js';

export class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Navigates directly to a search results page for 'nature'
   */
  async navigateToSearch() {
    await this.page.goto('https://unsplash.com/s/photos/nature', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    return this;
  }
}