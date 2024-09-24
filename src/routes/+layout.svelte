<script>
  import "../app.css";
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
  import { scrollY, headerHeight, bodyHeight } from '$lib/scroll-controls/index.ts';
  import { onMount } from "svelte";
  import { AngleUpOutline } from 'flowbite-svelte-icons';

  let visible = false;
  let headerElement;

  const resize = () => {
    $headerHeight = headerElement.clientHeight;
  }

  onMount(() => {

    const handleScroll = () => {
      $scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    
    resize();
    $bodyHeight = " min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-117px)]";
    visible = true;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
</script>

<svelte:window bind:scrollY={$scrollY} on:resize={resize} />

<div class="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col justify-center break-keep">
  <div bind:this={headerElement}>
    <Header />
  </div>
  <div class="w-full flex flex-col justify-start items-center overflow-hidden">
  {#if visible}
    <slot />
  {:else}
    <div class="h-screen"></div>
  {/if}
  </div>
  <Footer />
  {#if $scrollY > 200}
    <button class="z-40 fixed w-16 h-16 bottom-24 right-4 sm:bottom-24 sm:right-8 rounded-full flex justify-center items-center bg-gray-900/60" on:click={()=>{window.scrollTo({top:0, behavior:'smooth'});}}><AngleUpOutline size="xl" color="white" /></button>
  {/if}
</div>