<script>
  import "../app.css";
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
  import { scrollY, headerHeight, bodyHeight } from '$lib/scroll-control.ts';
  import { onMount } from "svelte";
  import { AngleUpOutline } from 'flowbite-svelte-icons';

  onMount(() => {

    const handleScroll = () => {
      $scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    
    $headerHeight = headerElement.clientHeight;
    $bodyHeight = " min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-117px)]";
    visible = true;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
  
  let visible = false;
  let headerElement;
</script>

<svelte:window bind:scrollY={$scrollY} />

<div class="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col justify-center">
  <div bind:this={headerElement}>
    <Header />
  </div>
  <div class="w-full flex flex-col justify-start items-center">
  {#if visible}
    <slot />
  {:else}
    <div class="h-screen"></div>
  {/if}
  </div>
  <Footer />
  {#if $scrollY > 200}
    <button class="fixed w-16 h-16 bottom-8 right-8 rounded-full flex justify-center items-center bg-gray-900/60" on:click={()=>{window.scrollTo({top:0, behavior:'smooth'});}}><AngleUpOutline size="xl" color="white" /></button>
  {/if}
</div>