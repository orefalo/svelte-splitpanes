<script context="module" lang="ts">
  export interface Page {
    title: string;
    path: string;
  }

  export interface Section {
    title: string;
    pages: Page[];
  }
</script>

<script lang="ts">
  import { page } from '$app/state';
  import { pathIsCurrent } from '../routes/pathUtils';
  import { resolve } from '$app/paths';

  const base = page.url.origin + resolve('/');

  export let contents: Section[] = [];
</script>

<nav aria-label="Docs">
  <ul class="sidebar">
    {#each contents as section}
      <li>
        <span class="section">
          {section.title}
        </span>

        <ul>
          {#each section.pages as { title, path }}
            <li>
              <a
                data-sveltekit-preload-data
                class="page"
                aria-current={pathIsCurrent(path, page) ? 'page' : undefined}
                href={base + path}>
                {title}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    color: rgb(103, 103, 121);
    padding: 0 10px;
  }

  .sidebar {
    padding: 4px;
    height: 100%;
    bottom: auto;
    width: 100%;
    columns: 2;
    margin: 0;
  }

  li {
    display: block;
    line-height: 1.2;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    position: relative;
    transition: color 0.2s;
    border-bottom: none;
    padding: 0;
    color: rgb(94, 94, 94);
    user-select: none;
  }

  a:not(:hover) {
    text-decoration: none;
  }

  .section {
    display: block;
    padding-bottom: 0.8rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .page {
    display: block;
    font-size: 1.2rem;
    padding-bottom: 0.6em;
  }

  [aria-current='page'] {
    font-weight: 700;
    color: rgb(75, 75, 75);
  }

  ul ul,
  ul ul li {
    margin: 0;
    padding: 0.05rem 0.8rem;
  }

  @media (min-width: 600px) {
    .sidebar {
      columns: 2;
    }
  }

  @media (min-width: 700px) {
    .sidebar {
      columns: 3;
    }
  }

  @media (min-width: 832px) {
    .sidebar {
      columns: 1;
      width: 28rem;
      margin: 0 0 0 auto;
    }

    nav {
      min-height: calc(100vh - 4.2rem);
    }
  }
</style>
