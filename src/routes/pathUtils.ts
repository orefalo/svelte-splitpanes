import type { Page } from '@sveltejs/kit';

import { base } from '$app/paths';

const removeTrailingSlash = (path: string) => (path.endsWith('/') ? path.slice(0, -1) : path);

export const pathIsCurrent = (path: string, currentPage: Page) =>
	removeTrailingSlash(base + path) === removeTrailingSlash(currentPage.url.pathname);
