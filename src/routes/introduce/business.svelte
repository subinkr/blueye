<script>
  import { Heading } from "flowbite-svelte";
  import Panel from "../../components/panel.svelte";

const layout = " w-full h-40 flex flex-col justify-between gap-4 border-gray-100 hover:bg-blue-900/80 text-black hover:text-gray-50 "

  const solutions = [
    {title: "재테크 솔루션", content: "아시아 6개국의 자산관리 포트폴리오를 제공한다."},
    {title: "교육 솔루션", content: "재외국민 자녀들을 위한 맞춤형 특례입시 전략을 지원한다."},
    {title: "기업 솔루션", content: "동남아시아 진출 계획이 있는 기업, 창업을 준비하는 자영업자들을 돕는다."},
    {title: "문화 솔루션", content: "일상의 특별한 기록 블루아이 문화투어."},
    {title: "스타트업 솔루션", content: "베트남에 투자 진출을 희망하는 벤처 기업 및 자영업자와 협력한다."},
    {title: "미디어 솔루션", content: "교육과 라이프의 균형을 잡아줄 아시아 유일의 교육종합 매거진을 발간한다."},
  ]
</script>

<div class="w-full px-8 min-h-[60vh] mb-8 md:mb-0 flex flex-col justify-center gap-4">
  <Heading tag="h2" class="mb-4" customSize="text-xl font-extrabold text-center sm:text-2xl md:text-3xl">사업영역</Heading>
  <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4">
    {#each solutions.slice(0,3) as solution}
    <Panel {layout}>
      <p class="text-xl font-semibold text-center">{solution.title}</p>
      <p class="flex-1 justify-start">{solution.content}</p>
    </Panel>
    {/each}
  </div>
  <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4">
    {#each solutions.slice(3,6) as solution}
    <Panel {layout}>
      <p class="text-xl font-semibold text-center">{solution.title}</p>
      <p class="flex-1 justify-start">{solution.content}</p>
    </Panel>
    {/each}
  </div>
</div>