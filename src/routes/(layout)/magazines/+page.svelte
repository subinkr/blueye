<script>
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  export let data;

  // 실제 API로부터 받은 데이터 사용
  $: magazines = data.magazines || [];
  $: type = $page.url.searchParams.get('type');
  
  // Determine which magazine type to display based on type parameter
  $: isFact = type === 'fact';
  $: isLitchi = type === 'litchi';
  $: isInsight = type === 'insight';
  $: isEdu = type === 'edu';
  $: isTimes = type === 'times';
  
  // Default to litchi if no type is specified
  $: if (!type) {
    isLitchi = true;
    isFact = false;
    isInsight = false;
    isEdu = false;
    isTimes = false;
  }
  
  // Magazine configuration based on type
  $: magazineConfig = {
    fact: {
      title: '더 팩트',
      subtitle: '',
      placeholderTitle: 'FACT',
      gradientColors: 'from-blue-500 to-indigo-600',
      accentColor: 'blue'
    },
    litchi: {
      title: '더 리치',
      subtitle: '',
      placeholderTitle: 'LITCHI',
      gradientColors: 'from-purple-500 to-pink-600',
      accentColor: 'purple'
    },
    insight: {
      title: '상속 인사이트',
      subtitle: '',
      placeholderTitle: 'INSIGHT',
      gradientColors: 'from-emerald-500 to-green-600',
      accentColor: 'green'
    },
    edu: {
      title: '에듀 아시아',
      subtitle: '',
      placeholderTitle: 'EDU',
      gradientColors: 'from-gray-500 to-orange-600',
      accentColor: 'gray'
    },
    times: {
      title: '베한 타임즈',
      subtitle: '',
      placeholderTitle: 'TIMES',
      gradientColors: 'from-red-500 to-rose-600',
      accentColor: 'red'
    }
  };
  
  // Get current magazine configuration
  $: currentConfig = isLitchi 
    ? magazineConfig.litchi 
    : (isFact 
      ? magazineConfig.fact 
      : (isInsight 
        ? magazineConfig.insight 
        : (isEdu 
          ? magazineConfig.edu 
          : (isTimes 
            ? magazineConfig.times 
            : magazineConfig.litchi))));

  // 현재 타입에 맞는 매거진 필터링 및 날짜 기준 내림차순 정렬 (최신순)
  $: displayMagazines = magazines
    .filter(mag => {
      if (isLitchi) return mag.type === 'litchi';
      if (isFact) return mag.type === 'fact';
      if (isInsight) return mag.type === 'insight';
      if (isEdu) return mag.type === 'edu';
      if (isTimes) return mag.type === 'times';
      return mag.type === 'litchi'; // 기본값
    })
    .sort((a, b) => {
      // ID로 정렬 (높은 ID가 최신)
      return b.id - a.id;
    });
    
  // 최신 매거진의 발행일 (없으면 현재 날짜 사용)
  $: latestPublishedDate = displayMagazines && displayMagazines.length > 0 && displayMagazines[0].published 
    ? displayMagazines[0].published 
    : `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
</script>

<div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">

  <!-- 헤더 섹션 -->
  <div class="mb-16 flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200 dark:border-gray-800 pb-6" in:fade={{ duration: 400, delay: 200 }}>
    <div>
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 inline-flex items-baseline">
        {currentConfig.title}
        <span class="bg-{currentConfig.accentColor}-500 w-2 h-2 rounded-full ml-1.5 inline-block"></span>
        {#if isLitchi}
          <a
            href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgwb8T4nNqO21nRRvx5Fu5W6"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-4 inline-flex items-center px-3 py-1.5 border border-{currentConfig.accentColor}-400 text-{currentConfig.accentColor}-600 dark:text-{currentConfig.accentColor}-200 bg-white dark:bg-gray-900 rounded-full shadow-sm text-sm font-semibold hover:bg-{currentConfig.accentColor}-50 dark:hover:bg-{currentConfig.accentColor}-900/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-{currentConfig.accentColor}-400"
            style="vertical-align: middle;"
          >
            구독 신청
          </a>
        {/if}
      </h1>
    </div>
    <div class="mt-4 md:mt-0 flex items-center text-gray-500 dark:text-gray-400">
      <span class="text-sm tracking-wider">{latestPublishedDate}</span>
      <span class="mx-3 text-gray-300 dark:text-gray-600">|</span>
      <span class="text-sm tracking-wider font-medium">EDITIONS</span>
    </div>
  </div>

  <!-- 빈 상태 표시 -->
  {#if !displayMagazines || displayMagazines.length === 0}
    <div class="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700" in:fade>
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
      <h3 class="mt-2 text-xl font-medium text-gray-900 dark:text-white">등록된 {currentConfig.title} 매거진이 없습니다</h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">곧 새로운 매거진이 업로드될 예정입니다.</p>
    </div>
  {:else}
    <!-- 매거진 그리드 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {#each displayMagazines as magazine, i (magazine.id)}
        <div 
          class="magazine-card group relative overflow-hidden bg-white dark:bg-gray-800 zoom-shadow rounded-lg aspect-[3/4] w-full"
          in:fly={{ y: 20, duration: 400, delay: 100 + (i * 100) }}
        >
          <a 
            href={magazine.redirectUrl}
            target="_blank" 
            rel="noopener noreferrer"
            class="block h-full w-full"
          >
            {#if magazine.thumbnailUrl}
              <!-- 썸네일 이미지 (확대 효과) -->
              <div class="relative h-full w-full overflow-hidden">
                <img 
                  src={magazine.thumbnailUrl}
                  alt={magazine.title}
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <!-- 상단 장식 테두리 -->
                <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-{currentConfig.accentColor}-600 via-{currentConfig.accentColor}-400 to-{currentConfig.accentColor}-600 z-20"></div>
                
                <!-- 오버레이 및 그라데이션 (슬라이드업 효과) -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-80 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                
                <!-- 최신호 배지 -->
                {#if i === 0}
                  <div class="absolute top-4 left-4 z-20">
                    <div class="flex items-center bg-{currentConfig.accentColor}-500 text-white text-xs px-2.5 py-1.5 rounded-md uppercase tracking-wider font-bold shadow-md">
                      <div class="w-1.5 h-1.5 mr-1.5 bg-white rounded-full pulse-dot"></div>
                      <span>Latest</span>
                    </div>
                  </div>
                {/if}
                
                <!-- 매거진 기본 정보 -->
                <div class="absolute bottom-0 left-0 right-0 p-7 text-white z-20 transform translate-y-0 transition-all duration-500 ease-out">
                  <!-- 제목 -->
                  <h3 class="text-xl md:text-2xl font-bold leading-tight line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                    {magazine.title}
                  </h3>
                  
                  <!-- 발행일 -->
                  {#if magazine.published}
                    <div class="mt-3 text-sm text-white/80 group-hover:opacity-0 transition-opacity duration-300">
                      {magazine.published}
                    </div>
                  {/if}
                </div>
                
                <!-- 호버시 나타나는 추가 정보 (슬라이드업) -->
                <div class="absolute bottom-0 left-0 right-0 bg-{currentConfig.accentColor}-900/90 p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30">
                  <div class="text-white mb-4">
                    <div class="text-lg font-bold mb-2">{magazine.title}</div>
                    {#if magazine.published}
                      <div class="text-sm text-white/80 mb-3">{magazine.published}</div>
                    {/if}
                    {#if magazine.description}
                      <p class="text-base opacity-90">
                        {magazine.description}
                      </p>
                    {/if}
                  </div>
                  
                  <div class="inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-md text-white text-sm transition-all duration-200">
                    <span class="mr-2 font-medium">자세히 보기</span>
                    <svg class="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            {:else}
              <div class="w-full h-full bg-gradient-to-br {currentConfig.gradientColors} flex items-center justify-center">
                <div class="text-white text-center p-6">
                  <div class="text-3xl font-bold mb-2">{currentConfig.placeholderTitle}</div>
                </div>
              </div>
            {/if}
          </a>
          
          <!-- 호버시 나타나는 다이내믹 그라데이션 테두리 -->
          <div class="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-{currentConfig.accentColor}-500 group-hover:via-{currentConfig.accentColor}-300 group-hover:to-{currentConfig.accentColor}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40 pointer-events-none gradient-animate"></div>
        </div>
      {/each}
    </div>
    
    <!-- 더보기 버튼 -->
    {#if displayMagazines.length > 6}
      <div class="flex justify-center mt-12">
        <button class="group inline-flex items-center px-4 py-2 border border-{currentConfig.accentColor}-200 dark:border-{currentConfig.accentColor}-800 rounded-md text-sm font-medium text-{currentConfig.accentColor}-600 dark:text-{currentConfig.accentColor}-400 hover:bg-{currentConfig.accentColor}-50 dark:hover:bg-{currentConfig.accentColor}-900/30 transition-all duration-300">
          <span>전체 아카이브 보기</span>
          <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    {/if}
    
    <!-- 매거진 전문성 강화를 위한 안내 텍스트 -->
    <div class="mt-20 text-center max-w-4xl mx-auto px-6">
      <div class="flex items-center justify-center space-x-4 mb-6">
        <div class="w-16 h-[1px] bg-{currentConfig.accentColor}-500/30"></div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-{currentConfig.accentColor}-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        <div class="w-16 h-[1px] bg-{currentConfig.accentColor}-500/30"></div>
      </div>
      <div class="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        <span> {new Date().getFullYear()} {currentConfig.title}</span>
        <span>•</span>
        <span>ISSN: 2021-{Math.floor(1000 + Math.random() * 9000)}</span>
        <span>•</span>
        <span>월간 발행</span>
      </div>
    </div>
  {/if}
</div>

<style>
  /* 매거진 카드 애니메이션 효과 */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 펄스 애니메이션 */
  .pulse-dot {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
  
  /* 줌 및 그림자 효과 */
  .zoom-shadow {
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    width: 100%;
  }
  
  .zoom-shadow:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
                0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* 그라데이션 테두리 애니메이션 */
  .gradient-animate {
    background-size: 300% 300%;
    animation: moveGradient 4s alternate infinite;
  }
  
  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>