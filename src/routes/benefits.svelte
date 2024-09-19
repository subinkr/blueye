<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<h2 class="text-black text-center dark:text-white text-3xl font-extrabold">블루아이 고객만이 받는 혜택</h2>
<div>
  <Tabs tabStyle="underline">
    <TabItem open title="더리치 매거진">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>더리치 매거진:</b>
        부동산과 경제 동향을 다루는 매거진으로, 성공적인 투자 전략과 사례를 공유합니다.
      </p>
    </TabItem>
    <TabItem title="네트워킹">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>네트워킹:</b>
        업계 전문가와의 관계를 형성하는 기회로, 새로운 정보와 협력 가능성을 모색하는 중요한 활동입니다.
      </p>
    </TabItem>
    <TabItem title="부동산 투어">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>부동산 투어:</b>
        다양한 부동산 현장을 직접 체험하는 프로그램으로, 투자 결정에 필요한 정보를 제공합니다.
      </p>
    </TabItem>
    <TabItem title="한달살기">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>한달살기:</b>
        특정 지역에서 한 달 동안 생활하며 그곳의 부동산 시장과 문화를 이해하는 프로그램입니다.
      </p>
    </TabItem>
    <TabItem title="비즈니스 컨설팅">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>비즈니스 컨설팅:</b>
        기업의 성장과 문제 해결을 위한 전문적 조언을 제공하며, 효과적인 전략 수립을 지원합니다.
      </p>
    </TabItem>
    <!-- <TabItem disabled></TabItem> -->
  </Tabs>
</div>