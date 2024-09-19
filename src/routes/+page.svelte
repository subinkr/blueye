<script>
  import Reviews from './4-reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Portfolio from './portfolio.svelte';
  import Recommend from './recommend.svelte';
  import MainScreen from './main-screen.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
</script>

<div id="main-carousel" class="w-full">
  <MainCarousel />
</div>
<div id="ceo">
  <Ceo />
</div>
<div id="portfolio" class="w-full p-8 min-h-screen flex flex-col gap-4 justify-center items-center bg-primary-50 dark:bg-black">
  <Portfolio />
</div>
<div id="people" class="py-12">
  <People />
</div>
<div class="relative h-[400px] w-full">
  <MainScreen />
</div>
<div id="why" class="w-full flex justify-center">
  <Why />
</div>
<div id="reviews" class="w-full py-12 flex flex-col gap-4 bg-primary-50 dark:bg-black">
  <Reviews />
</div>
<div class="text-xl">블루아이 고객만이 받는 혜택</div>
<br />
<div>더리치 매거진 / 네트워킹</div>
<div>부동산 투어 / 한달살기</div>
<div>비즈니스 컨설팅</div>
<br />
<br />
<div class="text-xl">상담문의</div>
<br />
<div>카카오톡 플러스친구 연결</div>
<div>서울센터 전화번호</div>
<br />
<!-- <Recommend /> -->
<!-- <div class="w-full">
  <News />
</div>

<div class="max-w-6xl flex flex-col text-center items-center">
  <Gallery />
</div> -->