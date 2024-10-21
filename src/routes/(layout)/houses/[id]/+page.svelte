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
  import { page } from '$app/stores'
  import { Alert, Button } from 'flowbite-svelte';

  export let data;
  let { house, uploader } = data
  $: height = $footerTop - $screenHeight;

  let deleteCheck = false

  const resize = () => {
    height = $footerTop - $screenHeight
  }
</script>

<svelte:window on:resize={resize} />

{#if deleteCheck}
<Alert class="z-30 fixed top-10 left-1/2 -translate-x-1/2">
  <div class="flex items-center gap-3">
    <span class="text-lg font-medium">글을 삭제하시겠습니까?</span>
  </div>
  <p class="mt-2 mb-4 text-sm">등록하신 {house.title} 매물 정보가 영구히 삭제되며 복구할 수 없습니다.</p>
  <div class="flex gap-2">
    <Button href={`${$page.params.id}/delete`} size="xs">삭제</Button>
    <Button on:click={() => deleteCheck = false} size="xs" outline>취소</Button>
  </div>
</Alert>
{/if}

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white dark:bg-gray-900 w-full border-b-2 flex justify-center items-center p-4 text-center">
    <TitleResponsive>{house.title}</TitleResponsive>
  </div>
{/if}
{#if $scrollY <= height && !uploader}
<a href="https://pf.kakao.com/_qpRxjxb/chat" class="z-20 fixed bottom-0 left-0 bg-primary-700 text-white w-full border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
  <Title>문의하기</Title>
</a>
{:else if $scrollY <= height}
<div class='w-full z-20 fixed bottom-0 left-0 flex'>
  <a href={`${$page.params.id}/edit`} class="bg-primary-700 text-white flex-1 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>수정하기</Title>
  </a>
  <button on:click={() => deleteCheck = true} class="bg-red-700 text-white flex-1 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>삭제하기</Title>
  </button>
</div>
{/if}

<div id="title" class="w-full text-center mb-4 p-4 border-b-2">
  <TitleResponsive>{house.title}</TitleResponsive>
</div>
<div id="main-carousel" class="w-full">
  <MainImages title={house.title} images={house.images.split('|')} />
</div>
<div>
  <div class="px-4 md:px-20 my-4">
    <div class="flex flex-col gap-8">
      <Title>매물 특징</Title>
      <div class="flex flex-col sm:flex-row gap-8">
        <div class="flex-1 flex flex-col gap-8">
          {#each JSON.parse(house.descriptions) as description}
          <div class="flex flex-col gap-4">
            <TitleSmall>{description.title}</TitleSmall>
            <div>{@html marked(description.content.split('\n').join('\n\n') ?? "")}</div>
          </div>
          {/each}
        </div>
        <div class="flex flex-col gap-4 justify-start items-center">
          <img class="min-w-[120px]" src={"/images/people/" + house.writer + ".jpg"} alt={house.writer} />
          <div class="text-center">
            <TitleResponsive>{peoples[house.writer].name}</TitleResponsive>
            <div>{peoples[house.writer].team + ' ' + peoples[house.writer].position}</div>
          </div>
        </div>
      </div>
    </div>
    <Hr />
    <div class="flex flex-col gap-4 justify-center items-center">
      <Title>개발사 정보</Title>
      <TitleSmall>{house.builder}</TitleSmall>
      <div>{house.builderDetail}</div>
    </div>
    <Hr />
    <div class="h-fit flex flex-col gap-4">
      <Title>매물 정보</Title>
      <HouseInfos house={house} />
    </div>
    <Hr />
  </div>
</div>
<div class="w-full flex flex-col gap-4 text-center">
  <Title>매물 지도</Title>
  <TitleSmall>{house.location}</TitleSmall>
  {@html marked(`<iframe class="w-full h-80" ${house.googleMap.split('<iframe').length > 1 ? house.googleMap.split('<iframe')[1] : "></iframe>"}`)}
  
</div>

{#if !uploader}
<a href="https://pf.kakao.com/_qpRxjxb/chat" class="bg-primary-700 text-white w-full h-[70px] border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
  <Title>문의하기</Title>
</a>
{:else }
<div class='w-full flex'>
  <a href={`${$page.params.id}/edit`} class="bg-primary-700 text-white flex-1 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>수정하기</Title>
  </a>
  <button on:click={() => deleteCheck = true} class="bg-red-700 text-white flex-1 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>삭제하기</Title>
  </button>
</div>
{/if}