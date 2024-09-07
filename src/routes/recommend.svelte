<script>

  import { Heading } from "flowbite-svelte";
  import Panel from "../components/panel.svelte";

  const layout = " text-gray-50 border-gray-100 bg-gray-900/40 hover:bg-blue-900/80 hover:font-bold w-72 sm:w-60 xl:w-72 2xl:w-80 hover:sm:w-[800px] hover:lg:w-60 hover:xl:w-72 hover:2xl:w-80 "
  let src = ""
  let position = ""

  const data = [
    {
      src: "/images/recommend/dubai-recommend.jpg",
      title: "슈퍼리치 '두바이'"
    },
    {
      src: "/images/recommend/hanoi-recommend.jpg",
      title: "빠른변화와 성장 '하노이'"
    },
    {
      src: "/images/recommend/cambodia-recommend.jpg",
      title: "동남아 숨은 보석 '프놈펜'"
    },
    {
      src: "/images/recommend/malaysia-recommend.jpg",
      title: "싱가포르와 연결된 '조호바루'"
    }
  ]
</script>
<div class="my-20 w-full flex flex-col gap-4 items-center text-center">
  <img class={"hidden lg:block fixed h-screen top-0 " + position} {src} alt="" />
  <div class="flex gap-2">
    <div>|</div>
    <Heading tag="h2" class="text-black dark:text-white whitespace-nowrap" customSize="text-base font-extrabold sm:text-lg md:text-xl lg:text-2xl">블루아이 고객에게 딱 맞는 추천상품</Heading>
    <div>|</div>
  </div>
  <article class="w-full flex flex-col lg:flex-row gap-4 justify-center items-center" on:mouseleave={(e) => src = ""}>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {#each data.slice(0,2) as board}
      <article class="text-sm lg:text-base xl:text-lg 2xl:text-2xl hover:sm:text-lg hover:lg:text-base hover:xl:text-lg hover:2xl:text-2xl " on:mouseenter={(e) => { src = board.src; position = " right-0 " }}>
        <Panel reverse={true} {layout} img={board.src}>
          <div class="h-full flex flex-col justify-between">
            <h3 class="whitespace-nowrap">{board.title}</h3>
          </div>
        </Panel>
      </article>
    {/each}
    </div>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {#each data.slice(2,4) as board}
      <article class="text-sm lg:text-base xl:text-lg 2xl:text-2xl hover:sm:text-lg hover:lg:text-base hover:xl:text-lg hover:2xl:text-2xl " on:mouseenter={(e) => { src = board.src; position = " left-0 " }}>
        <Panel reverse={true} {layout} img={board.src}>
          <div class="h-full flex flex-col justify-between">
            <h3 class="whitespace-nowrap">{board.title}</h3>
          </div>
        </Panel>
      </article>
    {/each}
    </div>
  </article>
</div>
