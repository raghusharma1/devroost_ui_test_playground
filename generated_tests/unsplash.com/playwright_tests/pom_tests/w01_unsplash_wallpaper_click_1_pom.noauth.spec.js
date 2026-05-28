import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { HomePage } from './pom/HomePage.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || 'https://unsplash.com/';
const BASE_HOST_URL = process.env.BASE_HOST_URL || 'https://unsplash.com';

let stepTimeout30 = { timeout: 30000 };

test('Discovered Workflow: e2e_business_workflow - Unsplash Wallpaper Click (1)', { tag: ['@smoke'] }, async ({ page }) => {
  const homePage = new HomePage(page);

  // Step 1: Navigate to homepage
  await homePage.navigate(BASE_URL);

  // Step 2: Click on the 'Wallpapers' category link
  const wallpapersPage = await homePage.navigateToWallpapers();
  
  // Verification: URL changes to /t/wallpapers
  await expect(page).toHaveURL(new RegExp(`${BASE_HOST_URL}/t/wallpapers`));

  // Step 3: Click on the specific wallpaper image link
  const photoDetailPage = await wallpapersPage.selectWallpaperImage();

  // Verification: Navigated to the specific photo detail page
  // The URL pattern from scenario: /photos/a-black-and-white-photo-of-trees-in-the-dark-4D_Ou7Xb944
  await expect(page).toHaveURL(new RegExp(`${BASE_HOST_URL}/photos/.*`));

  // Step 4: Click 'Got it!' to dismiss the Unsplash+ promotional overlay
  await photoDetailPage.dismissOverlay();

  // Final Goal Verification: Ensure we are on a photo detail page
  await expect(page).toHaveURL(/.*\/photos\/.*/);
});

