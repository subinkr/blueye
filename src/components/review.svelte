<script>
  import { Card } from 'flowbite-svelte';
  import TitleSmall from './title-small.svelte';

  export let img = null;
  export let title;
  export let detail;
  export let region;
  export let building;
  export let content;
  export let horizontal = null;
</script>

<div class="w-64">
  <Card {img} {horizontal} class="flex justify-between gap-4 min-h-[340px] relative">
    <div>
      <TitleSmall>{region}</TitleSmall>
      <TitleSmall>{building}</TitleSmall>
    </div>
    <div class="flex items-end justify-between">
      <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-400 dark:text-white">{detail}</h5>
    </div>
    <p class="flex-1 mb-3 font-normal flex justify-center items-center text-gray-700 dark:text-gray-400 leading-tight">{content}</p>
    <slot />
  </Card>
</div>