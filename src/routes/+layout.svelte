<script>
  import "../app.css";
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
  import { headerHeight, bodyHeight } from '$lib/scroll-control.ts';
  import { onMount } from "svelte";

  onMount(() => {
    $headerHeight = headerElement.clientHeight;
    $bodyHeight = " min-h-[calc(100vh-73px)] lg:min-h-[calc(100vh-117px)]";
    visible = true;
  })
  
  let visible = false;
  let headerElement;
</script>

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
</div>