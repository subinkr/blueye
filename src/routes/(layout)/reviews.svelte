<script>
  import { QuoteSolid } from 'flowbite-svelte-icons';

  import Review from "$lib/components/review.svelte";
  import TitleSub from "$lib/components/title-sub.svelte";
  import Title from "$lib/components/title.svelte";

  const reviews =[
      {title: "48세 남성", detail: "중국 주재원", region: "중국 상하이", building: "런헝허빈청", content: "부동산 시장에 대한 정확한 설명과 현재 시점에서 매매를 위한 전략, 그리고 깊이 있는 이해와 법적 조언 덕분에 큰 어려움 없이 순조롭게 계약을 마칠 수 있었습니다. 특히 모든 절차를 빠르고 정확하게 처리해 주셔서 정말 만족스러웠습니다. 상하이에서 부동산 거래를 고려하시는 분들께 강력히 추천드립니다.",},
      {title: "52세 여성", detail: "말레이시아 이민", region: "말레이시아 조호바루", building: "Macrolink", content: "말레이시아 조호바루로 이주하면서 언어와 주택 환경의 차이로 생활 적응에 어려움이 많았습니다. 하지만 블루아이 덕분에 필요한 정보를 빠르게 얻고, 주택 문제도 신속히 해결할 수 있어 편안하게 지낼 수 있었습니다. 낯선 환경에서 하나하나 세심하게 챙겨주신 덕분에 조호바루에 빠르게 적응할 수 있었고, 이주 과정이 훨씬 수월했습니다.",},
      {title: "35세 남성", detail: "무역업", region: "캄보디아 프놈펜", building: "Morgan Tower", content: "캄보디아 부동산 구입 후 관리 문제에 대한 걱정이 많았지만, 임대 관리부터 수리, 청소까지 모든 부분을 꼼꼼하게 처리해 주셔서 정말 감사드립니다. 해외에 있어 자주 방문할 수 없는 상황에서도 지속적으로 상태를 점검하고 필요한 부분을 신속히 해결해 주셔서 안심하고 부동산을 소유할 수 있었습니다. 앞으로도 계속해서 좋은 관리 잘 부탁드립니다!",},
      {title: "45세 여성", detail: "호치민 거주", region: "베트남", building: "빈홈 센트럴파크", content: "해외 부동산을 다른 업체를 통해 구입했지만 연락도 잘 되지 않고 관리도 원활하지 않아 걱정이 많았습니다. 그때 지인의 소개로 블루아이에 문의하게 되었고, 임대 관리를 맡긴 후로 적합한 임차인을 찾아주시는 것은 물론 모든 계약 사항을 투명하게 관리해 주셔서 매우 만족스러웠습니다. 또한 유지 보수와 청소까지 주기적으로 잘 관리해 주셔서 너무 좋았습니다.",},
  ]
</script>


<div>
  <TitleSub>해외 부동산에 대한 신뢰성은</TitleSub>
  <Title>고객님들의 후기가 말해줍니다.</Title>
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
      </Review>
    {/each}
  </div>
</div>