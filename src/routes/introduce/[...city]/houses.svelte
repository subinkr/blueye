<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '$lib/components/panel.svelte';
  import { marked } from 'marked';

  export let houses;
</script>

<Title>부동산</Title>
<div class="mt-4 flex flex-wrap gap-4 justify-center">
  {#if !houses.length}
    <div>준비중입니다.</div>
  {/if}
  {#each houses as house}
    <Panel img={house.image} href={"/house/" + house.id}>
      <div class="p-4 flex flex-col gap-4 border-gray-100 dark:border-gray-700 border-2 rounded-b-lg">
        <b>{house.title}</b>
        <div>{@html marked(house?.date ?? "")}</div>
        <div class="text-center text-lg">{house.price}</div>
      </div>
    </Panel>
  {/each}
</div>