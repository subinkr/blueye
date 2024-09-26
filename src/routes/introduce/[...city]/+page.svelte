<script>
  import Houses from './houses.svelte';
  import Trips from './trips.svelte';

  export let data;
</script>

<div id="houses" class="w-full sm:px-20 py-8">
  <Houses houses={data.houses} />
</div>
<div id="trips" class="w-full sm:px-20 py-8">
  <Trips trips={data.trips} />
</div>