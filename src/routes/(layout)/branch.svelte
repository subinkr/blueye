<script>
  import { countries } from '$lib/data/menus.ts';
  import Panel from "$lib/components/panel.svelte";
</script>

<div class="w-full py-24 bg-gray-50">
  <div class="container mx-auto px-4 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-gray-200 text-gray-800 text-xs font-medium tracking-widest uppercase mb-3">글로벌 네트워크</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">블루아이 글로벌 지사</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p class="text-gray-600 max-w-2xl mx-auto">7개국 9개 도시에 위치한 블루아이 지사는 현지 전문가들의 네트워크를 통해 프리미엄 부동산 서비스를 제공합니다.</p>
    </div>
    
    <!-- 지사 목록 -->
    <div class="w-full max-w-7xl mx-auto">
      <div class="flex flex-wrap justify-center">
        {#each countries as country}
          {#each country.child as child}
            <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div class="group relative overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl h-full rounded-lg">
                <Panel href={child.href} img={"/images/intro/" + child.name + ".jpg"}>
                  <!-- Gradient overlay instead of solid background -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <!-- Content positioned at the bottom -->
                  <div class="absolute left-0 bottom-0 w-full p-6 z-10 transition-all duration-300">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-lg font-bold md:text-xl lg:text-2xl text-white">{child.title}</h3>
                        <div class="flex items-center mt-2">
                          <div class="h-px w-8 bg-yellow-400 mr-3"></div>
                          <p class="text-sm text-yellow-200 uppercase tracking-wider">{country.title}</p>
                        </div>
                      </div>
                      <div class="bg-yellow-400 p-2 rounded-full transform transition-transform duration-300 group-hover:rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Panel>
              </div>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* 지사 카드 */
</style>