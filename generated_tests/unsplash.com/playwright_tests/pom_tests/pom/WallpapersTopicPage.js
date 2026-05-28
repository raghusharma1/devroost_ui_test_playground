import { BasePage } from './BasePage.js';
import { PhotoDetailPage } from './PhotoDetailPage.js';

export class WallpapersTopicPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    // Selectors
    // 1. page.getByRole('link', { name: 'a black and white photo of' })
    // 2. page.locator('a.photoInfoLink-mG0SPO[href*="the-dark-4D_Ou7Xb944"]')
    // 3. page.locator('a[href*="a-black-and-white-photo-of-trees-in-the-dark-4D_Ou7Xb944"]')
    this.specificWallpaperImage = page.getByRole('link', { name: 'a black and white photo of' });
  }

  /**
   * Selects a specific wallpaper image from the gallery
   * @returns {Promise<PhotoDetailPage>}
   */
  async selectWallpaperImage() {
    await this.specificWallpaperImage.click({ timeout: 30000 });
    return new PhotoDetailPage(this.page);
  }
}
