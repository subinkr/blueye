<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import { Hr, P } from 'flowbite-svelte';
 
  import Ceo from "./ceo.svelte";
  import Slogan from "./slogan.svelte";
  import History from "./history.svelte";
  import Business from "./business.svelte";
  import People from "./people.svelte";

  onMount(() => {
    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })
</script>

<Slogan />
<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<div id="ceo">
  <Ceo />
</div>
<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<div id="history">
  <History />
</div>
<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<div id="business">
  <Business />
</div>
<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<div id="people">
  <People />
</div>