<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';
 
  import Ceo from "./ceo.svelte";
  import Slogan from "./slogan.svelte";
  import History from "./history.svelte";
  import HorizonSeparator from "../../components/icons/horizon-separator.svelte";
  import Business from "./business.svelte";
  import People from "./people.svelte";

  onMount(() => {
    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })
</script>

<Slogan />
<HorizonSeparator />
<div id="ceo">
  <Ceo />
</div>
<HorizonSeparator />
<div id="history">
  <History />
</div>
<HorizonSeparator />
<div id="business">
  <Business />
</div>
<HorizonSeparator />
<div id="people">
  <People />
</div>