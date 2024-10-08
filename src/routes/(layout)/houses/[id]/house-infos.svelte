<script>
  import { BuildingOutline, CalendarMonthOutline, CashOutline, CogOutline, DollarOutline, HomeOutline, LandmarkOutline, RulerCombinedOutline, UserOutline, UsersGroupOutline } from "flowbite-svelte-icons";
  import { marked } from 'marked'

  import HouseInfo from "./house-info.svelte";
  import AlignCenter from "$lib/components/align-center.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";

  export let house = {};
</script>

<div class="pb-4 text-center">
  <TitleResponsive>{house?.price}</TitleResponsive>
</div>
<div class="flex flex-wrap gap-4 justify-center items-start text-center">
  <HouseInfo>
    <AlignCenter>
      <CashOutline size="xl" /><b>평균 분양가 (m²당 USD)</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.pricePerSquareMeter.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <HomeOutline size="xl" /><b>판매 유형</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.salesType.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <RulerCombinedOutline size="xl" /><b>전용 면적 (m²)</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.squareMeter.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <CogOutline size="xl" /><b>구성</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.config.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <CalendarMonthOutline size="xl" /><b>입주 예정일</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.date.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <UsersGroupOutline size="xl" /><b>총 세대수</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.houseHolders.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <UserOutline size="xl" /><b>소유권 형태</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.own.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <BuildingOutline size="xl" /><b>개발 및 시공</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.builder.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <DollarOutline size="xl" /><b>예상 임대 수익률</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.expectedReturn.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
  <HouseInfo>
    <AlignCenter>
      <LandmarkOutline size="xl" /><b>취득세</b>
    </AlignCenter>
    <div class="preview">{@html marked(house?.tax.split('\n').join('\n\n') ?? "")}</div>
  </HouseInfo>
</div>