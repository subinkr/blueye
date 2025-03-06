<script>
  import Houses from './houses.svelte';
  import Tours from './tours.svelte';
  import Title from '$lib/components/title.svelte';
  import TitleSmall from '$lib/components/title-small.svelte';
  import { menus } from '$lib/data/menus'

  import { page } from '$app/stores';

  export let data;

  $: houses = data.houses;
  
  $: [country] = menus.filter((country) => country.child.filter(city => city.href === $page.url.pathname).length);
  $: [city] = country.child.filter(city => city.href === $page.url.pathname)

</script>

<div class="w-full relative">
  <!-- Background with overlay gradient -->
  <div class="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10">
      <div class="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-400 blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-400 blur-3xl"></div>
    </div>
    <!-- Geometric pattern overlay -->
    <div class="absolute inset-0 opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" stroke-width="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>

  <!-- Content -->
  <div class="relative py-20 px-4 flex flex-col items-center">
    <!-- City badge -->
    <div class="inline-flex items-center px-4 py-1 bg-yellow-400 text-primary-900 text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-md">
      <span>{country.title}</span>
    </div>
    
    <!-- City name -->
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
      {city.title}
    </h1>
    
    <!-- Decorative line -->
    <div class="w-24 h-1 bg-yellow-400 mb-6"></div>
    
    <!-- Description -->
    <p class="text-white text-opacity-90 max-w-2xl text-center mb-8">
      블루아이가 엄선한 {city.title}의 프리미엄 매물을 만나보세요
    </p>
    
    <!-- Stats -->
    <div class="flex flex-wrap justify-center gap-8 mt-4">
      <div class="flex flex-col items-center">
        <span class="text-2xl font-bold text-white">{houses.length}</span>
        <span class="text-sm text-white text-opacity-80">등록 매물</span>
      </div>
    </div>
  </div>
</div>

<!-- {#if !$page.url.searchParams.get('q') || $page.url.searchParams.get('q') === 'houses'} -->
  <div id="houses" class="w-full sm:px-20 py-8">
    <Houses houses={houses} />
  </div>
<!-- {/if} -->
<!-- {#if !$page.url.searchParams.get('q') || $page.url.searchParams.get('q') === 'tours'}
  <div id="tours" class="w-full sm:px-20 py-8">
    <Tours tours={tours} />
  </div>
{/if} -->