<script>
  import {countries} from "$lib/data/menus.ts"
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    data = countries[0]
  })

</script>

<div>
  <div>{data.title}</div>
  <!-- <div>{data. child[0].title}</div> -->
</div>