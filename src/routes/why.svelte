<script>
  import { Card } from "flowbite-svelte";
import { CheckOutline } from "flowbite-svelte-icons";
  import People from "./people.svelte";

  let whys = [
    {suspicion: "해외 부동산 선택 시 이 3가지는 꼭 확인해주세요.", reasons: ["현지에 상주하는 전문 직원들", "부동산 매매 후에도 지속적인 관리", "임대 관리 및 계약 처리의 신속하고 안전한 대응"], description: "해외 부동산을 선택할 때는 단순한 매매를 넘어서 현지에 상주하는 전문 인력의 지원이 필수입니다. 블루아이는 각 국가에 실제 지사와 현지 직원이 있어, 부동산 관리부터 임대, 계약 처리까지 직접 관리해드립니다."},
    {suspicion: "해외 부동산 자산 관리, 블루아이와 함께라면 안전합니다.", reasons: ["현지 시장에 대한 깊은 이해와 전문성", "투명하고 신뢰할 수 있는 서비스", "블루아이 고객들과의 네트워킹 행사 개최"], description: "블루아이와 함께하는 해외 부동산 매매는 단순한 거래가 아닙니다. 현지 시장에 대한 깊이 있는 통찰력과 전문성을 통해 신중한 결정을 돕고, 투명한 절차로 신뢰를 쌓습니다. 또한 고객 간의 네트워킹을 통해 자산 관리 정보를 공유하고, 더 많은 기회를 만날 수 있습니다."},
  ]
</script>

<div class="max-w-[920px] flex flex-col gap-20 py-20 p-4">
  {#each whys as why}
    <div class="flex flex-col gap-4">
      <h2 class="text-black dark:text-white text-2xl font-extrabold md:text-3xl lg:text-4xl">{why.suspicion}</h2>
      <div class="flex flex-col gap-4">
        {#each why.reasons as reason}
        <div class="flex items-center gap-4 text-gray-400">
          <CheckOutline strokeWidth='4' />
          <div class="text-lg font-extrabold md:text-xl">{reason}</div>
        </div>
        {/each}
      </div>
      <div>{why.description}</div>
    </div>
  {/each}
</div>
