<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
  import ButtonMain from '$lib/components/button-main.svelte'
  import Title from '$lib/components/title.svelte';

  const benefits = [
    {
      title: "네트워킹", 
      content: "업계 전문가와의 관계를 형성하는 기회로, 새로운 정보와 협력 가능성을 모색하는 중요한 활동입니다.",
      images: [
        "/images/benefits/networking/1.jpg",
        "/images/benefits/networking/2.jpg",
        "/images/benefits/networking/3.jpg",
        "/images/benefits/networking/4.jpg",
        "/images/benefits/networking/5.jpg",
        "/images/benefits/networking/6.jpg",
        "/images/benefits/networking/7.jpg",
        "/images/benefits/networking/8.jpg",
        "/images/benefits/networking/9.jpg",
      ]
    },
    {
      title: "부동산 투어", 
      content: "다양한 부동산 현장을 직접 체험하는 프로그램으로, 투자 결정에 필요한 정보를 제공합니다.",
      images: [
        "/images/benefits/tour/1.jpg",
        "/images/benefits/tour/2.jpg",
        "/images/benefits/tour/3.jpg",
        "/images/benefits/tour/4.jpg",
        "/images/benefits/tour/5.jpg",
        "/images/benefits/tour/6.jpg",
        "/images/benefits/tour/7.jpg",
        "/images/benefits/tour/8.jpg",
        "/images/benefits/tour/9.jpg",
        "/images/benefits/tour/10.jpg",
      ]
    },
    {
      title: "한달살기", 
      content: "특정 지역에서 한 달 동안 생활하며 그곳의 부동산 시장과 문화를 이해하는 프로그램입니다.",
      images: [
        "/images/benefits/trip/1.jpg",
        "/images/benefits/trip/2.jpg",
        "/images/benefits/trip/3.jpg",
        "/images/benefits/trip/4.jpg",
        "/images/benefits/trip/5.jpg",
        "/images/benefits/trip/6.jpg",
        "/images/benefits/trip/7.jpg",
        "/images/benefits/trip/8.jpg",
      ]
    },
    {
      title: "비즈니스 컨설팅", 
      content: "기업의 성장과 문제 해결을 위한 전문적 조언을 제공하며, 효과적인 전략 수립을 지원합니다.",
      images: [
        "/images/benefits/business/1.jpg",
        "/images/benefits/business/2.jpg",
        "/images/benefits/business/3.jpg",
        "/images/benefits/business/4.jpg",
        "/images/benefits/business/5.jpg",
        "/images/benefits/business/6.jpg",
        "/images/benefits/business/7.jpg",
        "/images/benefits/business/8.jpg",
        "/images/benefits/business/9.jpg",
      ]
    },
    {
      title: "소식지",
      content: "The Litchi, 베한타임즈 등 다양한 소식지를 발행중입니다.",
      images: [
        "/images/benefits/magazine/3.jpg",
        "/images/benefits/magazine/4.jpg",
        "/images/benefits/magazine/5.jpg",
        "/images/benefits/magazine/6.jpg",
        "/images/benefits/magazine/7.jpg",
        "/images/benefits/magazine/8.jpg",
        "/images/benefits/magazine/9.jpg",
        "/images/benefits/magazine/10.jpg",
        "/images/benefits/magazine/11.jpg",
        "/images/benefits/magazine/12.jpg",
        "/images/benefits/magazine/13.jpg",
        "/images/benefits/magazine/14.jpg",
        "/images/benefits/magazine/15.jpg",
        "/images/benefits/magazine/16.jpg",
        "/images/benefits/magazine/17.jpg",
        "/images/benefits/magazine/18.jpg",
      ]
    },
  ]
</script>

<Title>블루아이 고객이 받는 혜택</Title>
<div class="sm:hidden w-full flex flex-col justify-center items-center gap-4">
  {#each benefits as benefit}
  <div class="w-[260px]">
    <ButtonMain {...benefit}>
      <div class="text-center flex gap-4 justify-center items-center flex-wrap p-4">
        {#each benefit.images as image}
          <img class="object-cover h-[300px]" src={image} alt="" />
        {/each}
      </div>
    </ButtonMain>
  </div>
  {/each}
</div>
<div class="hidden sm:block">
  <Tabs contentClass="bg-inherit" tabStyle="underline">
    {#each benefits as benefit}
    <TabItem open title={benefit.title}>
      <div class="bg-gray-100 dark:bg-gray-700 p-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <b>{benefit.title}:</b>
          {benefit.content}
        </p>
      </div>
      <div class="text-center flex gap-4 justify-center items-center flex-wrap p-4">
        {#each benefit.images as image}
          <img class="object-cover h-[300px]" src={image} alt="" />
        {/each}
      </div>
    </TabItem>
    {/each}
    <!-- <TabItem disabled></TabItem> -->
  </Tabs>
</div>