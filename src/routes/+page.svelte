<script>
  import Reviews from './4-reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Portfolio from './portfolio.svelte';
  import Recommend from './recommend.svelte';
  import MainScreen from './main-screen.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
  import Benefits from './benefits.svelte';
  import Contact from './contact.svelte';
  import { Hr } from 'flowbite-svelte';
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
<div id="people" class="py-20">
  <People />
</div>
<!-- <div class="relative h-[400px] w-full">
  <MainScreen />
</div> -->
<div id="why" class="w-full flex justify-center">
  <Why />
</div>
<div id="reviews" class="w-full py-20 flex flex-col gap-4 bg-primary-50 dark:bg-black">
  <Reviews />
</div>
<div id="benefits" class=" w-full flex flex-col gap-4 justify-center py-20">
  <Benefits />
</div>
<Hr classHr="w-full" />
<div id="contact" class="w-full pt-20 flex flex-col gap-12 justify-center items-center">
  <Contact />
</div>
<!-- <Recommend /> -->
<!-- <div class="w-full">
  <News />
</div>

<div class="max-w-6xl flex flex-col text-center items-center">
  <Gallery />
</div> -->