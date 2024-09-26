<script>
  import { countries } from '$lib/data/menus.ts';
  import Panel from "$lib/components/panel.svelte";
  import TitleResponsive from '$lib/components/title-responsive.svelte';
  import Working from '../lib/components/icons/working.svelte';
  import Todo from '../lib/components/icons/todo.svelte';

</script>

<div class="flex gap-2 items-center p-0">
  <div class="flex flex-col justify-center items-center">
    <TitleResponsive>블루아이는 7개 국가 9개 도시에</TitleResponsive>
    <TitleResponsive>현지 지사를 운영하고 있습니다.</TitleResponsive>
  </div>
</div>
<div class="flex flex-wrap gap-4 justify-center items-center">
  {#each countries as country}
    {#each country.child as child}
    <Panel href={child.href} img={"/images/intro/" + child.name + ".jpg"}>
      <div class="absolute left-0 bottom-0 w-full p-4 flex justify-between items-end bg-white/90 dark:bg-gray-900">
        {#if country.status === "개발중"}
          <Working />
        {/if}
        {#if country.status === "개발예정"}
          <Todo />
        {/if}
        <h3 class="text-lg font-bold md:text-xl lg:text-2xl">{child.title}</h3>
        <h3 class="text-sm text-gray-400">{country.title}</h3>
      </div>
    </Panel>
    {/each}
    {#if country.child.length === 0}
    <Panel href={country.href} img={"/images/intro/" + country.name + ".jpg"}>
      <div class="absolute left-0 bottom-0 w-full p-4 flex justify-between items-end bg-white/90 dark:bg-gray-900">
        {#if country.status === "개발중"}
          <Working />
        {/if}
        {#if country.status === "개발예정"}
          <Todo />
        {/if}
        <h3 class="text-lg font-bold md:text-xl lg:text-2xl">{country.title}</h3>
      </div>
    </Panel>
    {/if}
  {/each}
</div>