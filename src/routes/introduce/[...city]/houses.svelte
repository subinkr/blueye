<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '$lib/components/panel.svelte';

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
        <div class="text-center">{house.date}</div>
        <div class="text-center text-lg">{house.price}</div>
        <div class="text-xs text-gray-300">{house.location}</div>
      </div>
    </Panel>
  {/each}
</div>