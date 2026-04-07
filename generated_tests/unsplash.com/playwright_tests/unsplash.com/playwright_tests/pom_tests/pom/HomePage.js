import { BasePage } from './BasePage.js';
import { SearchResultsPage } from './SearchResultsPage.js';
import { UnsplashPlusPage } from './UnsplashPlusPage.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  /**
   * Navigates to the Unsplash homepage
   * @returns {Promise<this>}
   */
  async goto() {
    await this.page.goto('https://unsplash.com', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    return this;
  }

  /**
   * Navigates directly to search results for a specific term
   * @param {string} term 
   * @returns {SearchResultsPage}
   */
  async navigateToSearch(term) {
    await this.page.goto(`https://unsplash.com/s/photos/${term}`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    return new SearchResultsPage(this.page);
  }

  /**
   * Navigates directly to the Unsplash+ landing page
   * @returns {Promise<UnsplashPlusPage>}
   */
  async navigateToUnsplashPlus() {
    await this.page.goto('https://unsplash.com/plus', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    return new UnsplashPlusPage(this.page);
  }
}