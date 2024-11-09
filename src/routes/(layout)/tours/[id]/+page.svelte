<script>
  import { marked } from 'marked'
  import Title from "$lib/components/title.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";
  import TitleSmall from "$lib/components/title-small.svelte";
  import { scrollY, headerHeight, screenHeight, footerTop } from "$lib/scroll-controls/index.ts"
  import { peoples } from "$lib/data/peoples.ts";
  import { page } from '$app/stores'
  import { Alert, Button } from 'flowbite-svelte';

  export let data;
  let { tour, uploader } = data
  $: height = $footerTop - $screenHeight;

  let deleteCheck = false
  let visible = false
  const images = tour.images.split('|')

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
  <p class="mt-2 mb-4 text-sm">등록하신 {tour.title} 투어 정보가 영구히 삭제되며 복구할 수 없습니다.</p>
  <div class="flex gap-2">
    <Button href={`${$page.params.id}/delete`} size="xs">삭제</Button>
    <Button on:click={() => deleteCheck = false} size="xs" outline>취소</Button>
  </div>
</Alert>
{/if}

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white dark:bg-gray-900 w-full border-b-2 flex justify-center items-center p-4 text-center">
    <TitleResponsive>{tour.title}</TitleResponsive>
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

<div id="title" class="w-full text-center p-4 border-b-2">
  <TitleResponsive>{tour.title}</TitleResponsive>
</div>
<div class='w-full'>
  <img class='w-full max-h-[50vh] object-cover' src={tour.mainImage} alt={tour.mainImage} />
  <div class="px-4 md:px-20 my-4">
    <div>
      <Title>투어 특징</Title>
      <div class="flex flex-col sm:flex-row gap-8 my-8">
        <div class="flex-1 flex flex-col gap-8">
          {#each JSON.parse(tour.descriptions) as description}
          <div class="flex flex-col gap-4">
            <TitleSmall>{description.title}</TitleSmall>
            <div class='prose max-w-none text-black dark:text-white'>{@html marked(description.content.split('\n').join('\n\n') ?? "")}</div>
          </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-4">
        <div class="flex flex-col justify-start items-center">
          <Title>참가비</Title>
          <div class='prose text-center max-w-none text-black dark:text-white'>{@html marked(tour.price.split('\n').join('\n\n') ?? "")}</div>
        </div>
        <div class="flex flex-col justify-start items-center">
          <Title>투어일</Title>
          <div class='prose text-center max-w-none text-black dark:text-white'>{@html marked(tour.date.split('\n').join('\n\n') ?? "")}</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class='px-4 w-full lg:w-[80vw] flex flex-col justify-center items-center'>
  <div class='my-4'><Title>상세 정보</Title></div>
  {#if visible}
    {#each images as src}
      <img class="w-full object-cover object-left-top" src={src} alt={src} />
    {/each}
  {:else}
    <div class='w-full relative'>
      <img class='w-full max-h-[100vh] object-cover object-left-top' src={images[0]} alt={images[0]} />
      <button class="w-full h-[20vh] flex flex-1 justify-center items-end p-4 text-2xl absolute bottom-0 left-0 bg-gradient-to-t from-white from-10% via-white via-30% to-transparent" on:click={() => (visible = true)}>더보기</button>
    </div>
  {/if}
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