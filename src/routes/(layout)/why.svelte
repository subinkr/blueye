<script>
  import { CheckOutline } from "flowbite-svelte-icons";
  import TitleResponsive from "$lib/components/title-responsive.svelte";

  let whys = [
    {suspicion: "해외 부동산 선택 시 이 3가지는 꼭 확인해주세요.", 
    reasons: [
      {title:"현지 법률 및 규제의 철저한 이해",content: "각 국가마다 부동산 거래와 관련된 법률이 상이합니다. 외국인이 본인 명의로 부동산을 매입할 수 있는지, 세금 및 등록 절차, 소유권 제한 사항 등을 사전에 면밀히 확인해야 합니다."}, 
      {title: "환율 및 금융 리스크의 효과적 관리", content: "해외 부동산 거래 시 환율 변동으로 인한 금융 리스크를 고려해야 합니다. 환율 변동은 투자 수익률에 직접적인 영향을 미칠 수 있으므로 신중한 관리가 필요합니다."}, 
      {title:"임대 관리 및 계약 처리의 신속하고 안전한 대응", content: "지역 부동산 시장의 특성을 깊이 이해하는 것은 필수적입니다. 해당 지역의 부동산 가격 동향, 경제 상황, 인프라 개발 계획 등을 상세히 조사하고, 현지 부동산 중개인이나 법률 전문가의 조언을 적극 활용하여 안전한 거래를 도모해야 합니다."}
    ], description: "해외 부동산은 구입 후 관리가 어려울 수 있으므로, 신뢰할 수 있는 현지 관리 회사를 선택하는 것이 중요합니다. 블루아이에서는 다음과 같은 전문 서비스를 제공합니다."},
  ]
</script>

<div class="w-full py-24 bg-gray-50">
  <div class="container mx-auto px-4 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-gray-200 text-gray-800 text-xs font-medium tracking-widest uppercase mb-3">Expert Guidance</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">해외 부동산 투자의 핵심 체크포인트</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p class="text-gray-600 max-w-2xl mx-auto">블루아이는 23년간의 전문성을 바탕으로 해외 부동산 투자의 성공적인 여정을 함께합니다.</p>
    </div>
    
    <div class="max-w-5xl mx-auto">
      {#each whys as why}
        <div class="flex flex-col gap-8 items-center">
          <h3 class="text-2xl md:text-3xl font-bold text-center text-gray-900">{why.suspicion}</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {#each why.reasons as reason, i}
              <div class="bg-white p-6 rounded-sm shadow-md border-t-4 border-yellow-400 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="bg-yellow-400 p-2 rounded-full mr-3">
                    <CheckOutline class="text-gray-900" size="md" strokeWidth='3' />
                  </div>
                  <span class="text-lg font-bold text-gray-900">{i + 1}</span>
                </div>
                <h4 class="text-lg font-bold mb-3 text-gray-900">{reason.title}</h4>
                <p class="text-gray-600">{reason.content}</p>
              </div>
            {/each}
          </div>
          
          <div class="mt-8 bg-gray-800 p-6 rounded-sm text-white max-w-3xl">
            <p class="italic text-center">{why.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Add subtle animation for cards */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .bg-white {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .bg-white:nth-child(1) { animation-delay: 0.1s; }
  .bg-white:nth-child(2) { animation-delay: 0.2s; }
  .bg-white:nth-child(3) { animation-delay: 0.3s; }
</style>
