<script>
  import { Button, Carousel, Heading } from 'flowbite-svelte';
  import { CaretRightOutline } from 'flowbite-svelte-icons';
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { scrollY, mainScreenHeight, blueye6DivisionHeight, carouselHeight, carouselTop } from '$lib/scroll-control.ts';
  import Boards from './3-boards.svelte';

  export const images = [
    {
      alt: '두바이',
      src: '/images/dubai.png',
      title: 'dubai'
    },
    {
      alt: '캄보디아',
      src: '/images/cambodia.png',
      title: 'cambodia'
    },
    {
      alt: '중국',
      src: '/images/panorama.jpg',
      title: 'china'
    },
    {
      alt: '베트남',
      src: '/images/panorama.jpg',
      title: 'vietnam'
    },
    {
      alt: '싱가포르',
      src: '/images/panorama.jpg',
      title: 'singapore'
    },
    {
      alt: '말레이시아',
      src: '/images/panorama.jpg',
      title: 'malaysia'
    }
  ];

  let index;
  let image;

  const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });
</script>


<div class="w-full space-y-4">
  <div class="min-h-12 flex items-center justify-center">
    {#if $scrollY >= $carouselTop}
      <div transition:fly={{ y: 100, duration: 1000 }} >
        <Heading tag="h2" customSize="text-xl font-extrabold sm:text-2xl md:text-3xl">{image ? image.alt : "해외 정보"}</Heading>
      </div>
    {/if}
  </div>
  <Carousel {images} transition={scaleAnimation} duration={3000} class="rounded-none" let:Indicators let:Controls on:change={({ detail }) => (image = detail)} bind:index>
    <Indicators />
    <Controls let:changeSlide let:ControlButton>
      <ControlButton name="Previous" forward={false} on:click={()=>changeSlide(false)} />
      <Button pill class="p-2 absolute top-1/2 -translate-y-1/2 end-4 font-bold" on:click={()=>changeSlide(true)}><CaretRightOutline /></Button>
    </Controls>
  </Carousel>
  <div class="min-h-[50vh]">
  {#if $scrollY >= $carouselTop + $carouselHeight / 4}
    <div class="flex flex-col items-center" transition:fly={{ y: 100, duration: 1000 }}>
      <Boards country={image ? image.title : 'dubai'} />
    </div>
  {/if}
  </div>

  {#if $scrollY >= $carouselTop && $scrollY < $carouselTop + $carouselHeight}
    <a 
    transition:fly={{ y: 100, duration: 1000 }} 
    href={`/${image ? image.title : null}`} 
    class="z-30 border-t-2 fixed bottom-0 left-0 bg-white dark:bg-black w-full h-20 dark:text-white font-bold text-lg sm:text-xl md:text-2xl flex justify-center items-center text-center">
      {image? image.alt + " 관련 정보 더보기" : "로딩중"}
    </a>
  {/if}
</div>