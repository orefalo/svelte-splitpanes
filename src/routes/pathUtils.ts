import type { Page } from '@sveltejs/kit';
import { resolve } from '$app/paths';

const removeTrailingSlash = (path: string) => (path.endsWith('/') ? path.slice(0, -1) : path);

export const pathIsCurrent = (path: any, currentPage: Page) =>
  resolve(path) === removeTrailingSlash(currentPage.url.pathname);
