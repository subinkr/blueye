<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  
  let error = '';
  let successMessage = '';
  let createdTrackId = '';
  let showTrackId = false;
  let showToast = false;
  
  // Function to show and hide toast messages
  function showToastMessage() {
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 3000);
  }
  
  // Clear messages after form submission
  function handleFormResult(result) {
    if (result.type === 'success') {
      successMessage = result.message || '작업이 성공적으로 완료되었습니다!';
      if (result.data && result.data.id) {
        createdTrackId = result.data.id;
        showTrackId = result.showId || false;
      }
      error = '';
    } else {
      error = result.error || '작업 처리 중 오류가 발생했습니다.';
      successMessage = '';
      createdTrackId = '';
      showTrackId = false;
    }
    showToastMessage();
  }
  
  // Enhanced form handler factory
  function createFormHandler(successMsg, showId = false) {
    return () => {
      return async ({ result }) => {
        const resultData = {
          type: result.type,
          message: successMsg,
          error: result.error,
          data: result.data,
          showId
        };
        handleFormResult(resultData);
      };
    };
  }
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6">
  <div class="max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">부동산 관리 시스템</h1>
      <p class="text-gray-600 max-w-2xl mx-auto text-base">
        부동산 ID 생성, 삭제 및 로그 관리를 위한 관리자 페이지입니다.
      </p>
    </div>
    
    <!-- Toast Notifications -->
    {#if showToast}
      <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 {showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}" style="min-width: 300px; max-width: 90vw;">
        {#if successMessage}
          <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-lg flex items-start animate-fade-in">
            <svg class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <p class="font-medium">{successMessage}</p>
              {#if showTrackId && createdTrackId}
                <p class="mt-1 text-sm">생성된 부동산 ID: <span class="font-mono bg-green-50 px-2 py-0.5 rounded">{createdTrackId}</span></p>
              {/if}
            </div>
          </div>
        {:else if error}
          <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-lg flex items-start animate-fade-in">
            <svg class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <p class="font-medium">{error}</p>
          </div>
        {/if}
      </div>
    {/if}
    
    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Property Management Section -->
      <div class="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="bg-blue-600 text-white p-4 sm:p-5">
          <h2 class="text-lg sm:text-xl font-bold flex items-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            부동산 ID 관리
          </h2>
        </div>
        
        <div class="p-4 sm:p-6 flex flex-col gap-6">
          <!-- Create Property ID -->
          <div class="bg-white sm:bg-gray-50 rounded-xl p-4 sm:p-5">
            <h3 class="text-base sm:text-lg font-semibold mb-4 text-gray-800 flex items-center">
              <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              부동산 ID 생성
            </h3>
            
            <form 
              method="POST" 
              action="?/track" 
              enctype="multipart/form-data" 
              class="space-y-4" 
              use:enhance={createFormHandler('부동산 ID가 성공적으로 생성되었습니다!', true)}
            >
              <div>
                <label for="property-name" class="block text-sm font-medium text-gray-700 mb-2">부동산 이름</label>
                <input 
                  id="property-name"
                  name="property" 
                  placeholder="예: 강남 푸르지오" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              
              <div>
                <label for="property-address" class="block text-sm font-medium text-gray-700 mb-2">상세 주소</label>
                <input 
                  id="property-address"
                  name="address" 
                  placeholder="예: 서울시 강남구 테헤란로 123" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                class="w-full mt-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center shadow-sm"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                부동산 ID 생성
              </button>
            </form>
          </div>
          
          <!-- Delete Property ID -->
          <div class="bg-white sm:bg-gray-50 rounded-xl p-4 sm:p-5">
            <h3 class="text-base sm:text-lg font-semibold mb-4 text-gray-800 flex items-center">
              <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              부동산 ID 삭제
            </h3>
            
            <form 
              method="POST" 
              action="?/remove" 
              enctype="multipart/form-data" 
              class="space-y-4" 
              use:enhance={createFormHandler('부동산 ID가 성공적으로 삭제되었습니다!')}
            >
              <div>
                <label for="property-id" class="block text-sm font-medium text-gray-700 mb-2">부동산 ID</label>
                <input 
                  id="property-id"
                  name="id" 
                  placeholder="예: abc123de" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              
              <div class="pt-2">
                <button 
                  type="submit" 
                  class="w-full px-5 py-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center shadow-sm"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  부동산 ID 삭제
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Log Management Section -->
      <div class="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="bg-blue-600 text-white p-4 sm:p-5">
          <h2 class="text-lg sm:text-xl font-bold flex items-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            로그 관리
          </h2>
        </div>
        
        <div class="p-4 sm:p-6 flex flex-col gap-6">
          <!-- Create Log by ID -->
          <div class="bg-white sm:bg-gray-50 rounded-xl p-4 sm:p-5">
            <h3 class="text-base sm:text-lg font-semibold mb-4 text-gray-800 flex items-center">
              <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
              로그 생성
            </h3>
            
            <form 
              method="POST" 
              action="?/id" 
              enctype="multipart/form-data" 
              class="space-y-4" 
              use:enhance={createFormHandler('로그가 성공적으로 생성되었습니다!')}
            >
              <div>
                <label for="track-id" class="block text-sm font-medium text-gray-700 mb-2">부동산 ID</label>
                <input 
                  id="track-id"
                  name="trackId" 
                  placeholder="예: abc123de" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              
              <div>
                <label for="log-content-id" class="block text-sm font-medium text-gray-700 mb-2">로그 내용</label>
                <textarea 
                  id="log-content-id"
                  name="content" 
                  placeholder="예: 고객 방문 완료" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px]" 
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full mt-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center shadow-sm"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                로그 생성
              </button>
            </form>
          </div>
          
          <!-- Create Log by Property Name -->
          <div class="bg-white sm:bg-gray-50 rounded-xl p-4 sm:p-5">
            <h3 class="text-base sm:text-lg font-semibold mb-4 text-gray-800 flex items-center">
              <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              로그 일괄 생성
            </h3>
            
            <form 
              method="POST" 
              action="?/property" 
              enctype="multipart/form-data" 
              class="space-y-4" 
              use:enhance={createFormHandler('로그가 성공적으로 생성되었습니다!')}
            >
              <div>
                <label for="property-name-log" class="block text-sm font-medium text-gray-700 mb-2">부동산 이름</label>
                <input 
                  id="property-name-log"
                  name="property" 
                  placeholder="예: 강남 푸르지오" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required 
                />
              </div>
              
              <div>
                <label for="log-content-property" class="block text-sm font-medium text-gray-700 mb-2">로그 내용</label>
                <textarea 
                  id="log-content-property"
                  name="content" 
                  placeholder="예: 일괄 업데이트 완료" 
                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px]" 
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full mt-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center shadow-sm"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                로그 일괄 생성
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }
</style>
