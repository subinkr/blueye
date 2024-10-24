<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '$lib/components/panel.svelte';
  import { marked } from 'marked';

  export let tours;
  
</script>

<Title>투어</Title>
<div class="mt-4 flex flex-wrap gap-4 justify-center">
  {#if !tours.length}
    <div>준비중입니다.</div>
  {/if}
  {#each tours as tour}
    <Panel img={tour.image} href={"/tours/" + tour.id}>
      <div class="p-4 flex flex-col gap-4 border-gray-100 dark:border-gray-700 border-2 rounded-b-lg">
        <b>{tour.title}</b>
        <div class='prose text-center max-w-none'>{@html marked(tour?.date.split('\n').join('\n\n') ?? "")}</div>
        <div class='prose text-center max-w-none'>{@html marked(tour?.price.split('\n').join('\n\n') ?? "")}</div>
      </div>
    </Panel>
  {/each}
</div>