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

<div class="w-full md:w-80 transition-all duration-300 hover:-translate-y-2">
  <Card {img} {horizontal} class="flex flex-col justify-between gap-4 min-h-[440px] relative shadow-md hover:shadow-lg">
    <!-- Location badge -->
    <div class="bg-yellow-50 p-3 rounded-sm border-l-4 border-yellow-400">
      <div class="text-yellow-800 font-medium text-sm">{region}</div>
      <div class="text-gray-700 text-xs">{building}</div>
    </div>
    
    <!-- Review content -->
    <p class="flex-1 px-2 font-normal text-gray-700 dark:text-gray-400 leading-relaxed italic">{content}</p>
    
    <!-- Reviewer info -->
    <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 px-2">
      <div>
        <h5 class="text-base font-bold text-gray-900 dark:text-white">{title}</h5>
        <p class="text-sm text-gray-500">{detail}</p>
      </div>
      
      <!-- Star rating -->
      <div class="flex">
        {#each Array(5) as _}
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        {/each}
      </div>
    </div>
    
    <slot />
  </Card>
</div>

<style>
  /* Add subtle hover effect */
  :global(.card) {
    transition: all 0.3s ease;
  }
  
  :global(.card:hover) {
    transform: translateY(-5px);
  }
</style>