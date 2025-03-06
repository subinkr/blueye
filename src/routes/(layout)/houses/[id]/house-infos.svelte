<script>
  import { BuildingOutline, CalendarMonthOutline, CashOutline, CogOutline, DollarOutline, HomeOutline, LandmarkOutline, RulerCombinedOutline, UserOutline, UsersGroupOutline, MapPinSolid } from "flowbite-svelte-icons";
  import { marked } from 'marked'

  import HouseInfo from "./house-info.svelte";
  import AlignCenter from "$lib/components/align-center.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";

  export let house = {};
</script>

<div class="mb-6">
  <div class="text-2xl font-bold text-primary-700 dark:text-primary-500 mb-4">{house?.price}</div>
</div>

<div class="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <CashOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">평균 분양가 (m²당 USD)</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.pricePerSquareMeter.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <HomeOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">판매 유형</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.salesType.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <RulerCombinedOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">전용 면적 (m²)</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.squareMeter.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <CogOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">구성</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.config.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <CalendarMonthOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">입주 예정일</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.date.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <UsersGroupOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">총 세대수</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.houseHolders.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <BuildingOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">개발 및 시공</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.builder.split('\n').join('\n\n') ?? "")}</div>
  </div>
  
  <div class="flex-grow basis-[calc(50%-0.5rem)] ">
    <div class="flex items-center mb-3">
      <LandmarkOutline class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
      <h3 class="font-semibold">세금</h3>
    </div>
    <div class="prose max-w-none text-gray-700 dark:text-gray-300">{@html marked(house?.tax.split('\n').join('\n\n') ?? "")}</div>
  </div>
</div>

{#if house?.googleMap}
<div class="mt-8">
  <div class="flex items-center mb-4">
    <MapPinSolid class="text-primary-700 dark:text-primary-400 mr-3" size="lg" />
    <h3 class="text-xl font-semibold">위치 정보</h3>
  </div>
  <div class="mb-2 text-gray-700 dark:text-gray-300">{house.location}</div>
  <div>
    {@html marked(`<iframe class="w-full h-80" ${house.googleMap.split('<iframe').length > 1 ? house.googleMap.split('<iframe')[1] : "></iframe>"}`)}
  </div>
</div>
{/if}