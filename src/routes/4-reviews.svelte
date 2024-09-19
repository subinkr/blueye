<script>
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { QuoteSolid } from 'flowbite-svelte-icons';

  import Review from "../components/review.svelte";

  const reviews =[
      {title: "48세 남성", detail: "중국 주재원", region: "중국 상하이", building: "런헝허빈청", content: "해외 부동산 투자는 처음이라 많이 걱정했는데, 블루아이의 전문적인 상담과 현지 지원 덕분에 안전하게 투자를 마칠 수 있었습니다. 특히 계약 과정에서의 투명성과 신속한 대응이 인상적이었습니다. 감사합니다.",},
      {title: "52세 여성", detail: "말레이시아 이민", region: "말레이시아 조호르바루", building: "Macrolink", content: "말레이시아 부동산 시장에 관심이 있었지만 정보가 부족해서 망설이고 있었습니다. 블루아이를 통해 상세한 시장 분석과 투자의 장단점을 알 수 있었고, 현지 지사의 도움으로 복잡한 절차도 쉽게 진행할 수 있었습니다.",},
      {title: "35세 남성", detail: "동남아 해외 영업", region: "캄보디아 프놈펜", building: "Morgan Tower", content: "캄보디아의 성장 가능성을 보고 투자를 결심했는데, 블루아이의 체계적인 지원과 현지 전문성 덕분에 성공적으로 매매를 완료했습니다. 현지 법률과 문화에 대한 상세한 안내로 안심하고 투자할 수 있었습니다.",},
      {title: "45세 여성", detail: "싱가포르 거주", region: "두바이", building: "Marina View", content: "두바이 부동산은 복잡하고 어려울 거라 생각했는데, 블루아이의 글로벌 네트워크와 전문성 덕분에 원활하게 진행되었습니다. 투자 후 높은 수익률로 이어져 매우 만족합니다.",},
  ]
</script>


<div>
  <h2 class="text-gray-500 md:text-black text-center dark:text-white text-lg font-extrabold md:text-2xl lg:text-3xl">해외 부동산에 대한 전문성은</h2>
  <h2 class="text-black text-center dark:text-white text-3xl font-extrabold">고객님들의 후기로 증명합니다.</h2>
</div>
<div class="flex flex-wrap justify-center items-center gap-4">
  <div class="flex flex-wrap justify-center items-center gap-4">
    {#each reviews.slice(0,2) as review}
      <Review {...review}>
        <QuoteSolid class="absolute right-4 bottom-4" />
      </Review>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center items-center gap-4">
    {#each reviews.slice(2,4) as review}
      <Review {...review}>
        <QuoteSolid class="absolute right-4 bottom-4" />
        <!-- <Button>
          Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button> -->
      </Review>
    {/each}
  </div>
</div>