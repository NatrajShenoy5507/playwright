import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-staging.primegov.com/');
  await page.getByRole('heading', { name: 'Current & Upcoming Meetings' }).click();
  await expect(page.getByRole('heading')).toContainText('Current & Upcoming Meetings');
  await page.getByText('Preview the message').click();
  await expect(page.locator('#main-content')).toContainText('Preview the message');
});