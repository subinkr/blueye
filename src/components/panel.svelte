<script>
  import { Card } from 'flowbite-svelte';

  export let title
  export let content = ""
  export let img = null
</script>

<Card color="gray" shadow={false} {img} href="/" imgClass="object-cover flex-1" class=" border-gray-100 w-72 h-72 sm:w-60 sm:h-60 flex flex-col justify-between xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 3xl:w-[400px] 3xl:h-[400px] hover:bg-blue-900/80 text-black hover:text-gray-50">
  {#if content.length > 0}<p class="font-normal text-left dark:text-gray-400 leading-tight">{content}</p>{/if}
  <h3 class="whitespace-nowrap text-lg font-extrabold md:text-xl lg:text-2xl">{title}</h3>
</Card>