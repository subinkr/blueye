<script>
  import Reviews from './reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Branch from './branch.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
  import Contact from './contact.svelte';
  import Stats from './stats.svelte';
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

<!-- <section id="main-carousel" class="w-full">
  <MainCarousel />
</section> -->

<section id="stats" class="bg-white">
  <Stats />
</section>

<section id="ceo" class="w-full bg-gray-50">
  <Ceo />
</section>

<section id="branch" class="w-full bg-white">
  <Branch />
</section>

<section id="people" class="bg-white">
  <People />
</section>

<section id="why" class="w-full bg-gray-50">
  <Why />
</section>

<section id="reviews" class="w-full bg-white">
  <Reviews />
</section>

<section id="contact" class="w-full bg-gray-50">
  <Contact />
</section>

<style>
  section {
    scroll-margin-top: 80px; /* For smooth scrolling with fixed header */
  }
</style>