import { expect, test } from '@playwright/test';

test('add, remove all and add again works', async ({ page }) => {
	await page.goto('/');

	const areaLocator = page.locator('text=Add Remove Panes');
	await areaLocator.click();

	const addPaneLocator = page.locator(
		':has-text("Adding and removing panes programmatically")~div button:has-text("Add pane")'
	);
	const removePaneLocator = page.locator(
		':has-text("Adding and removing panes programmatically")~div button:has-text("Remove pane")'
	);
	const splitpanesLocator = page
		.locator(':has-text("Adding and removing panes programmatically")~div div.splitpanes')
		.first();
	const panesLocator = splitpanesLocator.locator('.splitpanes__pane');

	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(3);

	await addPaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(4);

	await removePaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(3);

	await removePaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(2);

	await removePaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(1);

	await removePaneLocator.click();
	expect(await removePaneLocator.isDisabled()).toBe(true);
	expect(await panesLocator.count()).toBe(0);

	await addPaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(1);
	expect(await panesLocator.getAttribute('style')).toBe('width: 100%;');
	expect((await panesLocator.boundingBox()).x).toBeGreaterThan(10);

	await addPaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(2);

	await addPaneLocator.click();
	expect(await removePaneLocator.isEnabled()).toBe(true);
	expect(await panesLocator.count()).toBe(3);
});
