<script>
  import Houses from './houses.svelte';
  import Tours from './tours.svelte';
  import Title from '$lib/components/title.svelte';
  import TitleSmall from '$lib/components/title-small.svelte';
  import { menus } from '$lib/data/menus'

  import { page } from '$app/stores';

  export let data;

  $: houses = data.houses;
  $: tours = data.tours;
  
  $: [country] = menus.filter((country) => country.child.filter(city => city.href === $page.url.pathname).length);
  $: [city] = country.child.filter(city => city.href === $page.url.pathname)

</script>

<div class="w-full h-48 bg-primary-700 flex flex-col sm:gap-4 justify-end items-center">
  <div class="w-9/12 h-full text-white flex flex-col sm:flex-row items-center justify-center sm:items-end sm:justify-end">
    <Title>{city.title}</Title>
    <TitleSmall>{country.title}</TitleSmall>
  </div>
  <div class="w-full sm:w-9/12 min-h-16 bg-white dark:bg-gray-900 flex justify-between px-8 items-center gap-4 sm:gap-8 rounded-t-lg">
    <a class={$page.url.search === '' ? "underline" : "hover:underline"} href="/introduces/{$page.params.city}"><TitleSmall>전체</TitleSmall></a>
    <div class="flex gap-4 sm:gap-8">
      <a class={$page.url.searchParams.get('q') === 'houses' ? "underline" : "hover:underline"} href="/introduces/{$page.params.city}?q=houses"><TitleSmall>매물</TitleSmall></a>
      <a class={$page.url.searchParams.get('q') === 'tours' ? "underline" : "hover:underline"} href="/introduces/{$page.params.city}?q=tours"><TitleSmall>투어</TitleSmall></a>
    </div>
  </div>
</div>
{#if !$page.url.searchParams.get('q') || $page.url.searchParams.get('q') === 'houses'}
  <div id="houses" class="w-full sm:px-20 py-8">
    <Houses houses={houses} />
  </div>
{/if}
<!-- {#if !$page.url.searchParams.get('q') || $page.url.searchParams.get('q') === 'tours'}
  <div id="tours" class="w-full sm:px-20 py-8">
    <Tours tours={tours} />
  </div>
{/if} -->