<script>
  import { countries } from '$lib/data/menus.ts';
  import Panel from "$lib/components/panel.svelte";
  import TitleResponsive from '$lib/components/title-responsive.svelte';

</script>

<div class="flex gap-2 items-center pt-12">
  <div class="flex flex-col justify-center items-center">
    <TitleResponsive>블루아이는 7개 국가 9개 도시에</TitleResponsive>
    <TitleResponsive>현지 지사를 운영하고 있습니다.</TitleResponsive>
  </div>
</div>
<div class="max-w-[800px] flex flex-wrap gap-4 justify-center items-center pb-12">
  {#each countries as country}
    {#each country.child as child}
    <Panel href={child.href} img={"/images/intro/" + child.name + ".jpg"}>
      <div class="absolute left-0 bottom-0 w-full p-4 flex justify-between items-end bg-white dark:bg-gray-900">
        <h3 class="text-lg font-bold md:text-xl lg:text-2xl">{child.title}</h3>
        <h3 class="text-sm text-gray-400">{country.title}</h3>
      </div>
    </Panel>
    {/each}
  {/each}
</div>