import { BasePage } from './BasePage.js';

export class DocumentationPage extends BasePage {
  constructor(page) {
    super(page);
    /**
     * Selectors for DocumentationPage
     * 1. page.getByRole('link', { name: 'Search photos', exact: true })
     * 2. page.getByRole('link', { name: /Search photos/ })
     * 3. page.getByText('Search photos')
     */
    this.searchPhotosLink = page.getByRole('link', { name: 'Search photos', exact: true });
  }

  /**
   * Clicks on the 'Search photos' link in the documentation menu
   * @returns {Promise<this>}
   */
  async selectSearchPhotosEndpoint() {
    await this.searchPhotosLink.click({ timeout: 30000 });
    return this;
  }
}