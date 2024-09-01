<script>
  import { Card } from 'flowbite-svelte';

  export let title
  export let content
</script>

<Card href="/" class="flex flex-col justify-between md:min-h-44 hover:bg-blue-800 text-black hover:text-gray-50">
    <h5 class="mb-2 text-lg font-bold tracking-tight dark:text-white sm:text-xl md:text-2xl">{title}</h5>
    <p class="font-normal text-left dark:text-gray-400 leading-tight">{content}</p>
</Card>