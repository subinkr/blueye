<script>
  import Gallery from './gallery.svelte';
  import MainScreen from './main-screen.svelte';
  import { onMount } from 'svelte';
  import { scrollY, bodyHeight, mainScreenHeight, blueye6DivisionHeight, carouselHeight } from '$lib/scroll-control.ts';
  import News from './news.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Portfolio from './portfolio.svelte';
  import Recommend from './recommend.svelte';

  let blueye6DivisionElement;
  let carouselElement;

  onMount(() => {
    updateHeight(); // 초기 높이 설정
  });

  function updateHeight() {
    // resize 이벤트 발생 시 높이 업데이트
    $mainScreenHeight = window.innerHeight;
    $blueye6DivisionHeight = blueye6DivisionElement.clientHeight;
    $carouselHeight = carouselElement.clientHeight;
  }
</script>

<svelte:window on:resize={updateHeight} />

<div class="w-full" bind:this={carouselElement}>
  <MainCarousel />
</div>
<div class="max-w-8xl flex flex-col text-center items-center px-8" bind:this={blueye6DivisionElement}>
  <Portfolio />
</div>
<div class="max-w-8xl flex flex-col text-center items-center px-8" bind:this={blueye6DivisionElement}>
  <Recommend />
</div>
<!-- <div class="w-full">
  <News />
</div>
<MainScreen />
<div class="max-w-6xl flex flex-col text-center items-center">
  <Gallery />
</div> -->