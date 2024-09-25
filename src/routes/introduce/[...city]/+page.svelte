<script>
  import Title from '$lib/components/title.svelte';
  import Panel from '../../../lib/components/panel.svelte';

  export let data;
</script>

<div class="w-full p-20">
  <Title>부동산</Title>
  {#each data.house as house}
    <Panel img={house.image} href={house.href}>
      <div>{house.title}</div>
    </Panel>
  {/each}
</div>