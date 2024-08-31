<script>
  import { Heading } from "flowbite-svelte";
  import Panel from "../components/panel.svelte";
  import {scrollY, mainScreenHeight, blueye6DivisionHeight} from "$lib/scroll-control.ts"
  import { fly } from "svelte/transition";
</script>

<div class="w-full ml-4 mr-4 mt-8 min-h-[60vh] mb-8 md:mb-0 flex flex-col gap-4">
  {#if $scrollY >= $mainScreenHeight / 3}
  <div transition:fly={{ y: 100, duration: 1000 }} >
    <Heading tag="h2" class="mb-4" customSize="text-xl font-extrabold sm:text-2xl md:text-3xl">Blueye 6 core business division</Heading>
  </div>
  {/if}
  {#if $scrollY >= $mainScreenHeight / 2}
  <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4" transition:fly={{ y: 100, duration: 1000 }}>
    <Panel title={"재테크 솔루션"} content={"아시아 6개국의 포트폴리오 투자를 지원한다."} />
    <Panel title={"교육 솔루션"} content={"재외국민 자녀들을 위한 맞춤형 특례입시 전략을 지원한다."} />
    <Panel title={"기업 솔루션"} content={"동남아시아 진출 계획이 있는 기업, 창업을 준비하는 자영업자들을 돕는다."} />
  </div>
  {/if}
  {#if $scrollY >= $mainScreenHeight * 2 / 3}
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4" transition:fly={{ y: 100, duration: 1000 }}>
      <Panel title={"문화 솔루션"} content={"범 아시아를 아우르는 블루아이의 문화를 경험하고 적용할 수 있도록 돕는다."} />
      <Panel title={"스타트업 협력 솔루션"} content={"베트남에 투자 진출을 희망하는 벤처 기업 및 자영업자와 협력한다."} />
      <Panel title={"미디어 솔루션"} content={"아시아 라이프 매거진을 발간한다, 에듀뉴스 아시아 & 더 리치(The Litchi)"} />
    </div>
  {/if}
</div>