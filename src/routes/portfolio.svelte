<script>

  import { Heading } from "flowbite-svelte";
  import Panel from "../components/panel.svelte";

  const layout = " w-72 h-72 sm:w-60 sm:h-60 flex flex-col justify-between xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-[400px] 3xl:h-[400px] border-gray-100 hover:bg-blue-900/80 text-black hover:text-gray-50 "
</script>

<div class="flex gap-2 items-center">
  <div class="flex flex-col justify-center items-center">
    <h2 class="text-black dark:text-white text-base font-extrabold md:text-2xl lg:text-3xl">블루아이는 7개 국가 10개 도시에</h2>
    <h2 class="text-black dark:text-white text-base font-extrabold md:text-2xl lg:text-3xl">현지 지사를 운영하고 있습니다</h2>
  </div>
</div>
<div class="flex flex-col lg:flex-row gap-4 justify-center items-center">
  <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Panel {layout} img="/images/intro/shanghai.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Shanghai</h3>
    </Panel>
    <Panel {layout} img="/images/intro/dubai.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Dubai</h3>
    </Panel>
  </div>
  <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Panel {layout} img="/images/intro/ho-chi-minh-city.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Ho Chi Minh City</h3>
    </Panel>
    <Panel {layout} img="/images/intro/hanoi.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Hanoi</h3>
    </Panel>
  </div>
</div>
<div class="flex flex-col lg:flex-row gap-4 justify-center items-center">
  <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Panel {layout} img="/images/intro/cambodia.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Cambodia</h3>
    </Panel>
    <Panel {layout} img="/images/intro/singapore.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Singapore</h3>
    </Panel>
  </div>
  <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Panel {layout} img="/images/intro/malaysia.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">Malaysia</h3>
    </Panel>
    <Panel {layout} img="/images/intro/south-korea.jpg">
      <h3 class="text-lg font-bold md:text-xl lg:text-2xl">South korea</h3>
    </Panel>
  </div>
</div>