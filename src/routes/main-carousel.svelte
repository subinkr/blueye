<script>
	import Carousel from "../components/carousel.svelte";
  import { AngleLeftOutline ,AngleRightOutline } from 'flowbite-svelte-icons';

	
	const images = [
    {
      alt: '두바이',
      src: '/images/dubai.png',
      title: 'dubai'
    },
    {
      alt: '캄보디아',
      src: '/images/cambodia.png',
      title: 'cambodia'
    },
    {
      alt: '중국',
      src: '/images/panorama.jpg',
      title: 'china'
    },
    {
      alt: '베트남',
      src: '/images/panorama.jpg',
      title: 'vietnam'
    },
    {
      alt: '싱가포르',
      src: '/images/panorama.jpg',
      title: 'singapore'
    },
    {
      alt: '말레이시아',
      src: '/images/panorama.jpg',
      title: 'malaysia'
    }
  ];
</script>

<Carousel autoplay="5000">
	{#each images as image, index (index)}
	  <img class="object-cover w-full h-[520px]" src={image.src} alt={image.alt} />
	{/each}
	<span class="text-white" slot="left-control"><AngleLeftOutline size="xl" strokeWidth="2" /></span>
	<span class="text-white" slot="right-control"><AngleRightOutline size="xl" strokeWidth="2" /></span>
</Carousel>