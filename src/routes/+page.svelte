<script>
  import Reviews from './reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Branch from './branch.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
  import Benefits from './benefits.svelte';
  import Contact from './contact.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  onMount(() => {
    if($page.url.hash == '') {
      return;
    }
    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })
</script>

<div id="main-carousel" class="w-full">
  <MainCarousel />
</div>
<div id="ceo">
  <Ceo />
</div>
<div id="branch" class="w-full py-8 min-h-screen flex flex-col gap-4 justify-center items-center bg-primary-50 dark:bg-black">
  <Branch />
</div>
<div id="people" class="py-20">
  <People />
</div>
<div id="why" class="w-full flex justify-center">
  <Why />
</div>
<div id="reviews" class="w-full py-20 flex flex-col gap-4 bg-primary-50 dark:bg-black">
  <Reviews />
</div>
<div id="benefits" class=" w-full flex flex-col gap-4 justify-center py-20">
  <Benefits />
</div>
<div id="contact" class="w-full pt-20 flex flex-col gap-12 justify-center items-center bg-primary-50 dark:bg-black">
  <Contact />
</div>