<script>
  import { Card } from 'flowbite-svelte';

  export let img = null
  export let horizontal = false
  export let reverse = false
  export let imgClass = ""
  export let href = ""
</script>

<Card color="gray" {img} shadow={false} {reverse} {horizontal} {href} imgClass={"object-cover " + imgClass} class="hover:cursor-pointer relative w-60 h-60 flex flex-col justify-between border-gray-100 text-black hover:shadow-xl">
  <slot />
</Card>