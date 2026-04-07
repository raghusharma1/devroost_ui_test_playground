import { BasePage } from './BasePage.js';
import { DocumentationPage } from './DocumentationPage.js';

export class DeveloperLandingPage extends BasePage {
  constructor(page) {
    super(page);
    /**
     * Selectors for DeveloperLandingPage
     * 1. page.getByRole('link', { name: 'Documentation', exact: true })
     * 2. page.getByRole('link', { name: 'Documentation' })
     * 3. page.getByText('Documentation')
     */
    this.documentationLink = page.getByRole('link', { name: 'Documentation', exact: true });
  }

  /**
   * Navigates to the Unsplash Developers landing page
   * @returns {Promise<this>}
   */
  async navigateToDevelopers() {
    await this.page.goto('https://unsplash.com/developers', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    return this;
  }

  /**
   * Clicks on the Documentation link in the header or main section
   * @returns {Promise<DocumentationPage>}
   */
  async openDocumentation() {
    await this.documentationLink.click({ timeout: 30000 });
    return new DocumentationPage(this.page);
  }
}