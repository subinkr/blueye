<script>
  import { countries } from '$lib/menus.ts';
  import Panel from "../components/panel.svelte";
  import TitleResponsive from '../components/title-responsive.svelte';

  const layout = " w-72 h-72 sm:w-60 sm:h-60 flex flex-col justify-between xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-[400px] 3xl:h-[400px] border-gray-100 hover:bg-blue-900/80 text-black hover:text-gray-50 "
</script>

<div class="flex gap-2 items-center">
  <div class="flex flex-col justify-center items-center">
    <TitleResponsive>블루아이는 7개 국가 9개 도시에</TitleResponsive>
    <TitleResponsive>현지 지사를 운영하고 있습니다.</TitleResponsive>
  </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
  {#each countries as country}
    {#each country.child as child}
      <Panel {layout} img={"/images/intro/" + child.name + ".jpg"}>
        <div class="flex justify-between items-end">
          <h3 class="text-lg font-bold md:text-xl lg:text-2xl">{child.title}</h3>
          <h3 class="text-sm text-gray-400">{country.title}</h3>
        </div>
      </Panel>
      {/each}
      {#if country.child.length === 0}
      <Panel {layout} img={"/images/intro/" + country.name + ".jpg"}>
        <h3 class="text-lg font-bold md:text-xl lg:text-2xl">{country.title}</h3>
      </Panel>
    {/if}
  {/each}
</div>