import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { HomePage } from './pom/HomePage.js';
import { ErrorPage } from './pom/ErrorPage.js';
import { BasePage } from './pom/BasePage.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_HOST_URL = process.env.BASE_HOST_URL || 'https://unsplash.com';
const BASE_URL = process.env.BASE_URL || 'https://unsplash.com/';

let stepTimeout30 = { timeout: 30000 };

test('Discovered Workflow: Unsplash+ Subscription Discovery -- Partial', { tag: ['@regression'] }, async ({ page }) => {
  const homePage = new HomePage(page);
  const errorPage = new ErrorPage(page);
  const basePage = new BasePage(page);

  // Step 1: Navigate to homepage
  await homePage.goto();
  // Verification point: Page loads (Agent observed access block)
  // Note: The scenario mentions an access block, so we proceed with the recorded flow.

  // Step 2: Navigate to Unsplash+ subpage
  await homePage.navigateToUnsplashPlus();
  // Verification point: Unsplash+ content is displayed (Agent observed access block)

  // Step 3: Navigate to Google
  await basePage.navigate('https://www.google.com');
  await expect(page).toHaveURL(/google\.com/);

  // Step 4: Navigate back to Unsplash
  await homePage.goto();

  // Step 5: Verify Block Page State
  // Identify the 'Go home' link on the blocked/error page.
  await expect(errorPage.goHomeLink).toBeVisible(stepTimeout30);
  
  // Final Goal Verification: Go home link is visible
  await expect(errorPage.goHomeLink).toBeVisible();
});

