<script>
  import { QuoteSolid } from 'flowbite-svelte-icons';
  import Review from "$lib/components/review.svelte";
  import TitleSub from "$lib/components/title-sub.svelte";
  import Title from "$lib/components/title.svelte";

  const reviews =[
      {title: "48세 남성", detail: "중국 주재원", region: "중국 상하이", building: "런헝허빈청", content: "부동산 시장에 대한 정확한 설명과 현재 시점에서 매매를 위한 전략, 그리고 깊이 있는 이해와 법적 조언 덕분에 큰 어려움 없이 순조롭게 계약을 마칠 수 있었습니다. 특히 모든 절차를 빠르고 정확하게 처리해 주셔서 정말 만족스러웠습니다. 상하이에서 부동산 거래를 고려하시는 분들께 강력히 추천드립니다.",},
      {title: "52세 여성", detail: "말레이시아 이민", region: "말레이시아 조호바루", building: "Macrolink", content: "말레이시아 조호바루로 이주하면서 언어와 주택 환경의 차이로 생활 적응에 어려움이 많았습니다. 하지만 블루아이 덕분에 필요한 정보를 빠르게 얻고, 주택 문제도 신속히 해결할 수 있어 편안하게 지낼 수 있었습니다. 낯선 환경에서 하나하나 세심하게 챙겨주신 덕분에 조호바루에 빠르게 적응할 수 있었고, 이주 과정이 훨씬 수월했습니다.",},
      {title: "35세 남성", detail: "무역업", region: "캄보디아 프놈펜", building: "Morgan Tower", content: "캄보디아 부동산 구입 후 관리 문제에 대한 걱정이 많았지만, 임대 관리부터 수리, 청소까지 모든 부분을 꼼꼼하게 처리해 주셔서 정말 감사드립니다.해외에 있어 자주 방문할 수 없는 상황에서도 지속적으로 상태를 점검하고 필요한 부분을 신속히 해결해 주셔서 안심하고 부동산을 소유할 수 있었습니다. 앞으로도 계속해서 좋은 관리 잘 부탁드립니다!",},
      {title: "45세 여성", detail: "호치민 거주", region: "베트남", building: "빈홈 센트럴파크", content: "해외 부동산을 다른 업체를 통해 구입했지만 연락도 잘 되지 않고 관리도 원활하지 않아 걱정이 많았습니다. 그때 지인의 소개로 블루아이에 문의하게 되었고, 임대 관리를 맡긴 후로 적합한 임차인을 찾아주시는 것은 물론 모든 계약 사항을 투명하게 관리해 주셔서 매우 만족스러웠습니다. 또한 유지 보수와 청소까지 주기적으로 잘 관리해 주셔서 너무 좋았습니다.",},
  ]
</script>

<div class="container mx-auto px-4 py-20 lg:px-8">
  <!-- Section Header -->
  <div class="text-center mb-16">
    <span class="inline-block px-4 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium tracking-widest uppercase mb-3">Testimonials</span>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">고객님들의 후기</h2>
    <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
    <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">블루아이의 전문성과 서비스에 대한 고객님들의 생생한 경험담을 확인하세요.</p>
  </div>
  
  <!-- Reviews Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {#each reviews as review, i}
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
        <!-- Decorative quote icon -->
        <div class="absolute -right-4 -bottom-4 text-gray-100 dark:text-gray-700">
          <QuoteSolid size="8x" />
        </div>
        
        <!-- Review content -->
        <div class="relative z-10">
          <!-- Location badge -->
          <div class="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium mb-4 dark:bg-yellow-900/50 dark:text-yellow-300">
            <span class="mr-2">📍</span> {review.region} {review.building}
          </div>
          
          <!-- Review text -->
          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{review.content}</p>
          
          <!-- Reviewer info -->
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white">{review.title}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">{review.detail}</p>
            </div>
            
            <!-- Star rating -->
            <div class="flex">
              {#each Array(5) as _, j}
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Add staggered animation for reviews */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .bg-white {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .bg-white:nth-child(1) { animation-delay: 0.1s; }
  .bg-white:nth-child(2) { animation-delay: 0.2s; }
  .bg-white:nth-child(3) { animation-delay: 0.3s; }
  .bg-white:nth-child(4) { animation-delay: 0.4s; }
</style>