<script>
	import Carousel from "../components/carousel.svelte";
  import { AngleLeftOutline ,AngleRightOutline } from 'flowbite-svelte-icons';
  import { bodyHeight } from '$lib/scroll-control.ts';

	const images = [
    {
      alt: '두바이',
      src: '/images/main/dubai.jpg',
      portrait_src: '/images/main/dubai.jpg',
      title: "꿈을 돕는 사람들 '블루아이'",
      content1: "세계 각국에서 활동하고 있는 비즈니스 국가대표들의 오랜시간 실제적인 경험과",
      content2: "해외로 진출하고 싶어하는 꿈꾸는 이들에게 깊이있는 지식과 실무경험을 제공합니다.",
      color: "text-white"
    },
    {
      alt: '싱가포르',
      src: '/images/main/singapore.jpg',
      portrait_src: '/images/main/singapore.jpg',
      title: "풍요로운 아시아 라이프",
      content1: "아시아에서 생활하며 교육, 부동산, 비즈니스 등 아시아로 이주하거나",
      content2: "그 지역에서 기회를 찾는 사람들을 위한 정보와 인사이트를 제공합니다.",
      color: "text-white"
    },
    {
      alt: '호치민',
      src: '/images/main/ho-chi-minh-city.jpg',
      portrait_src: '/images/main/ho-chi-minh-city.jpg',
      title: "Global Real Estate Academy",
      content1: "글로벌 부동산 전문 지식과 실무 능력을 제공하여 글로벌 시장에서 경쟁력을 갖출 수 있도록",
      content2: "비즈니스 네트워킹 기회와 국제적인 협력을 통해 지속적인 성공을 이끌어 갑니다.",
      color: "text-black"
    },
  ];
</script>

<div class="w-full hidden sm:block">
  <Carousel autoplay="10000">
  {#each images as image, index (index)}
      <a class="relative" href="/">
        <img class={"w-full object-cover " + $bodyHeight} src={image.src} alt={image.alt} />
        <div class={"absolute top-40 right-40 max-w-[1200px] text-right flex flex-col gap-10 " + image.color}>
          <div class="text-7xl font-extrabold">{image.title}</div>
          <div>
            <div class="text-3xl">{image.content1}</div>
            <div class="text-3xl">{image.content2}</div>
          </div>
        </div>
      </a>
    {/each}
    <span class="text-white" slot="left-control"><AngleLeftOutline size="xl" strokeWidth="2" /></span>
    <span class="text-white" slot="right-control"><AngleRightOutline size="xl" strokeWidth="2" /></span>
  </Carousel>
</div>

<div class="w-full block sm:hidden">
  <Carousel autoplay="5000">
  {#each images as image, index (index)}
      <a href="/"><img class="w-full" src={image.portrait_src} alt={image.alt} /></a>
    {/each}
    <span class="text-white" slot="left-control"><AngleLeftOutline size="xl" strokeWidth="2" /></span>
    <span class="text-white" slot="right-control"><AngleRightOutline size="xl" strokeWidth="2" /></span>
  </Carousel>
</div>