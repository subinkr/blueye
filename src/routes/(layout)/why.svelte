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
    {suspicion: "블루아이만의 차별화 된 서비스", 
    reasons: [
      {title: "임대 관리", content: "부동산을 임대할 경우, 현지 관리 회사가 임차인 모집, 계약 관리, 임대료 수금 등을 대행합니다. 특히 해외에 거주하는 경우 임대 과정에서 발생하는 문제를 신속하게 처리하기 어려우므로, 전문 관리 회사의 지원이 필수적입니다."}, 
      {title: "유지 보수 및 청소", content: "부동산의 가치를 장기적으로 유지하려면 정기적인 유지 보수와 청소가 필요합니다. 관리 회사는 부동산을 주기적으로 점검하고, 필요한 수리를 즉각 처리하여 자산의 가치를 보호합니다."}, 
      {title:"세금 및 규제 관리", content: "각국의 세금 규정과 법률이 다르기 때문에, 현지 관리 회사가 세금 납부, 재산세 신고 등을 지원합니다. 이는 부동산 소유주가 세금 문제로 인한 불이익을 방지하는 데 큰 도움이 됩니다."}
    ], description: "해외 부동산은 구입 후 관리가 어려울 수 있으므로, 신뢰할 수 있는 현지 관리 회사를 선택하는 것이 중요합니다. 블루아이에서는 다음과 같은 전문 서비스를 제공합니다."},
  ]
</script>

<div class="max-w-[920px] flex flex-col gap-20 pb-20 p-4">
  {#each whys as why}
    <div class="flex flex-col gap-4 sm:gap-12 items-center">
      <TitleResponsive>{why.suspicion}</TitleResponsive>
      <!-- <div>{why.description}</div> -->
      <div class="flex flex-col gap-4">
        {#each why.reasons as reason}
        <div class="flex flex-col sm:flex-row items-start gap-4 text-gray-400">
          <div class="flex gap-4 justify-center items-center">
            <CheckOutline strokeWidth='4' />
            <div class="min-w-40 text-lg font-extrabold md:text-xl text-gray-400">{reason.title}</div>
          </div>
          <div class="text-base md:text-lg text-gray-600">{reason.content}</div>
        </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
