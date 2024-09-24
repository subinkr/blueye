<script>
  import { Modal } from "flowbite-svelte";

  const title = "R&F Princess Cove 2nd & 3rd Phase (2/3차 분양)";
	const images = [
    {
      alt: '1',
      src: '/images/malaysia/rnf/1.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title,
    },
    {
      alt: '2',
      src: '/images/malaysia/rnf/2.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title,
    },
    {
      alt: '3',
      src: '/images/malaysia/rnf/3.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title,
    },
    {
      alt: '4',
      src: '/images/malaysia/rnf/4.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title,
    },
  ];
  let modal = false;
</script>

<Modal color="primary" {title} bind:open={modal} autoclose outsideclose>
  {#each images as image}
    <img src={image.src} alt={image.alt} />
  {/each}
</Modal>
<div class="flex gap-4 px-4 lg:px-20">
  <button class="flex-1"  on:click={() => (modal = true)}>
    <img class="w-full h-full object-cover" src={images[0].src} alt={images[0].alt} />
  </button>
  <button class="hidden lg:flex w-[400px] flex-col gap-4" on:click={() => (modal = true)}>
    <img src={images[1].src} alt={images[1].alt} />
    <img src={images[2].src} alt={images[2].alt} />
  </button>
</div>
<!-- 
{#each images as image, index (index)}
  <img class={"w-full object-cover "} src={image.src} alt={image.alt} />
{/each} -->