<script>
  import { goto } from '$app/navigation';

  function navigateToDubaiTour() {
    goto('/tours/dubai');
  }
</script>

<div class="w-full bg-gradient-to-r from-blue-900 to-indigo-900 py-8 md:py-12 overflow-hidden relative dark:from-blue-950 dark:to-indigo-950">
  <!-- Background elements -->
  <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -mr-32 -mt-32"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-10 -ml-40 -mb-40"></div>
  
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
    <!-- Left content: Text -->
    <div class="md:w-1/2 text-white mb-6 md:mb-0 md:pr-8">
      <div class="inline-block px-4 py-1 bg-blue-800 text-yellow-400 rounded-full text-sm font-semibold mb-4 dark:bg-blue-900">
        특별 프로모션
      </div>
      <h2 class="text-3xl md:text-4xl font-bold mb-3 leading-tight">
        두바이 부동산 <span class="text-yellow-400">투자의 기회</span>
      </h2>
      <p class="text-gray-200 mb-6">
        세계 최고의 부동산 시장에서 직접 보고, 느끼고, 투자하는 특별한 경험. 프리미엄 투어 패키지를 지금 확인하세요.
      </p>
      
      <!-- Stats -->
      <div class="flex flex-wrap gap-6 mb-6">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-yellow-400 mr-2">0%</span>
          <span class="text-sm text-gray-300">소득세 및 양도세</span>
        </div>
        <div class="flex items-center">
          <span class="text-2xl font-bold text-yellow-400 mr-2">100%</span>
          <span class="text-sm text-gray-300">외국인 소유권</span>
        </div>
      </div>
      
      <button
        on:click={navigateToDubaiTour}
        class="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-gray-100"
      >
        투어 상세 보기
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    
    <!-- Right content: Image -->
    <div class="md:w-1/2 relative">
      <div class="relative rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
          alt="Dubai Skyline" 
          class="w-full h-64 object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div class="text-white font-semibold">두바이 프리미엄 투어</div>
          <div class="text-yellow-400 text-sm">지금 바로 신청하세요</div>
        </div>
      </div>
    </div>
  </div>
</div>
