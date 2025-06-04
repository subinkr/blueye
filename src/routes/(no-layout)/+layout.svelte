<script>
  import "../../app.css";
  import { AngleUpOutline } from 'flowbite-svelte-icons';
  import { scrollY } from '$lib/scroll-controls/index.ts';
  import { onMount, tick } from "svelte";

  onMount(async () => {
    const handleScroll = () => {
      $scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    await tick();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
</script>

<div class="w-full flex flex-col justify-center items-center">
  <slot />
  {#if $scrollY > 200}
    <button class="z-40 fixed w-16 h-16 bottom-24 right-4 sm:bottom-24 sm:right-8 rounded-full flex justify-center items-center bg-gray-900/60" on:click={()=>{window.scrollTo({top:0, behavior:'smooth'});}}><AngleUpOutline size="xl" color="white" /></button>
  {/if}
</div>