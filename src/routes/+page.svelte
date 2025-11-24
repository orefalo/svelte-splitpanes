<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { page } from '$app/state';
  const origin = page.url.origin;
</script>

<h1>Welcome to Svelte-Splitpane demo!</h1>

<a href="https://github.com/orefalo/svelte-splitpanes">
  https://github.com/orefalo/svelte-splitpanes
</a>

<h2>Features</h2>

<a href={origin + resolve('/minified-size')}>
  <img alt="Minified Size" src={origin + asset('/minified-size-badge.svg')} />
</a>

<ul>
  <li>Support both dynamic horizontal and vertical splits</li>
  <li>Support defaults, min and max sizes</li>
  <li>Support multiple splits</li>
  <li>Support lifecyle events</li>
  <li>Support custom divider size or overlay</li>
  <li>Support splitter pane pushing</li>
  <li>Support RTL rendering with auto-detection</li>
  <li>Support first splitter on/off</li>
  <li>Support pane toggle</li>
  <li>Support edge snapping</li>
  <li>Support programmatic resizing and two-way size binding</li>
  <li>Support programmatic panes add/remove</li>
  <li>Support programmatic panes reordering by Svelte keyed each blocks</li>
  <li>Support for legacy browser such as IE 11</li>
  <li>Support for touch devices</li>
  <li>Sveltekit & Typescript friendly</li>
</ul>
