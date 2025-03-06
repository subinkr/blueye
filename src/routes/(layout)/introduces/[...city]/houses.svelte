<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '$lib/components/panel.svelte';
  import { marked } from 'marked';

  export let houses;
</script>

<div class="py-12">
  <div class="container mx-auto px-4">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium tracking-widest uppercase rounded-full mb-3">프리미엄 매물</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">엄선된 특별 매물</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">블루아이가 엄선한 프리미엄 매물을 만나보세요. 최고의 입지와 가치를 갖춘 글로벌 부동산 투자 기회입니다.</p>
    </div>

    <!-- Property Grid -->
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {#if !houses.length}
        <div class="col-span-full py-16 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">준비중입니다</h3>
          <p class="text-gray-500 dark:text-gray-400">곧 새로운 매물이 등록될 예정입니다. 다시 방문해 주세요.</p>
        </div>
      {/if}
      {#each houses as house}
        <div class="w-full max-w-sm group">
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <Panel img={house.image} href={"/houses/" + house.id}>
              <div class="p-6 flex flex-col gap-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-500 transition-colors duration-300">{house.title}</h3>
                </div>
                
                <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
                
                <div class="flex flex-col gap-2">
                  <div class='prose text-sm text-gray-700 dark:text-gray-300'>{@html marked(house?.date.split('\n').join('\n\n') ?? "")}</div>
                  <div class='prose text-lg font-semibold text-gray-900 dark:text-white'>{@html marked(house?.price.split('\n').join('\n\n') ?? "")}</div>
                </div>
                
                <div class="flex justify-between items-center mt-2">
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    상세 위치 확인
                  </div>
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white group-hover:bg-yellow-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Contact CTA -->
    <div class="mt-16 text-center">
      <div class="bg-gray-900 dark:bg-gray-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold mb-4">원하시는 매물을 찾지 못하셨나요?</h3>
        <p class="text-gray-300 mb-6">블루아이의 전문가가 고객님의 요구에 맞는 최적의 매물을 찾아드립니다.</p>
        <a href="https://pf.kakao.com/_qpRxjxb/chat" class="inline-block px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition duration-300 transform hover:-translate-y-1">
          맞춤 매물 상담 신청하기
        </a>
      </div>
    </div>
  </div>
</div>