import { BasePage } from './BasePage.js';

export class WallpapersTopicPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    // Selectors
    // 1. page.getByRole('link', { name: 'Rippling blue water surface' })
    // 2. page.locator('a.photoInfoLink-mG0SPO[href*="rn-below--LYwdBEJc6Y"]')
    // 3. page.locator('a[href*="rippling-blue-water-surface-with-tiled-pattern-below--LYwdBEJc6Y"]')
    this.specificWallpaperLink = page.getByRole('link', { name: 'Rippling blue water surface' });
  }

  /**
   * Selects a specific wallpaper to view its details
   * @returns {Promise<this>}
   */
  async selectSpecificWallpaper() {
    await this.specificWallpaperLink.click({ timeout: 30000 });
    return this;
  }
}
