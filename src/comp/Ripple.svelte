<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { backOut } from 'svelte/easing';

  export let x, y, sizeIn, size, speed, rippleBlur, opacityIn;

  onMount(() => {
    rippleOpacity.set(0);
    rippleSize.set(size);
  });

  const rippleSize = tweened(sizeIn, { duration: speed });
  const rippleOpacity = tweened(opacityIn, { duration: speed + speed * 2.5, easing: backOut });
</script>

<defs>
  <filter id="f1" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation={rippleBlur} />
  </filter>
</defs>
<circle cx={x} cy={y} r={$rippleSize} opacity={$rippleOpacity} filter="url(#f1)" />

<style>
  circle {
    fill: var(--ripple);
  }
</style>
