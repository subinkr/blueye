<script>
  import { Modal } from "flowbite-svelte";

  export let title;
	export let images;
  let modal = false;
</script>

<Modal color="primary" {title} bind:open={modal} size='xl' outsideclose>
  {#each images as src}
    <img src={src} alt={src} />
  {/each}
</Modal>
<div class="w-full max-h-[400px] flex justify-center">
  <div class="max-w-[1200px] flex justify-center gap-4 px-4 lg:px-20">
    <button class="flex-1" on:click={() => (modal = true)}>
      {#if images.length > 0}
        <img class="w-full h-full object-cover" src={images[0]} alt={images[0]} />
      {/if}
    </button>
    <button class="hidden lg:flex w-[400px] flex-col gap-4" on:click={() => (modal = true)}>
      {#if images.length > 1}
      <img class="object-cover flex-1" src={images[1]} alt={images[1]} />
      {/if}
      {#if images.length > 2}
      <img class="object-cover flex-1" src={images[2]} alt={images[2]} />
      {/if}
    </button>
  </div>
</div>