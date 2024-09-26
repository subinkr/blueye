<script>
  import { Hr } from "flowbite-svelte";
  import Title from "$lib/components/title.svelte";
  import TitleResponsive from "$lib/components/title-responsive.svelte";
  import TitleSmall from "$lib/components/title-small.svelte";
  import MainImages from "./main-images.svelte";
  import { scrollY, headerHeight, screenHeight, footerTop } from "$lib/scroll-controls/index.ts"
  import HouseInfos from "./house-infos.svelte";

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
  <MainImages {...data} />
</div>
<div>
  <div class="px-4 md:px-20 my-4">
    <div class="flex flex-col gap-8">
      <Title>매물 특징</Title>
      <div class="flex flex-col sm:flex-row gap-8">
        <div class="flex flex-col gap-8">
          {#each data.descriptions as description}
          <div class="flex flex-col gap-4">
            <TitleSmall>{description.title}</TitleSmall>
            <div>{description.content}</div>
          </div>
          {/each}
        </div>
        <div class="flex flex-col gap-4 justify-start items-center">
          <img class="min-w-[120px]" src="/images/people/9.jpg" alt="추경철 말레이시아 지사장" />
          <div class="text-center">
            <TitleResponsive>{data.from.name}</TitleResponsive>
            <div>{data.from.position}</div>
          </div>
        </div>
      </div>
    </div>
    <Hr />
    <div class="flex flex-col gap-4 justify-center items-center">
      <Title>개발사 정보</Title>
      <img class="w-[240px]" src="images/builder/furi.png" alt="furi" />
      <div>{data.detail}</div>
    </div>
    <Hr />
    <div class="h-fit flex flex-col gap-4">
      <Title>매물 정보</Title>
      <HouseInfos house={data} />
    </div>
    <Hr />
  </div>
</div>
<div class="w-full flex flex-col gap-4">
  <Title>매물 지도</Title>
  <iframe class="w-full h-80" id="house" title="house example" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.328562299716!2d103.76879173327359!3d1.4592816036147944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12de0a2b934d%3A0x6e531768aa57332c!2zMSwgSmFsYW4gVGFuanVuZyBQdXRlcmksIFRhbmp1bmcgUHV0ZXJpLCA4MDMwMCBKb2hvciBCYWhydSwgSm9ob3IsIOunkOugiOydtOyLnOyVhA!5e0!3m2!1sko!2skr!4v1726809492706!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<button id="contact" class="bg-primary-700 text-white w-full h-[70px] border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
  <Title>문의하기</Title>
    <!-- <MainButton title="문의하기">
      정보 입력
    </MainButton> -->
</button>