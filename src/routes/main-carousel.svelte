<script>
	import Carousel from "$lib/components/carousel.svelte";
  import { AngleLeftOutline ,AngleRightOutline } from 'flowbite-svelte-icons';

	const images = [
    {
      alt: '두바이',
      src: '/images/main/blueye.jpg',
      // portrait_src: '/images/main/dubai.jpg',
      title: " 해외 부동산 자산관리, 블루아이와 함께라면 23년 노하우가 당신의 것입니다.",
      content: "30,000건의 매매 거래로 증명된 신뢰와 전문성 3,500명의 고객이 증명한 성공적인 해외 자산 관리 파트너",
      content1: "30,000건의 매매 거래로 증명된 신뢰와 전문성",
      content2: "3,500명의 고객이 증명한 성공적인 해외 자산 관리 파트너",
      textColor: " text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
    },
  ];
</script>

<Carousel>
  {#each images as image, index (index)}
    <a class={"w-full h-full relative"} href="/">
      <div class={"w-full z-10 py-32 absolute lg:right-20 text-center lg:text-right flex flex-col lg:items-end gap-10 " + image.textColor}>
        <div class="w-screen lg:max-w-[50vw] text-xl lg:text-4xl font-extrabold">{image.title}</div>
        <div class="hidden sm:block">
          <div class="w-screen text-sm lg:text-xl">{image.content1}</div>
          <div class="w-screen text-sm lg:text-xl">{image.content2}</div>
        </div>
        <div class="w-screen sm:hidden text-left px-4">
          <div class="text-sm lg:text-xl">{image.content}</div>
        </div>
      </div>
      <img class={"w-full object-cover h-full min-h-[480px]"} src={image.src} alt={image.alt} />
    </a>
  {/each}
</Carousel>

<!-- <div class="w-full">
  <Carousel autoplay="10000">
  {#each images as image, index (index)}
      <a class={"w-full h-full relative"} href="/">
        <div class={"px-4 w-screen z-10 absolute top-32 left-0 sm:top-40 lg:right-40 lg:left-auto max-w-[1400px] text-center lg:text-right flex flex-col gap-10 " + image.textColor}>
          <div class="text-xl lg:text-5xl font-extrabold">{image.title}</div>
          <div class="hidden sm:block">
            <div class="text-sm lg:text-xl">{image.content1}</div>
            <div class="text-sm lg:text-xl">{image.content2}</div>http://localhost:5173/
          </div>
          <div class="sm:hidden text-left px-4">
            <div class="text-sm lg:text-xl">{image.content}</div>
          </div>
        </div>
        <img class={"w-full object-cover " + $bodyHeight} src={image.src} alt={image.alt} />
      </a>
    {/each}
    <span class="text-white" slot="left-control"><AngleLeftOutline size="xl" strokeWidth="2" /></span>
    <span class="text-white" slot="right-control"><AngleRightOutline size="xl" strokeWidth="2" /></span>
  </Carousel>
</div> -->