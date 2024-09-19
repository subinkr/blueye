<script>
  import { Hr } from "flowbite-svelte";
  import News from "./news.svelte";

  const house = {
    descriptions: [
      {title: "최고의 위치", content: "프놈펜에서 국제학교, 대사관, 카지노를 비롯한 상업시설이 잘 발달된 BBK에 위치"},
      {title: "최고의 위치", content: "프놈펜에서 국제학교, 대사관, 카지노를 비롯한 상업시설이 잘 발달된 BBK에 위치"},
      {title: "최고의 위치", content: "프놈펜에서 국제학교, 대사관, 카지노를 비롯한 상업시설이 잘 발달된 BBK에 위치"},
      {title: "최고의 위치", content: "프놈펜에서 국제학교, 대사관, 카지노를 비롯한 상업시설이 잘 발달된 BBK에 위치"},
    ],
    detail: "중국 시행사인 wangfu international에서 모든 것의 중심이라는 모토로 시작한 이 프로젝트는 프놈펜 가장 중심인 BKK에 위치하고있습니다. 글로벌 기업, 국제 학교, 대사관 및 고급 레스토랑이 있는 주거, 상업 지역으로 지역적인 강점이 매우 돋보이는 프로젝트 입니다. 캄보디아 최초 스마트 홈 기능이 탑재되며 추후 관리는 일본의 유명 자산관리 회사인 Hopetree Japan에서 진행 할 예정입니다."
  }
</script>

<News />
<div class="flex flex-col gap-4">
  <img src="images/intro/malaysia.jpg" alt="말레이시아" />
  <div class="px-4 flex flex-col gap-4">
    <div class="text-3xl">Le conde</div>
    <div class="text-3xl">상품특징</div>
    <Hr />
    {#each house.descriptions as description}
    <div>
      <b class="text-xl">{description.title}</b>
      <div class="text-xl">{description.content}</div>
    </div>
    {/each}
    <Hr />
    <div>{house.detail}</div>
    <Hr />
    <div>평균 분양가 (m²당 USD): $3,100</div>
    <div>판매 유형: 신규 분양</div>
    <div>전용 면적 (m²): 39~187</div>
    <div>구성: 스튜디오 ~ 3베드룸</div>
    <div>입주 예정일: 2023년 11월</div>
    <div>총 세대수: 1,080세대</div>
    <div>소유권 형태: 리스홀드 50년 (외국인 구매 가능)</div>
    <div>개발 및 시공: XYZ 개발사 / KLM 건</div>
    <div>예상 임대 수익률: 연 6~8%</div>
    <div>취득세: 4%</div>
    <Hr />
    <div class="text-3xl">매물 지도</div>
    <div class="w-full h-[400px] bg-gray-500"></div>
    <Hr />
  </div>
</div>
