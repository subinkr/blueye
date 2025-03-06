<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  export let data;

  $: magazines = data.magazines;
  $: type = $page.url.searchParams.get('type');
  
  // Determine which magazine type to display based on type parameter
  $: isFact = type === 'fact';
  $: isLitchi = type === 'litchi';
  $: isInsight = type === 'insight';
  
  // Default to litchi if no type is specified
  $: if (!type) {
    isLitchi = true;
    isFact = false;
    isInsight = false;
  }
  
  // Magazine configuration based on type
  $: magazineConfig = {
    fact: {
      title: '더 팩트',
      subtitle: 'The Fact',
      placeholderTitle: 'FACT',
      gradientColors: 'from-blue-500 to-indigo-600',
      accentColor: 'blue'
    },
    litchi: {
      title: '더 리치',
      subtitle: 'The Litchi',
      placeholderTitle: 'LITCHI',
      gradientColors: 'from-purple-500 to-pink-600',
      accentColor: 'purple'
    },
    insight: {
      title: '상속 인사이트',
      subtitle: 'Inheritance Insight',
      placeholderTitle: 'INSIGHT',
      gradientColors: 'from-emerald-500 to-green-600',
      accentColor: 'green'
    }
  };
  
  // Get current magazine configuration
  $: currentConfig = isLitchi 
    ? magazineConfig.litchi 
    : (isFact 
      ? magazineConfig.fact 
      : magazineConfig.insight);
</script>

<div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="flex flex-col items-center mb-12 text-center" in:fade={{ duration: 400, delay: 200 }}>
    <div class="inline-block mb-4">
      <span class="bg-{currentConfig.accentColor}-50 dark:bg-{currentConfig.accentColor}-900/30 text-{currentConfig.accentColor}-700 dark:text-{currentConfig.accentColor}-300 text-xs font-medium px-3 py-1 rounded-full">
        MAGAZINE
      </span>
    </div>
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
      {currentConfig.title}
    </h1>
    <p class="text-gray-600 dark:text-gray-400 text-center max-w-2xl text-lg">
      {currentConfig.subtitle}
    </p>
  </div>

  {#if !magazines || magazines.length === 0}
    <div class="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl" in:fade>
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
      <h3 class="mt-2 text-xl font-medium text-gray-900 dark:text-white">등록된 {currentConfig.title} 매거진이 없습니다</h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">곧 새로운 매거진이 업로드될 예정입니다.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {#each magazines as magazine, i (magazine.id)}
        <div 
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
          in:fly={{ y: 20, duration: 400, delay: 100 + (i * 100) }}
        >
          <a 
            href={magazine.redirectUrl}
            target="_blank" 
            rel="noopener noreferrer"
            class="block h-full"
          >
            <div class="relative aspect-[3/4] overflow-hidden">
              {#if magazine.thumbnailUrl}
                <img 
                  src={magazine.thumbnailUrl}
                  alt={magazine.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              {:else}
                <div class="w-full h-full bg-gradient-to-br {currentConfig.gradientColors} flex items-center justify-center">
                  <div class="text-white text-center p-6 transform group-hover:scale-110 transition-transform duration-500">
                    <div class="text-3xl font-bold mb-2">{currentConfig.placeholderTitle}</div>
                    <div class="text-sm opacity-90 uppercase tracking-wider">{currentConfig.subtitle}</div>
                  </div>
                </div>
              {/if}
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div class="text-2xl font-bold line-clamp-2 mb-2">{magazine.title}</div>
                <div class="flex items-center text-sm">
                  <span>자세히 보기</span>
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  {/if}
</div>