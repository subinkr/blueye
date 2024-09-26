<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '$lib/components/panel.svelte';

  export let trips;
</script>

<Title>한달살기</Title>
<div class="mt-4 flex flex-wrap gap-4 justify-center">
  {#if !trips.length}
    <div>준비중입니다.</div>
  {/if}
  {#each trips as trip}
    <Panel img={trip.image} href={"/trip/" + trip.id}>
      <div class="p-4 flex flex-col gap-4 border-gray-100 border-2 rounded-b-lg">
        <b>{trip.title}</b>
        <div class="text-center">{trip.date}</div>
        <div class="text-center text-lg">{trip.price}</div>
        <div class="text-xs text-gray-300">{trip.detail}</div>
      </div>
    </Panel>
  {/each}
</div>