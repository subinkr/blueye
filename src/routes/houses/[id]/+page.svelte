<script>
  import { marked } from 'marked'
  import { Hr } from "flowbite-svelte";
  import Title from "$lib/components/title.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";
  import TitleSmall from "$lib/components/title-small.svelte";
  import MainImages from "./main-images.svelte";
  import { scrollY, headerHeight, screenHeight, footerTop } from "$lib/scroll-controls/index.ts"
  import HouseInfos from "./house-infos.svelte";

  import { peoples } from "$lib/data/peoples.ts";

  export let data;
  $: height = $footerTop - $screenHeight;

  const resize = () => {
    height = $footerTop - $screenHeight
  }
</script>

<svelte:window on:resize={resize} />

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white dark:bg-gray-900 w-full border-b-2 flex justify-center items-center p-4 text-center">
    <TitleResponsive>{data.title}</TitleResponsive>
  </div>
{/if}
{#if $scrollY <= height}
<button id="contact" class="z-20 fixed bottom-0 left-0 bg-primary-700 text-white w-full border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
  <Title>문의하기</Title>
</button>
{/if}

<div id="title" class="w-full text-center mb-4 p-4 border-b-2">
  <TitleResponsive>{data.title}</TitleResponsive>
</div>
<div id="main-carousel" class="w-full">
  <MainImages images={data.images.split('\n')} />
</div>
<div>
  <div class="px-4 md:px-20 my-4">
    <div class="flex flex-col gap-8">
      <Title>매물 특징</Title>
      <div class="flex flex-col sm:flex-row gap-8">
        <div class="flex-1 flex flex-col gap-8">
          {#each JSON.parse(data.descriptions) as description}
          <div class="flex flex-col gap-4">
            <TitleSmall>{description.title}</TitleSmall>
            <div>{description.content}</div>
          </div>
          {/each}
        </div>
        <div class="flex flex-col gap-4 justify-start items-center">
          <img class="min-w-[120px]" src={"/images/people/" + data.writer + ".jpg"} alt={data.writer} />
          <div class="text-center">
            <TitleResponsive>{peoples[data.writer].name}</TitleResponsive>
            <div>{peoples[data.writer].team + ' ' + peoples[data.writer].position}</div>
          </div>
        </div>
      </div>
    </div>
    <Hr />
    <div class="flex flex-col gap-4 justify-center items-center">
      <Title>개발사 정보</Title>
      <TitleSmall>{data.builder}</TitleSmall>
      <div>{data.builderDetail}</div>
    </div>
    <Hr />
    <div class="h-fit flex flex-col gap-4">
      <Title>매물 정보</Title>
      <HouseInfos house={data} />
    </div>
    <Hr />
  </div>
</div>
<div class="w-full flex flex-col gap-4 text-center">
  <Title>매물 지도</Title>
  <TitleSmall>{data.location}</TitleSmall>
  {@html marked(data.googleMap)}
  
</div>
<button id="contact" class="bg-primary-700 text-white w-full h-[70px] border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
  <Title>문의하기</Title>
    <!-- <MainButton title="문의하기">
      정보 입력
    </MainButton> -->
</button>