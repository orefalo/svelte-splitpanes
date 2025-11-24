<script lang="ts">
  import { asset } from '$app/paths';
  import { page } from '$app/state';
  const origin = page.url.origin;
</script>

<img alt="Minified Size" src={origin + asset('/minified-size-badge.svg')} />

<p>
  The badge above shows the minimized size of the library when all features are used.
  <br />
  Please note, the size includes type definitions, styles and components.
</p>
