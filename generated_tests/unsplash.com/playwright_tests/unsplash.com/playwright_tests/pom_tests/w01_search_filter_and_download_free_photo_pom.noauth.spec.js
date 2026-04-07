import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { HomePage } from './pom/HomePage.js';
import { SearchResultsPage } from './pom/SearchResultsPage.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || 'https://unsplash.com/';
const BASE_HOST_URL = process.env.BASE_HOST_URL || 'https://unsplash.com';

let stepTimeout30 = { timeout: 30000 };

test('Discovered Workflow: Search, Filter, and Download Free Photo -- Partial', { tag: ['@smoke'] }, async ({ page }) => {
  const homePage = new HomePage(page);

  // Step 1: Navigate to homepage
  await test.step('Navigate to homepage', async () => {
    await homePage.goto();
    // Verification point: Page loaded
    await expect(page).toHaveURL(new RegExp('^' + BASE_HOST_URL.replace(/\//g, '\\/') + '.*'));
  });

  // Step 2: Direct Search Navigation
  await test.step('Direct Search Navigation to mountains', async () => {
    const searchTerm = 'mountains';
    const searchResultsPage = await homePage.navigateToSearch(searchTerm);
    
    // Verification point: Search results for 'mountains' are displayed
    const isLoaded = await searchResultsPage.isLoaded(searchTerm);
    expect(isLoaded).toBe(true);
    await expect(page).toHaveURL(new RegExp('.*/s/photos/' + searchTerm + '.*'));
  });
});

