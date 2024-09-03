<script>
  import { DarkMode } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import {menus} from '$lib/menus.ts';
  import Hamburger from './hamburger.svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  })

	const platforms = [
		{
			alt: '페이스북',
      src: '/images/logo/facebook.svg',
      href: '/',
      title: 'facebook'
		},
		{
			alt: '유튜브',
      src: '/images/logo/youtube.svg',
      href: '/',
      title: 'youtube'
		},
		{
			alt: '인스타그램',
      src: '/images/logo/instagram.svg',
      href: '/',
      title: 'instagram'
		},
		{
			alt: '카카오톡',
      src: '/images/logo/kakaotalk.svg',
      href: '/',
      title: 'kakaotalk'
		},
		{
			alt: '블로그',
      src: '/images/logo/blog.svg',
      href: '/',
      title: 'blog'
		},
	]
</script>


<div class="border-b text-center px-4 py-4 flex flex-col gap-4">
  <div id="blueye" class="flex justify-between items-center">
    <a href="/">
      <img src="/images/logo/blueye-logo.svg" class="h-9 dark:hidden" alt="Blueye Logo" />
      <img src="/images/logo/blueye-logo-white.svg" class="h-9 hidden dark:block" alt="Blueye Logo" />
    </a>
    <div class="flex gap-4">
      <DarkMode class="hidden md:block" />
      <Hamburger {menus} />
    </div>
  </div>

  <div id="menus" class="hidden md:flex justify-between items-center">
    <div class="flex gap-1">
      {#each menus as menu}
        <div class="group relative cursor-pointer font-bold hover:rounded-full px-4 pt-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <div>{menu.title}</div>
          <div class="absolute hidden top-7 group-hover:flex flex-col pt-4 pb-2 z-40 bg-white dark:bg-black text-black dark:text-white rounded-b-xl">
            {#each menu.child as child}
              <div class="mx-4 my-2 whitespace-nowrap text-left hover:underline">
                <a href="/"><div class="pl-4 pr-12">{child.title}</div></a>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    <div class="flex gap-4">
      {#each platforms as platform}
        <a href={platform.href} class="w-5 h-5"><img src={platform.src} alt={platform.alt} /></a>
      {/each}
    </div>
  </div>
</div>