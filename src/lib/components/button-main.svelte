<script>
  import { Button, Modal, Popover } from "flowbite-svelte";
  import { slide } from 'svelte/transition';

  let modal = false;
  export let title = '';
</script>

<Button class="w-full text-xl" on:click={() => (modal = true)}>{title}</Button>
<Popover class="hidden sm:block w-64 text-sm font-light z-10" placement="bottom" {title} transition={slide}>
  <slot />
</Popover>
<Modal color="primary" {title} bind:open={modal} autoclose outsideclose>
  <slot />
</Modal>