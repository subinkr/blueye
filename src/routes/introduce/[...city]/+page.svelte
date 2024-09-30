<script>
  import Houses from './houses.svelte';
  import Trips from './trips.svelte';
  import Title from '$lib/components/title.svelte';
  import TitleSmall from '$lib/components/title-small.svelte';

  import { page } from '$app/stores';

  export let data;
</script>

<div class="w-full h-48 bg-primary-700 flex flex-col gap-4 justify-end items-center">
  <div class="w-9/12 text-white flex flex-col sm:flex-row items-center sm:items-end justify-end">
    <Title>{data.region}</Title>
    <TitleSmall>{data.country}</TitleSmall>
  </div>
  <div class="w-full sm:w-9/12 h-16 bg-white dark:bg-gray-900 flex justify-center items-center gap-4 sm:gap-8 rounded-t-lg">
    <a class={$page.url.search === '' ? "underline" : "hover:underline"} href="/introduce/{$page.params.city}"><TitleSmall>전체</TitleSmall></a>
    <a class={$page.url.search === '?houses' ? "underline" : "hover:underline"} href="/introduce/{$page.params.city}?houses"><TitleSmall>부동산</TitleSmall></a>
    <a class={$page.url.search === '?trips' ? "underline" : "hover:underline"} href="/introduce/{$page.params.city}?trips"><TitleSmall>한달살기</TitleSmall></a>
  </div>
</div>
{#if $page.url.search === '?houses' || $page.url.search === '' }
  <div id="houses" class="w-full sm:px-20 py-8">
    <Houses houses={data.houses} />
  </div>
{/if}
{#if $page.url.search === '?trips' || $page.url.search === '' }
  <div id="trips" class="w-full sm:px-20 py-8">
    <Trips trips={data.trips} />
  </div>
{/if}