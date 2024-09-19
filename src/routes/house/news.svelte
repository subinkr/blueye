<script>
  import { Marquee } from 'flowbite-svelte'
  import { scrollY, mainScreenHeight } from '$lib/scroll-control.ts';
  import { fly } from 'svelte/transition';

  const headlines = [
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
    {title: "레이아웃 작업중입니다.", href: "/"},
  ]
</script>

{#if $scrollY >= $mainScreenHeight / 5}
<div transition:fly={{ y: -100, duration: 1000 }}
  class="z-40 fixed top-0 left-0 bg-black w-fit flex h-8 text-white font-bold sm:text-xl md:text-2xl text-center"
>
  <Marquee speed={0.3} hoverSpeed={0} class="text-sm min-w-fit">
    {#each headlines as headline}
      <a class="w-60" href={headline.href}><div class="w-[500px] whitespace-nowrap overflow-hidden text-ellipsis">{headline.title}</div></a>
    {/each}
  </Marquee>
</div>
{/if}