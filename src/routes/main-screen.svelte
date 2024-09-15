<script>
  import { Heading } from 'flowbite-svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import MainButton from './main-button.svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });

  function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.05);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
  }

</script>

<div class="relative h-[320px] w-full">
  <img class='absolute inset-0 w-full h-full object-cover object-center' alt="블루아이 배경화면" src="/images/main/dubai.jpg" />
  <div class="w-full flex flex-col justify-center items-center text-center absolute h-[320px] bg-white/80 dark:bg-black/80">
    <div class="mt-12 h-full flex flex-col justify-center items-center">
      <p class="w-[80vw] text-black dark:text-white text-wrap text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl ">왜 수많은 교민들이 <span class="text-blue-600">블루아이</span>를 선택했을까요?</p>
      <!-- <Heading tag="h2" class="w-[80vw] text-black dark:text-white text-wrap" customSize="text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl ">해외 부동산 관리 기업</Heading>
      <Heading tag="h1" class="w-[80vw] mt-12 text-black dark:text-white" customSize="text-3xl sm:text-4xl font-extrabold md:text-5xl lg:text-6xl ">블루아이</Heading> -->
    </div>
    <div class="mb-12 h-full flex flex-col justify-center items-center">
      {#if visible}
        <p class="w-[80vw] text-left sm:text-lg lg:text-xl sm:px-16 xl:px-48 text-black dark:text-white" transition:typewriter>
          삶의 중요한 결정을 믿고 맡길 수 있기 때문입니다. 블루아이는 광고보다 고객님의 추천으로 성장해왔습니다. 중국 부동산 시장을 개척한 1세대 기업으로서, 수많은 투자 성공 신화를 만들어왔습니다. 지인에게 자신 있게 소개할 수 있는 부동산 회사라는 사실이 참 뿌듯합니다.
          <!-- <P class="px-12 sm:text-lg lg:text-xl sm:px-16 md:px-48 text-black dark:text-white">블루아이는 상품의 가치(안정성과 수익성) 뿐만 아니라 프로젝트 완료 후에도 끝까지 고객님들의 상품을 관리하고 재판매를 이어온 부동산 브랜드입니다.</P>
          <P class="px-12 sm:text-lg lg:text-xl sm:px-16 md:px-48 text-black dark:text-white">지속적 수익 창출이 가능한 비즈니스 모델을 만들어가고 있습니다.</P> -->
        </p>
      {/if}
    </div>
  
    <!-- {#if visible}  
      <div in:fly={{ y: 100, duration: 1000 }} out:fade class="h-32 flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-40 justify-center items-center">
        <MainButton keyword={"글로벌 부동산"} title={"6개국 매물 보유"} content={"각 국가의 블루아이 지사를 통해 전문 매니저와 상담을 진행하고 해당 국가의 부동산에 투자해보세요."} />
        <MainButton keyword={"검증된 사업자"} title={"Since 2002"} content={"2002년 탄생한 블루아이는 지속적으로 찾아주시는 고객님들 덕에 꾸준히 성장하고 있어요."} />
        <MainButton keyword={"누적된 노하우"} title={"1만 채 이상 판매"} content={"수많은 거래를 성사시킨 블루아이만의 경험을 바탕으로 고객님들의 성공적인 투자를 지원하고 있어요."} />
      </div>
    {:else}
      <div class="h-32"></div>
    {/if} -->
  </div>
</div>