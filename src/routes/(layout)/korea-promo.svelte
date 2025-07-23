<script>
  function navigateToKakaoChat() {
    window.open('https://pf.kakao.com/_qpRxjxb/chat', '_blank');
  }
</script>

<section class="relative w-full text-white overflow-hidden">
  <!-- Background photo (subtle) -->
  <img src="/images/main/vietnam.jpg" alt="Ho Chi Minh City Skyline" class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none" />

  <!-- Gradient overlay for better readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-sky-600/80 via-fuchsia-700/60 to-red-600/80"></div>

  <!-- Main content -->
  <div class="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
    <!-- Text / left -->
    <div class="flex-1 text-center md:text-left space-y-6">
      <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-semibold tracking-wide">
        베트남 호치민 부동산설명회
      </div>

      <h2 class="text-4xl md:text-5xl font-extrabold leading-tight space-y-2">
        <div class="flex flex-wrap justify-center md:justify-start gap-2">
          <span class="px-3 py-1 bg-fuchsia-600 rounded-md">흐름을 알면</span>
          <span class="px-3 py-1 bg-white text-fuchsia-700 rounded-md">기회가 보인다</span>
        </div>
        <p class="text-lg md:text-xl font-medium text-gray-100/90">
          호치민 지사장에게 듣는 생생한 호치민 라이프와 투자 전략
        </p>
      </h2>

      <ul class="space-y-3 text-base md:text-lg">
        <li class="flex items-start justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          지금 호치민은 투자 타이밍일까?
        </li>
        <li class="flex items-start justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          분양 vs 전매, 어디에 주목해야 할까?
        </li>
        <li class="flex items-start justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          여의도 설명회 ▶️ 현지 호치민 부동산 투어
        </li>
      </ul>

      <button
        on:click={navigateToKakaoChat}
        class="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        설명회 / 투어 예약하기
      </button>
    </div>

    <!-- Highlight card / right -->
    <div class="w-full md:w-80 flex flex-col items-center md:items-start">
      <div class="bg-white text-slate-800 rounded-2xl shadow-2xl p-8 w-full text-center space-y-4">
        <div class="text-sm font-bold tracking-widest text-fuchsia-700">DATE</div>
        <div class="text-3xl md:text-4xl font-extrabold">7월 29일 (화)</div>
        <div class="text-2xl font-bold">오전 10:30</div>
        <div class="border-t border-fuchsia-500/30 pt-4"></div>
        <div class="text-sm font-bold tracking-widest text-fuchsia-700">LOCATION</div>
        <div class="text-lg font-medium leading-snug">
          서울 영등포구<br/>
          국회대로 62길 5<br/>
          Blueye 여의도센터
        </div>
      </div>
      <div class="mt-3 text-sm text-gray-200">호치민 부동산 투어 예약 접수중</div>
    </div>
  </div>
</section>