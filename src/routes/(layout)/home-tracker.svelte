<script>
  import { goto } from '$app/navigation';

  function navigateToTrackingPage() {
    goto('/tracks');
  }
</script>

<div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 md:px-8 dark:from-blue-800 dark:to-indigo-900">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">홈 트래커</h2>
        <p class="text-xl mb-6">블루아이를 통해 해외 부동산을 구매하고 홈 트래커 서비스를 이용해보세요.</p>
        <ul class="mb-8 space-y-3">
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            구매 상황 실시간 확인
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            분납금 납부 내역 확인
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            문서 수령 현황 추적
          </li>
        </ul>
        <button 
          on:click={navigateToTrackingPage}
          class="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 dark:bg-gray-800 dark:text-indigo-300 dark:hover:bg-gray-700">
          지금 조회하기
        </button>
      </div>
      <div class="md:w-1/2">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-6 relative">
          <!-- 부동산 정보 -->
          <div class="flex items-start mb-6">
            <div class="flex-shrink-0 mr-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex justify-between">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">투자용 아파트</h2>
              </div>
              <div class="flex gap-2 text-gray-600 dark:text-gray-300 mb-2">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>두바이 다운타운</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                  </svg>
                  <span>ID: 12345678</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 타임라인 활동 내역 -->
          <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <svg class="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            활동 내역
          </h3>
          
          <div class="relative">
            <!-- 타임라인 라인 -->
            <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <!-- 타임라인 아이템 -->
            <ul class="space-y-4">
              <li class="relative pl-10">
                <div class="absolute left-0 top-1.5 w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                  <p class="text-gray-800 dark:text-gray-200">2차 분납금 납부</p>
                  <div class="mt-1 flex justify-between items-center text-sm">
                    <span class="text-gray-500 dark:text-gray-400">2025년 03월 05일</span>
                  </div>
                </div>
              </li>

              <li class="relative pl-10">
                <div class="absolute left-0 top-1.5 w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                  <p class="text-gray-800 dark:text-gray-200">1차 분납금 납부</p>
                  <div class="mt-1 flex justify-between items-center text-sm">
                    <span class="text-gray-500 dark:text-gray-400">2025년 02월 10일</span>
                  </div>
                </div>
              </li>


              <li class="relative pl-10">
                <div class="absolute left-0 top-1.5 w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                  <p class="text-gray-800 dark:text-gray-200">계약 완료</p>
                  <div class="mt-1 flex justify-between items-center text-sm">
                    <span class="text-gray-500 dark:text-gray-400">2025년 01월 15일</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
