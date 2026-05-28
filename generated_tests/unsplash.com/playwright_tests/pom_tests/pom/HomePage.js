import { BasePage } from './BasePage.js';
import { WallpapersTopicPage } from './WallpapersTopicPage.js';

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    // Selectors
    // 1. page.getByRole('link', { name: 'Wallpapers' })
    // 2. page.getByText('Wallpapers')
    // 3. page.locator('a').filter({ hasText: /^Wallpapers$/ })
    this.wallpapersLink = page.getByRole('link', { name: 'Wallpapers' });
  }

  /**
   * Navigates to the Wallpapers category
   * @returns {Promise<WallpapersTopicPage>}
   */
  async navigateToWallpapers() {
    await this.wallpapersLink.click({ timeout: 30000 });
    return new WallpapersTopicPage(this.page);
  }
}
