<script>
  import Reviews from './reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Branch from './branch.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
  import Contact from './contact.svelte';
  import Stats from './stats.svelte';
  import DubaiPromo from './dubai-promo.svelte';
  import KoreaPromo from './korea-promo.svelte';
  import HomeTracker from './home-tracker.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  export let data;
  const { API_SERVER } = data;

  onMount(() => {
    if($page.url.hash == '') {
      return;
    }
    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })
</script>

<!-- <section id="korea-promo" class="w-full">
  <KoreaPromo />
</section> -->

<!-- <section id="main-carousel" class="w-full">
  <MainCarousel />
</section> -->

<section id="dubai-promo" class="w-full">
  <DubaiPromo />
</section>

<section id="stats" class="bg-white dark:bg-gray-800">
  <Stats />
</section>

<section id="ceo" class="w-full bg-gray-50 dark:bg-gray-900">
  <Ceo />
</section>

<section id="home-tracker" class="w-full">
  <HomeTracker />
</section>

<section id="branch" class="w-full bg-white dark:bg-gray-800">
  <Branch />
</section>

<section id="people" class="bg-white dark:bg-gray-900">
  <People />
</section>

<section id="why" class="w-full bg-gray-50 dark:bg-gray-900">
  <Why />
</section>

<section id="reviews" class="w-full bg-white dark:bg-gray-800">
  <Reviews />
</section>

<section id="contact" class="w-full bg-white dark:bg-gray-800">
  <Contact />
</section>

<style>
  section {
    scroll-margin-top: 80px; /* For smooth scrolling with fixed header */
  }
</style>