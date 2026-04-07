import { BasePage } from './BasePage.js';

export class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Verifies if the search results page is loaded for the expected term
   * @param {string} term 
   * @returns {Promise<boolean>}
   */
  async isLoaded(term) {
    const url = this.page.url();
    return url.includes(`/s/photos/${term}`);
  }
}