<script>
  import { marked } from 'marked'
  import { Hr, Badge } from "flowbite-svelte";
  import Title from "$lib/components/title.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";
  import TitleSmall from "$lib/components/title-small.svelte";
  import MainImages from "./main-images.svelte";
  import { scrollY, headerHeight, screenHeight, footerTop } from "$lib/scroll-controls/index.ts"
  import HouseInfos from "./house-infos.svelte";
  import { peoples } from "$lib/data/peoples.ts";
  import { page } from '$app/stores'
  import { Alert, Button } from 'flowbite-svelte';
  import { MapPinSolid, ClockSolid, BuildingSolid } from 'flowbite-svelte-icons';

  export let data;
  let { house, uploader } = data
  $: height = $footerTop - $screenHeight;

  // Find the writer in the peoples array based on ID
  $: writer = peoples.find(person => person.id === house.writer);

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


<div class="w-full bg-gray-50 dark:bg-gray-800 py-6">
  <div class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <Badge color="indigo" class="mb-2">프리미엄 매물</Badge>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{house.title}</h1>
        <div class="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-300">
          <div class="flex items-center">
            <MapPinSolid class="w-4 h-4 mr-1" />
            <span>{house.city}</span>
          </div>
          <div class="flex items-center">
            <BuildingSolid class="w-4 h-4 mr-1" />
            <span>{house.builder}</span>
          </div>
        </div>
      </div>
      <div class="mt-4 md:mt-0">
        <div class="text-3xl font-bold text-primary-700 dark:text-primary-500">{house.price}</div>
      </div>
    </div>
  </div>
</div>

<div id="main-carousel" class="w-full mb-8">
  <MainImages title={house.title} images={house.images.split('|')} />
</div>

<div class='container mx-auto px-4 md:px-8'>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
    <div class="lg:col-span-2">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8 overflow-hidden">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <span class="inline-block w-1 h-6 bg-primary-700 mr-3"></span>
          매물 특징
        </h2>
        <div class="space-y-8">
          {#each JSON.parse(house.descriptions) as description}
          <div class="border-l-4 border-primary-700 pl-4">
            <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{description.title}</h3>
            <div class='prose max-w-none text-gray-700 dark:text-gray-300 break-words'>{@html marked(description.content.split('\n').join('\n\n') ?? "")}</div>
          </div>
          {/each}
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8 overflow-hidden">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <span class="inline-block w-1 h-6 bg-primary-700 mr-3"></span>
          개발사 정보
        </h2>
        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{house.builder}</h3>
          <div class="prose max-w-none text-gray-700 dark:text-gray-300 break-words">{@html marked(house.builderDetail.split('\n').join('\n\n') ?? "")}</div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 overflow-hidden">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <span class="inline-block w-1 h-6 bg-primary-700 mr-3"></span>
          매물 정보
        </h2>
        <HouseInfos house={house} />
      </div>
    </div>
    
    <div class="lg:col-span-1">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
        <div class="flex flex-col items-center text-center mb-6">
          <img class="w-32 h-32 rounded-full object-cover border-4 border-primary-100 mb-4" src={"/images/people/" + house.writer + ".jpg"} alt={writer ? writer.name : house.writer} />
          {#if writer}
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{writer.name}</h3>
            <p class="text-gray-600 dark:text-gray-400">{writer.team + ' ' + writer.position}</p>
          {:else}
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">작성자 정보 없음</h3>
            <p class="text-gray-600 dark:text-gray-400">정보를 찾을 수 없습니다</p>
          {/if}
          
          <div class="w-full mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-center gap-2 mb-3">
              <ClockSolid class="w-5 h-5 text-primary-700" />
              <span class="font-medium">전문가 상담 가능 시간</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">평일 09:00 - 18:00</p>
          </div>
        </div>
        
        {#if !uploader}
          <Button href="https://pf.kakao.com/_qpRxjxb/chat" class="w-full">
            <span class="mr-2">전문가에게 문의하기</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </Button>
        {:else}
          <div class="flex gap-2">
            <Button href={`${$page.params.id}/edit`} class="flex-1">수정하기</Button>
            <Button color="red" on:click={() => deleteCheck = true} class="flex-1">삭제하기</Button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>