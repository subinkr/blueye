<script>
  import { Card } from 'flowbite-svelte';

  export let img = null
  export let horizontal = false
  export let reverse = false
  export let layout = ""
  export let imgClass = ""
  export let href = ""
</script>

<Card color="gray" {img} shadow={false} {reverse} {horizontal} {href} imgClass={"object-cover flex-1 " + imgClass} class={layout}>
 <slot />
</Card>