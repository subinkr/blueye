<script>
  import "../app.css";
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import { scrollY, headerHeight, footerHeight, bodyHeight, screenHeight, footerTop } from '$lib/scroll-controls/index.ts';
  import { onMount, tick } from "svelte";
  import { AngleUpOutline } from 'flowbite-svelte-icons';

  let visible = false;
  let headerElement;
  let footerElement;
  let bodyElement;

  const resize = () => {
    $headerHeight = headerElement.clientHeight;
    $bodyHeight = bodyElement.clientHeight;
    $footerTop = window.scrollY + footerElement.getBoundingClientRect().top;
  }

  onMount(async () => {
    const handleScroll = () => {
      $scrollY = window.scrollY;
      resize();
    };

    window.addEventListener("scroll", handleScroll);
    
    $footerHeight = footerElement.clientHeight;
    $screenHeight = bodyElement.clientHeight;
    resize();
    visible = true;
    await tick();
    resize();
    
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
  <div class="w-full flex flex-col justify-start items-center overflow-hidden" bind:this={bodyElement}>
  {#if visible}
    <slot />
  {:else}
    <div class="h-screen"></div>
  {/if}
  </div>
  <div bind:this={footerElement}>
    <Footer />
  </div>
  {#if $scrollY > 200}
    <button class="z-40 fixed w-16 h-16 bottom-24 right-4 sm:bottom-24 sm:right-8 rounded-full flex justify-center items-center bg-gray-900/60" on:click={()=>{window.scrollTo({top:0, behavior:'smooth'});}}><AngleUpOutline size="xl" color="white" /></button>
  {/if}
</div>