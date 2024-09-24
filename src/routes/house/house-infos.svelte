<script>
  import { BuildingOutline, CalendarMonthOutline, CashOutline, CogOutline, DollarOutline, HomeOutline, LandmarkOutline, RulerCombinedOutline, UserOutline, UsersGroupOutline } from "flowbite-svelte-icons";
  import { marked } from 'marked'

  import HouseInfo from "./house-info.svelte";
  import LittleBox from "./little-box.svelte";

  export let house = {};
</script>

<div class="flex flex-wrap lg:grid lg:grid-cols-5 gap-4 justify-center items-start text-center">
  <HouseInfo>
    <LittleBox>
      <CashOutline size="xl" /><b>평균 분양가 (m²당 USD)</b>
    </LittleBox>
    <div class="preview">{@html marked(house?.averageUsd ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <HomeOutline size="xl" /><b>판매 유형</b>
    </LittleBox>
    <div class="preview">{@html marked(house.salesType)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <RulerCombinedOutline size="xl" /><b>전용 면적 (m²)</b>
    </LittleBox>
    <div class="preview">{@html marked(house.area)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <CogOutline size="xl" /><b>구성</b>
    </LittleBox>
    <div class="preview">{@html marked(house.config)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <CalendarMonthOutline size="xl" /><b>입주 예정일</b>
    </LittleBox>
    <div class="preview">{@html marked(house.enter)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <UsersGroupOutline size="xl" /><b>총 세대수</b>
    </LittleBox>
    <div class="preview">{@html marked(house.houseHold)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <UserOutline size="xl" /><b>소유권 형태</b>
    </LittleBox>
    <div class="preview">{@html marked(house.own)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <BuildingOutline size="xl" /><b>개발 및 시공</b>
    </LittleBox>
    <div class="preview">{@html marked(house.builder)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <DollarOutline size="xl" /><b>예상 임대 수익률</b>
    </LittleBox>
    <div class="preview">{@html marked(house.expectedAverageReturn)}</div>
  </HouseInfo>
  <HouseInfo>
    <LittleBox>
      <LandmarkOutline size="xl" /><b>취득세</b>
    </LittleBox>
    <div class="preview">{@html marked(house.tax)}</div>
  </HouseInfo>
</div>