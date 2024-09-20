<script>
	import Carousel from "../../components/carousel.svelte";
  import { bodyHeight } from '$lib/scroll-controls/index.ts';

  const title = "R&F Princess Cove 2nd & 3rd Phase (2/3차 분양)";
	const images = [
    {
      alt: '1',
      src: '/images/malaysia/rnf/1.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title: title,
    },
    {
      alt: '2',
      src: '/images/malaysia/rnf/2.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title: title,
    },
    {
      alt: '3',
      src: '/images/malaysia/rnf/3.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title: title,
    },
    {
      alt: '4',
      src: '/images/malaysia/rnf/4.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title: title,
    },
  ];
</script>

<Carousel autoplay="3000">
    {#each images as image, index (index)}
        <img class={"w-full object-cover "} src={image.src} alt={image.alt} />
    {/each}
</Carousel>