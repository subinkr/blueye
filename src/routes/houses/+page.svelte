<script>
  import { TrashBinOutline, BuildingOutline, CalendarMonthOutline, CashOutline, CogOutline, DollarOutline, HomeOutline, LandmarkOutline, RulerCombinedOutline, UserOutline, UsersGroupOutline } from "flowbite-svelte-icons";
  import { Hr } from "flowbite-svelte";
  import Title from "$lib/components/title.svelte";
  import { scrollY, headerHeight } from "$lib/scroll-controls/index.ts"
  import HouseInfo from "./house-info.svelte";
  import AlignCenter from "$lib/components/align-center.svelte";
  import { Input, Textarea, Select, Button } from "flowbite-svelte";

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Enter 키 동작을 막음
    }
  }

  let selected;

  let countries = [
    { value: 'korea/seoul', name: '대한민국 서울' },
    { value: 'malaysia/johorbahrucity', name: '말레이시아 조호바루' },
    { value: 'vietnam/hanoi', name: '베트남 하노이' },
    { value: 'vietnam/hochiminhcity', name: '베트남 호치민' },
    { value: 'singapore', name: '싱가포르' },
    { value: 'uae/dubai', name: '아랍에미리트 두바이' },
    { value: 'china/beijing', name: '중국 북경' },
    { value: 'china/shanghai', name: '중국 상해' },
    { value: 'cambodia/phnompenh', name: '캄보디아 프놈펜' },
  ];

  let title = ""
  let descriptions = [
    {
      id: 0,
      title: '',
      content: '',
    }
  ]
  let descriptionsString = ""
  let builder = ""
  let builderDetail = ""
  let price = ""
  let location = ""
  let googleMap = ""
  let pricePerSquareMeter = ""
  let salesType = ""
  let squareMeter = ""
  let config = ""
  let date = ""
  let houseHolders = ""
  let own = ""
  let expectedReturn = ""
  let tax = ""
  let images = ""

</script>

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white dark:bg-gray-900 w-full border-b-2 flex justify-center items-center p-4 text-center">
    <Input placeholder="프로젝트 이름" bind:value={title} on:keydown={handleKeydown} />
  </div>
{/if}
<form method="POST">
  <div id="title" class="w-full text-center mb-4 p-4 border-b-2">
    <Input name="title" placeholder="프로젝트 이름" bind:value={title} on:keydown={handleKeydown} />
  </div>
  <div id="main-carousel" class="w-full">
    <Input name="images" class="hidden" bind:value={images} on:keydown={handleKeydown} />
  </div>
  <div>
    <div class="px-4 md:px-20 my-4">
      <div class="flex flex-col gap-8">
        <Title>매물 특징</Title>
        <div class="flex flex-col sm:flex-row gap-8">
          <div class="w-full flex flex-col gap-4">
            <Input name="descriptions" class="hidden" bind:value={descriptionsString} on:keydown={handleKeydown} />
            {#each descriptions as description}
              <div class='relative'>
                <Input size="lg" placeholder="소개 제목" class="font-bold" bind:value={description.title} on:keydown={handleKeydown} />
                <Button on:click={
                  () => {
                    descriptions = descriptions.filter(e => e.id !== description.id)
                  }
                } class="w-16 h-full absolute flex justify-center items-center top-0 right-0">
                  <TrashBinOutline size='lg' />
                </Button>
              </div>
              <Input placeholder="소개 내용" bind:value={description.content} on:keydown={handleKeydown} />
            {/each}
            <Button class="text-2xl" on:click={
              () => {
                descriptions.push(
                  {id: descriptions.length, title: '', content: ''}
                )
                descriptions = descriptions
              }
            }>+</Button>
          </div>
        </div>
      </div>
      <Hr />
      <div class="flex flex-col gap-4 justify-center items-center">
        <Title>개발사 정보</Title>
        <Input placeholder="개발사 이름" size='lg' class="font-bold" bind:value={builder} on:keydown={handleKeydown} />
        <Textarea name="builderDetail" placeholder="개발사 정보 상세" value={builderDetail}/>
      </div>
      <Hr />
      <div class="h-fit flex flex-col gap-4">
        <Title>매물 정보</Title>
        
        <div class="pb-4 text-center">
          <Input name="price" placeholder="$200,000(최소가 매물) ~ $500,000(최고가 매물)" size='lg' class="font-bold" value={price} on:keydown={handleKeydown} />
        </div>
        <div class="flex flex-wrap gap-4 justify-center items-start text-center">
          <HouseInfo>
            <AlignCenter>
              <CashOutline size="xl" /><b>평균 분양가 (m²당 USD)</b>
            </AlignCenter>
            <Textarea name="pricePerSquareMeter" class="h-40 resize-none" placeholder="$4,100" value={pricePerSquareMeter} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <HomeOutline size="xl" /><b>판매 유형</b>
            </AlignCenter>
            <Textarea name="salesType" class="h-40 resize-none" placeholder="분양" value={salesType} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <RulerCombinedOutline size="xl" /><b>전용 면적 (m²)</b>
            </AlignCenter>
            <Textarea name="squareMeter" class="h-40 resize-none" placeholder="40, 50, 60, 문의 필요" value={squareMeter} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <CogOutline size="xl" /><b>구성</b>
            </AlignCenter>
            <Textarea name="config" class="h-40 resize-none" placeholder="1층~7층 주차장,
  8층 Facilities,
  9층 ~ 49층 4개 동 3,600세대." value={config} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <CalendarMonthOutline size="xl" /><b>입주 예정일</b>
            </AlignCenter>
            <Textarea name="date" class="h-40 resize-none" placeholder="2차 일부: 2024년 12월,
  3차 : 2029년." value={date} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <UsersGroupOutline size="xl" /><b>총 세대수</b>
            </AlignCenter>
            <Textarea name="houseHolders" class="h-40 resize-none" placeholder="3600세대" value={houseHolders} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <UserOutline size="xl" /><b>소유권 형태</b>
            </AlignCenter>
            <Textarea name="own" class="h-40 resize-none" placeholder="FREE HOLD (영구 소유)" value={own} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <BuildingOutline size="xl" /><b>개발 및 시공</b>
            </AlignCenter>
            <Textarea name="builder" class="h-40 resize-none" placeholder="FURI (푸리)" bind:value={builder} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <DollarOutline size="xl" /><b>예상 임대 수익률</b>
            </AlignCenter>
            <Textarea name="expectedReturn" class="h-40 resize-none" placeholder="평균 4 ~ 5%" value={expectedReturn} />
          </HouseInfo>
          <HouseInfo>
            <AlignCenter>
              <LandmarkOutline size="xl" /><b>취득세</b>
            </AlignCenter>
            <Textarea name="tax" class="h-40 resize-none" placeholder="SPA(계약서)금액의 4%" value={tax} />
          </HouseInfo>
        </div>
      </div>
      <Hr />
    </div>
  </div>
  <div class="w-full flex flex-col gap-4 text-center mb-8">
    <Title>매물 지도</Title>
    <Select name="city" class="mt-2" items={countries} bind:value={selected} placeholder="부동산 지역 선택" on:keydown={handleKeydown} />
    <Input name="location" placeholder="주소" value={location} on:keydown={handleKeydown} />
    <Input name="googleMap" placeholder="iframe 태그" value={googleMap} on:keydown={handleKeydown} />
  </div>
  <button type="submit" on:click={
    () => {
      descriptionsString = JSON.stringify(descriptions)
    }
  } 
  id="contact" class="bg-primary-700 text-white w-full h-[70px] border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>업로드</Title>
      <!-- <MainButton title="문의하기">
        정보 입력
      </MainButton> -->
  </button>
</form>