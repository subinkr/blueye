<script>
  import { Modal } from "flowbite-svelte";

  export let title;
	export let images;
  let modal = false;
</script>

<Modal color="primary" {title} bind:open={modal} autoclose outsideclose>
  {#each images as image}
    <img src={image.src} alt={image.alt} />
  {/each}
</Modal>
<div class="w-full flex justify-center">
  <div class="max-w-[1200px] flex justify-center gap-4 px-4 lg:px-20">
    <button class="flex-1"  on:click={() => (modal = true)}>
      <img class="w-full h-full object-cover" src={images[0].src} alt={images[0].alt} />
    </button>
    <button class="hidden lg:flex w-[400px] flex-col gap-4" on:click={() => (modal = true)}>
      <img src={images[1].src} alt={images[1].alt} />
      <img src={images[2].src} alt={images[2].alt} />
    </button>
  </div>
</div>