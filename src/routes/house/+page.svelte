<script>
  import { Hr } from "flowbite-svelte";
  import Title from "../../components/title.svelte";
  import TitleResponsive from "../../components/title-responsive.svelte";
  import TitleSmall from "../../components/title-small.svelte";
  import MainImages from "./main-images.svelte";
  import MainButton from "../../components/main-button.svelte";
  import { fly } from "svelte/transition";
  import { scrollY, headerHeight } from "$lib/scroll-controls/index.ts"
  import HouseInfos from "./house-infos.svelte";

  const house = {
    title: "R&F Princess Cove 2nd & 3rd Phase (2/3차 분양)",
    from: {
      name: "추경철",
      position: "말레이시아 지사장",
    },
    descriptions: [
      {title: "구도시 중심의 행정, 상업, 금융, 쇼핑의 핵심위치.", content: "행정, 상업 및 금융 과 쇼핑의 천국의 중심지. 조호에서 싱가폴로 일하어 다니는 사람들이 가장 선호하는 위치에 있는 Project임. 2026년 개통 예정인 RTS(Railway Transit System) 개통 에정이며 이후 Johor주에서 가장 Hot Place가 되는 지역임."},
      {title: "합당한 수익률", content: "Pandemic의 어려운 상황을 극복하고 현재 부동산 가치 상승이 시작되어 많은 싱가폴 및 해외 구매자들의 발길이 이어지고 있으며 장기 임대 연간 수익률은 약 4~5%이나, 최근의 상승세는 어느 지역보다 짧은 시간 내에 6~7% 까지 예상 되고 있음. 무엇보다 부동산 상승의 가늠자 역할을 하는 Project임."},
      {title: "장기VISA 취득 기회", content: "Malaysia는 MM2H라는 외국인들에게 장기체류의 기회를 주는 Program이 있는데,반드시 부동산을 취득해야 하는 조건임. 싼 가격에 좋은 콘도를 구입해서 미래를 준비 하는 좋은 기회임."},
      {title: "부동산 상승의 기회", content: "최근 홍콩사태 이후 중국의 부자들이 영국,대만,싱가폴,베트남,말레이시아 등으로 거주 및 투자를 옮겨 가는 추세 속에서 싱가폴과 가까운 (직선 거리 1 km) Johor Bahru지역으로 최근 많은 중국인, 싱가폴인 등이 집을 구매 할려는 문의가 많아 지고 있어 실제 판매되고 있어서 지금이 부동산 상승전 구매의 적기임."},
    ],
    detail: "R&F 푸리는 중국의 대표적인 부동산 개발업체이며, 2023년 기준 8위업체이며 최고의 위치에 최고의 건물을 짓는 회사임. 베이징, 하이난 등의 project는 강과 바다 조망의 최고의 테마파크 건설 중임. 푸리Group은 한국에도 진출하여 영종도 미단시티에 복합리조트 개발 추진 중임.",
    averageUsd: "$4,100",
    salesType: "분양",
    area: "",
    config: "1층~7층 주차장,\n\n8층 Facilities,\n\n9층 ~ 49층 4개 동 3,600세대.",
    enter: `2차 일부: 2024년 12월,\n\n3차: 2029년.`,
    houseHold: "3600세대",
    own: "FREE HOLD (영구 소유)",
    builder: "FURI (푸리)",
    expectedAverageReturn: "평균 4 ~ 5%",
    tax: "SPA(계약서)금액의 4%",
  }
</script>

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white w-full border-b-2 flex justify-center items-center p-4 text-center">
    <TitleResponsive>{house.title}</TitleResponsive>
</div>
{/if}
<div in:fly={{ y: 100, duration: 1000 }} id="title" class="z-20 fixed bottom-0 left-0 bg-white w-full min-h-20 border-t-2 flex justify-around items-center gap-4 p-4 hover:cursor-pointer">
    <MainButton title="문의하기">
      정보 입력
    </MainButton>
</div>
<div id="title" class="w-full text-center mb-4 p-4 border-b-2">
  <TitleResponsive>{house.title}</TitleResponsive>
</div>
<div id="main-carousel" class="w-full">
  <MainImages />
</div>
<div>
  <div class="px-4 md:px-20 my-4">
    <div class="flex flex-col gap-8">
      <Title>매물 특징</Title>
      <div class="flex flex-col sm:flex-row gap-8">
        <div class="flex flex-col gap-8">
          {#each house.descriptions as description}
          <div class="flex flex-col gap-4">
            <TitleSmall>{description.title}</TitleSmall>
            <div>{description.content}</div>
          </div>
          {/each}
        </div>
        <div class="flex flex-col gap-4 justify-start items-center">
          <img src="/images/people/9.jpg" alt="추경철 말레이시아 지사장" />
          <div class="text-center">
            <TitleResponsive>{house.from.name}</TitleResponsive>
            <div>{house.from.position}</div>
          </div>
        </div>
      </div>
    </div>
    <Hr />
    <div class="flex flex-col gap-4 justify-center items-center">
      <Title>개발사 정보</Title>
      <img class="w-[240px]" src="images/builder/furi.png" alt="furi" />
      <div>{house.detail}</div>
    </div>
    <Hr />
    <div class="flex flex-col gap-4">
      <Title>매물 정보</Title>
      <HouseInfos {house} />
    </div>
    <Hr />
  </div>
</div>
<div class="w-full flex flex-col gap-4">
  <Title>매물 지도</Title>
  <iframe class="w-full h-80" id="house" title="house example" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.328562299716!2d103.76879173327359!3d1.4592816036147944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12de0a2b934d%3A0x6e531768aa57332c!2zMSwgSmFsYW4gVGFuanVuZyBQdXRlcmksIFRhbmp1bmcgUHV0ZXJpLCA4MDMwMCBKb2hvciBCYWhydSwgSm9ob3IsIOunkOugiOydtOyLnOyVhA!5e0!3m2!1sko!2skr!4v1726809492706!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>