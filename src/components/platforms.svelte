<script>
  import Blog from "./icons/blog.svelte";
  import Facebook from "./icons/facebook.svelte";
  import Instagram from "./icons/instagram.svelte";
  import Kakaotalk from "./icons/kakaotalk.svelte";
  import Youtube from "./icons/youtube.svelte";

  export let size = "h-5"
</script>

<div class="flex gap-4 px-3">
  <a href="https://www.facebook.com/people/%EC%BA%84%EB%B3%B4%EB%94%94%EC%95%84%EB%B6%80%EB%8F%99%EC%82%B0/61552301821807/?mibextid=LQQJ4d"><Facebook {size} /></a>
  <a href="/"><Youtube {size} /></a>
  <a href="/"><Instagram {size} /></a>
  <a href="/"><Kakaotalk {size} /></a>
  <a href="/"><Blog {size} /></a>
</div>