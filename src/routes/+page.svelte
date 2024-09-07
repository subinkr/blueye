<script>
  import Gallery from './gallery.svelte';
  import MainScreen from './main-screen.svelte';
  import { onMount } from 'svelte';
  import { scrollY, bodyHeight, blueye6DivisionHeight, carouselHeight } from '$lib/scroll-control.ts';
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
    $blueye6DivisionHeight = blueye6DivisionElement.clientHeight;
    $carouselHeight = carouselElement.clientHeight;
  }
</script>

<svelte:window on:resize={updateHeight} />

<MainCarousel />
<Portfolio />
<Recommend />
<!-- <div class="w-full">
  <News />
</div>
<MainScreen />
<div class="max-w-6xl flex flex-col text-center items-center">
  <Gallery />
</div> -->