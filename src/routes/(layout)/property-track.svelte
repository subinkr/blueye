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
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform rotate-1 relative">
          <div class="absolute -top-3 -left-3 bg-yellow-400 text-indigo-800 font-bold py-1 px-3 rounded-lg">NEW</div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <div class="flex justify-between items-center mb-2">
              <div class="font-semibold text-gray-800 dark:text-white">트래킹 번호</div>
              <div class="text-indigo-600 dark:text-indigo-400">PT-12345678</div>
            </div>
            <div class="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div class="h-full bg-green-500 rounded-full" style="width: 75%"></div>
            </div>
          </div>
          
          <div class="space-y-3 text-gray-800 dark:text-gray-200">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div class="flex-1">
                <div class="flex justify-between">
                  <span class="font-medium">계약 완료</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">2025년 01월 15일</span>
                </div>
              </div>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div class="flex-1">
                <div class="flex justify-between">
                  <span class="font-medium">1차 분납금 납부</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">2025년 02월 10일</span>
                </div>
              </div>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div class="flex-1">
                <div class="flex justify-between">
                  <span class="font-medium">2차 분납금 납부</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">2025년 03월 05일</span>
                </div>
              </div>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
                <path stroke-width="2" d="M12 7v5l3 3"></path>
              </svg>
              <div class="flex-1">
                <div class="flex justify-between">
                  <span class="font-medium">소유권 이전</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">진행 중</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
