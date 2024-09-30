<script>
  import { Modal } from "flowbite-svelte";

  export let title;
	export let images;
  let modal = false;
</script>

<Modal color="primary" {title} bind:open={modal} autoclose outsideclose>
  {#each images as src}
    <img {src} alt={src} />
  {/each}
</Modal>
<div class="w-full flex justify-center">
  <div class="max-w-[1200px] flex justify-center gap-4 px-4 lg:px-20">
    <button class="flex-1"  on:click={() => (modal = true)}>
      <img class="w-full h-full object-cover" src={images[0]} alt={images[0]} />
    </button>
    <button class="hidden lg:flex w-[400px] flex-col gap-4" on:click={() => (modal = true)}>
      <img src={images[1]} alt={images[1]} />
      <img src={images[2]} alt={images[2]} />
    </button>
  </div>
</div>