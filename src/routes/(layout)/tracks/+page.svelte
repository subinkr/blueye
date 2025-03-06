<script>
  export let data;
  const { API_SERVER } = data;

  let trackId = '';
  let logs = [];
  let trackData = {};
  let notFound = false;
  let isLoading = false;
  let hasSearched = false;

  async function loadLogs() {
    if (!trackId.trim()) return;
    
    try {
      isLoading = true;
      hasSearched = true;
      notFound = false;
      logs = [];
      trackData = {};
      
      const response = await fetch(`${API_SERVER}/tracks/${trackId}`, {
        method: 'GET',
      });

      if (response.status === 404) {
        notFound = true;
        return;
      }

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      logs = data.logs || [];
      trackData = data.track || {};
    } catch (err) {
      console.error('Error loading logs:', err);
    } finally {
      isLoading = false;
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      loadLogs();
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 px-4">
  <div class="max-w-4xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">부동산 조회</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        부동산 ID를 입력하여 해당 부동산의 진행 상태를 확인하세요.
      </p>
    </div>
    
    <!-- Search Section -->
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="relative flex-1 w-full">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text"
            bind:value={trackId}
            on:keypress={handleKeyPress}
            placeholder="부동산 ID를 입력하세요"
            class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <button 
          on:click={loadLogs}
          disabled={isLoading}
          class="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200 flex items-center justify-center min-w-[120px]"
        >
          {#if isLoading}
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            조회 중...
          {:else}
            조회하기
          {/if}
        </button>
      </div>
    </div>

    <!-- Results Section -->
    {#if hasSearched}
      {#if notFound}
        <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">부동산을 찾을 수 없습니다</h2>
          <p class="text-gray-600">입력하신 ID를 다시 확인해주세요.</p>
        </div>
      {:else if logs.length > 0 || Object.keys(trackData).length > 0}
        <!-- Property Details -->
        {#if trackData && Object.keys(trackData).length > 0}
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{trackData.property || '부동산 정보'}</h2>
                <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{trackData.address || '주소 정보 없음'}</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                    </svg>
                    <span>ID: {trackData.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}

        <!-- Activity Timeline -->
        {#if logs.length > 0}
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              활동 내역
            </h3>
            
            <div class="relative">
              <!-- Timeline Line -->
              <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <!-- Timeline Items -->
              <ul class="space-y-6">
                {#each logs.reverse() as log, i}
                  <li class="relative pl-10">
                    <!-- Timeline Dot -->
                    <div class="absolute left-0 top-1.5 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
                      <div class="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <!-- Content -->
                    <div class="bg-gray-50 rounded-lg p-4 shadow-sm">
                      <p class="text-gray-800">{log.content}</p>
                      <div class="mt-2 flex justify-between items-center text-sm">
                        <span class="text-gray-500">{formatDate(log.createdAt)}</span>
                        <span class="text-gray-400">#{log.id}</span>
                      </div>
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/if}
      {:else}
        <!-- Empty State -->
        <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">정보가 없습니다</h2>
          <p class="text-gray-600">해당 부동산에 대한 활동 내역이 없습니다.</p>
        </div>
      {/if}
    {/if}
  </div>
</div>
