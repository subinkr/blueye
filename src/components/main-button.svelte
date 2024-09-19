<script>
  import { Button, Modal, Popover } from "flowbite-svelte";
  import { slide } from 'svelte/transition';

  let modal = false;
  export let keyword = '';
  export let title = '';
  export let content = '';
</script>

<Button class="w-full text-xl" on:click={() => (modal = true)}>{keyword}</Button>
<Popover class="hidden sm:block w-64 text-sm font-light z-10" placement="bottom" {title} transition={slide}>
  {content}
</Popover>
<Modal color="primary" {title} bind:open={modal} autoclose outsideclose>
  <p class="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">{content}</p>
</Modal>