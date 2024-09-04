<script>
  import Blog from "./icons/blog.svelte";
  import Facebook from "./icons/facebook.svelte";
  import Instagram from "./icons/instagram.svelte";
  import Kakaotalk from "./icons/kakaotalk.svelte";
  import Youtube from "./icons/youtube.svelte";

  export let size = "h-5"
</script>

<div class="flex gap-4 px-3">
  <a href="/"><Facebook {size} /></a>
  <a href="/"><Youtube {size} /></a>
  <a href="/"><Instagram {size} /></a>
  <a href="/"><Kakaotalk {size} /></a>
  <a href="/"><Blog {size} /></a>
</div>