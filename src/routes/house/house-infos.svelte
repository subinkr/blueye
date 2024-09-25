<script>
  import { BuildingOutline, CalendarMonthOutline, CashOutline, CogOutline, DollarOutline, HomeOutline, LandmarkOutline, RulerCombinedOutline, UserOutline, UsersGroupOutline } from "flowbite-svelte-icons";
  import { marked } from 'marked'

  import HouseInfo from "./house-info.svelte";
  import AlignCenter from "$lib/components/align-center.svelte";

  export let house = {};
</script>

<div class="flex flex-wrap lg:grid lg:grid-cols-5 gap-4 justify-center items-start text-center">
  <HouseInfo>
    <AlignCenter>
      <CashOutline size="xl" /><b>평균 분양가 (m²당 USD)</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.averagePricePerM2 ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <HomeOutline size="xl" /><b>판매 유형</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.salesType ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <RulerCombinedOutline size="xl" /><b>전용 면적 (m²)</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.area ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <CogOutline size="xl" /><b>구성</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.config ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <CalendarMonthOutline size="xl" /><b>입주 예정일</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.enter ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <UsersGroupOutline size="xl" /><b>총 세대수</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.houseHold ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <UserOutline size="xl" /><b>소유권 형태</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.own ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <BuildingOutline size="xl" /><b>개발 및 시공</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.builder ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <DollarOutline size="xl" /><b>예상 임대 수익률</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.expectedAverageReturn ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <LandmarkOutline size="xl" /><b>취득세</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.tax ?? "")}</div>
  </HouseInfo>
</div>