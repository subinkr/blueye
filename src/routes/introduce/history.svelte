<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
  import { Heading } from "flowbite-svelte";

  const history = [
    {date: 2024, title: "교육 콘텐츠 지속 강화", detail: [
      "에듀아시아 2호 발행"
    ]},
    {date: 2023, title: "동남아 진출 및 교육 콘텐츠 확대", detail: [
      "베트남 호치민 아시아센터 오픈",
      "에듀아시아 매거진 창간 준비호 발행"
    ]},
    {date: 2022, title: "서울센터 이전 및 콘텐츠 확장", detail: [
      "강남 논현으로 서울글로벌센터 이전",
      "아시아 라이프 웹진 더리치 1호 발행"
    ]},
    {date: 2021, title: "중국 거점 확보 및 인재 육성", detail: [
      "상하이 본사센터 오픈",
      "블루캠퍼스 운영"
    ]},
    {date: 2020, title: "국내 글로벌 지원 확대", detail: [
      "영등포 서울글로벌센터 오픈"
    ]},
    {date: 2019, title: "글로벌 진출 및 디지털 혁신​", detail: [
      "해외 사업본부(말레이시아, 싱가포르) 출범",
      "온라인팀 신설",
      "한국 지사, 칭다오 지사, 캄보디아 프놈펜 지사, 베트남 호치민 지사 설립"
    ]},
    {date: 2015, title: "성장 촉진 및 기회 발굴​", detail: [
      "전략기획실, 시장개발팀 신설"
    ]},
    {date: 2014, title: "상하이 따행프 프로젝트", detail: []},
    {date: 2012, title: "중국 서안 꿈드림 프로젝트", detail: []},
    {date: 2006, title: "중국 내 시장 확대", detail: [
      "상하이 푸동점, 루자주이점, 산린엑스포점, 구베이점, 홍췐루점 운영"
    ]},
    {date: 2002, title: "현지 부동산 시장 진출", detail: [
      "상하이 푸동 코리아부동산 설립"
    ]},
  ]
</script>

<div class="w-full flex flex-col items-center justify-center p-4 gap-4">
  <Heading tag="h2" class="mb-4" customSize="text-xl font-extrabold text-center sm:text-2xl md:text-3xl">주요연혁</Heading>
  <Timeline>
    {#each history as data}
      <TimelineItem title={data.title} date={data.date}>
        {#each data.detail as detail}
          <p class="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">{detail}</p>
        {/each}
      </TimelineItem>
    {/each}
  </Timeline>
</div>