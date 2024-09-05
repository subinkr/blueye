<script>
  import { Card } from 'flowbite-svelte';

  export let img = null
  export let horizontal = false
  export let reverse = false
  export let layout = ""
  export let imgClass = ""
</script>

<Card color="gray" shadow={false} {img} {reverse} {horizontal} href="/" imgClass={"object-cover flex-1" + imgClass} class={layout}>
 <slot />
</Card>