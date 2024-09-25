<script>
  import { Marquee } from 'flowbite-svelte'
  import { fly } from 'svelte/transition';

  const headlines = [
    {title: "베트남 호치민시, 외국인 투자자 유치 위한 부동산 정책 개편", href: "/"},
    {title: "태국 방콕, 콘도미니엄 시장 과열 우려 속 정부 규제 검토", href: "/"},
    {title: "인도네시아 자카르타, 수도 이전에 따른 부동산 시장 변화 전망", href: "/"},
    {title: "싱가포르, 지속 가능한 도시 개발 위한 그린 빌딩 인센티브 확대", href: "/"},
    {title: "말레이시아 조호르 바루, 중국 투자자들의 관심 증가로 부동산 가격 상승", href: "/"},
    {title: "필리핀 마닐라, 오피스 시장 회복세... 테크 기업 수요 증가", href: "/"},
    {title: "캄보디아 시아누크빌, 카지노 리조트 개발로 부동산 시장 활기", href: "/"},
    {title: "미얀마 양곤, 정치적 불안정으로 부동산 시장 침체 지속", href: "/"},
    {title: "라오스 비엔티안, 중국의 일대일로 사업 영향으로 부동산 개발 가속화", href: "/"},
    {title: "브루나이, 석유 의존도 낮추기 위한 부동산 다각화 정책 추진", href: "/"},
  ]
</script>

<div transition:fly={{ y: -100, duration: 1000 }}
  class="z-40 fixed top-0 left-0 bg-black w-fit flex h-8 text-white font-bold sm:text-xl md:text-2xl text-center"
>
  <Marquee speed={0.3} hoverSpeed={0} class="text-sm min-w-fit">
    {#each headlines as headline}
      <a class="w-60" href={headline.href}><div class="w-[500px] whitespace-nowrap overflow-hidden text-ellipsis">{headline.title}</div></a>
    {/each}
  </Marquee>
</div>