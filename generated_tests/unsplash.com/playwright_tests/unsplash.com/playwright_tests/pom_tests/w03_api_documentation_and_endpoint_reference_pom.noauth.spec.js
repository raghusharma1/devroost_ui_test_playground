import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { DeveloperLandingPage } from './pom/DeveloperLandingPage.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_HOST_URL = process.env.BASE_HOST_URL || 'https://unsplash.com';
let stepTimeout30 = { timeout: 30000 };

test('Discovered Workflow: e2e_business_workflow - Complete User Journey', { tag: ['@smoke'] }, async ({ page }) => {
  const developerLandingPage = new DeveloperLandingPage(page);

  // Step 1: Navigate to Developer Portal
  await developerLandingPage.navigateToDevelopers();
  // The actual title is "Unsplash Image API | Free HD Photo API"
  await expect(page).toHaveTitle(/Unsplash Image API/);

  // Step 2: Click on the Documentation link
  const documentationPage = await developerLandingPage.openDocumentation();
  // Verification point: URL changes to /documentation
  await expect(page).toHaveURL(new RegExp(BASE_HOST_URL + '/documentation.*'));

  // Step 3: Click on the 'Search photos' link in the documentation menu
  await documentationPage.selectSearchPhotosEndpoint();

  // Verification: URL contains #search-photos and section is visible
  await expect(page).toHaveURL(/.*documentation#search-photos/);
  
  // Playwright implementation guidance: Verify the presence of GET /search/photos text
  await expect(page.getByText('GET /search/photos')).toBeVisible(stepTimeout30);
});

// Capture accessibility tree on failure for debugging
