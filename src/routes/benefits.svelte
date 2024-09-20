<script>
  import { Tabs, TabItem, Button } from 'flowbite-svelte';
  import MainButton from '../components/main-button.svelte'
  import Title from '../components/title.svelte';

  const benefits = [
    {title: "더리치 매거진", content: "부동산과 경제 동향을 다루는 매거진으로, 성공적인 투자 전략과 사례를 공유합니다."},
    {title: "네트워킹", content: "업계 전문가와의 관계를 형성하는 기회로, 새로운 정보와 협력 가능성을 모색하는 중요한 활동입니다."},
    {title: "부동산 투어", content: "다양한 부동산 현장을 직접 체험하는 프로그램으로, 투자 결정에 필요한 정보를 제공합니다."},
    {title: "한달살기", content: "특정 지역에서 한 달 동안 생활하며 그곳의 부동산 시장과 문화를 이해하는 프로그램입니다."},
    {title: "비즈니스 컨설팅", content: "기업의 성장과 문제 해결을 위한 전문적 조언을 제공하며, 효과적인 전략 수립을 지원합니다."},
  ]
</script>

<Title>블루아이 고객만이 받는 혜택</Title>
<div class="sm:hidden w-full flex flex-col justify-center items-center gap-4">
  {#each benefits as benefit}
  <div class="w-[260px]">
    <MainButton {...benefit} />
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
      <div class="text-center flex justify-center items-center h-80">{benefit.title} 컨텐츠 준비중입니다.</div>
    </TabItem>
    {/each}
    <!-- <TabItem disabled></TabItem> -->
  </Tabs>
</div>