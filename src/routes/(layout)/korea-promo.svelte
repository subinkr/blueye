<script>
  function navigateToKakaoChat() {
    window.open('https://pf.kakao.com/_qpRxjxb/chat', '_blank');
  }
</script>

<div class="w-full bg-gradient-to-r from-green-800 to-teal-800 py-8 md:py-12 overflow-hidden relative dark:from-green-900 dark:to-teal-900">
  <!-- Background elements -->
  <div class="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full opacity-10 -mr-32 -mt-32"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full opacity-10 -ml-40 -mb-40"></div>
  
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
    <!-- Left content: Text -->
    <div class="md:w-1/2 text-white mb-6 md:mb-0 md:pr-8">
      <div class="inline-block px-4 py-1 bg-green-700 text-white rounded-full text-sm font-semibold mb-4 dark:bg-green-800">
        프리미엄 주거단지
      </div>
      <h2 class="mb-3 flex items-center">
        <span class="inline-flex items-center">
          <span class="bg-amber-700 text-white px-3 py-1 text-2xl md:text-3xl font-bold">신검단</span>
          <span class="text-white px-3 py-1 text-2xl md:text-3xl font-bold">로열파크씨티 II</span>
        </span>
      </h2>
      <p class="text-gray-200 mb-4">
        서울 1시간 생활권, 리조트급 신도시 라이프. 실거주 만족도와 자산 가치를 모두 고려하는 중산층 실수요자를 위한 최적의 선택.
      </p>
      
      <!-- Key Points -->
      <div class="mb-6 space-y-3">
        <div class="flex items-center bg-white/10 rounded-lg p-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
          <div class="mr-3 text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-gray-100">국내 최고 수직 분수와 에버랜드급 조경 설계</span>
        </div>
        
        <div class="flex items-center bg-white/10 rounded-lg p-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
          <div class="mr-3 text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="text-gray-100">수영장, 골프장, 상영관까지 완비된 리조트급 커뮤니티</span>
        </div>
        
        <div class="flex items-center bg-white/10 rounded-lg p-2.5 backdrop-blur-sm transition-all hover:bg-white/15">
          <div class="mr-3 text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-gray-100">인천·김포공항 40분 거리, 부모님 모시기에 최적화된 주거 환경</span>
        </div>
      </div>
      

      
      <button
        on:click={navigateToKakaoChat}
        class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700"
      >
        임장 문의하기
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    
    <!-- Right content: Image -->
    <div class="md:w-1/2 relative">
      <div class="relative rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
        <img 
          src="/images/main/korea.jpg" 
          alt="Korea Real Estate Development" 
          class="w-full h-64 object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div class="text-white font-semibold">매주 목요일 임장투어 진행</div>
          <div class="text-green-300 text-sm">무료 식사 제공</div>
        </div>
      </div>
    </div>
  </div>
</div>
