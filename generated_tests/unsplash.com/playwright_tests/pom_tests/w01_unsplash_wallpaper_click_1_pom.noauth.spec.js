import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { HomePage } from './pom/HomePage.js';
import { WallpapersTopicPage } from './pom/WallpapersTopicPage.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || 'https://unsplash.com/';
const BASE_HOST_URL = process.env.BASE_HOST_URL || 'https://unsplash.com';

let stepTimeout30 = { timeout: 30000 };

test.describe('Unsplash Wallpaper Browsing', () => {
  test('Discovered Workflow: Unsplash Wallpaper Click (1) - Complete User Journey', { tag: ['@smoke'] }, async ({ page }) => {
    const homePage = new HomePage(page);

    // Step 1: Navigate to homepage
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Step 2: Click on the 'Wallpapers' link in the top navigation bar
    const wallpapersPage = await homePage.navigateToWallpapers();
    
    // Verification: URL changes to the wallpapers topic page
    await expect(page).toHaveURL(new RegExp('^' + BASE_HOST_URL + '/t/wallpapers(/.*)?$'), stepTimeout30);

    // Step 3: Click on the specific wallpaper 'Rippling blue water surface'
    await wallpapersPage.selectSpecificWallpaper();

    // Final Verification: The final URL matches the specific photo ID 'LYwdBEJc6Y'
    await expect(page).toHaveURL(/.*LYwdBEJc6Y.*/, stepTimeout30);
  });
});

