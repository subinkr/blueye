<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';
 
  import Ceo from "./ceo.svelte";
  import Slogan from "./slogan.svelte";
  import History from "./history.svelte";

  onMount(() => {

    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })
</script>

<Slogan />
<div id="ceo">
  <Ceo />
</div>
<div id="history">
  <History />
</div>