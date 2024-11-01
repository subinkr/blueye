<script>
  import { Button, Modal } from "flowbite-svelte";

  export let title;
	export let images;
  let modal = false;
</script>

<Modal color="primary" {title} bind:open={modal} size='xl' outsideclose>
  {#each images as src}
    <img src={src} alt={src} />
  {/each}
</Modal>
<div class="w-full flex justify-center">
  <div class="w-full max-w-[1200px] h-[400px] flex justify-center gap-4 px-4 lg:px-20">
    <button class="w-full flex-1 relative" on:click={() => (modal = true)}>
      {#if images.length > 0}
        <img class="w-full h-full object-cover" src={images[0]} alt={images[0]} />
      {/if}
      <Button class="lg:hidden absolute right-4 bottom-4">이미지 더보기</Button>
    </button>
    <button class="hidden lg:flex w-[400px] flex-col gap-4 relative" on:click={() => (modal = true)}>
      {#if images.length > 1}
      <img class="object-cover flex-1 w-full h-[192px]" src={images[1]} alt={images[1]} />
      {/if}
      {#if images.length > 2}
      <img class="object-cover flex-1 w-full h-[192px]" src={images[2]} alt={images[2]} />
      {/if}
      <Button class="absolute right-4 bottom-4">이미지 더보기</Button>
    </button>
  </div>
</div>