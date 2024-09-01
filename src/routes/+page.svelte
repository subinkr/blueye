<script>
  import Carousel from './carousel.svelte';
  import Gallery from './gallery.svelte';
  import MainScreen from './main-screen.svelte';
  import Marquee from './marquee.svelte';
  import Blueye_6_Division from './blueye-6-division.svelte';
  import { onMount } from 'svelte';
  import { scrollY, mainScreenHeight, blueye6DivisionHeight, carouselHeight, carouselTop } from '$lib/scroll-control.ts';

  let blueye6DivisionElement;
  let carouselElement;

  onMount(() => {
  const handleScroll = () => {
    $scrollY = window.scrollY;
    // console.log($scrollY, $mainScreenHeight / 3 + $blueye6DivisionHeight)
  };

  window.addEventListener("scroll", handleScroll);

  updateHeight(); // 초기 높이 설정

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

  function updateHeight() {
    // resize 이벤트 발생 시 높이 업데이트
    $mainScreenHeight = window.innerHeight;
    $blueye6DivisionHeight = blueye6DivisionElement.clientHeight;
    $carouselHeight = carouselElement.clientHeight;
    $carouselTop = $mainScreenHeight / 3 + $blueye6DivisionHeight;
  }
</script>

<svelte:window bind:scrollY={$scrollY} on:resize={updateHeight} />

<div class="w-full flex flex-col justify-center items-center overflow-x-hidden">
  <MainScreen />
  <div class="max-w-8xl flex flex-col text-center items-center px-8" bind:this={blueye6DivisionElement}>
    <Blueye_6_Division />
  </div>
  <div class="w-full" bind:this={carouselElement}>
    <Carousel />
  </div>
  <!-- <div class="max-w-6xl flex flex-col text-center items-center">
    <Gallery />
  </div> -->
  <Marquee />
</div>