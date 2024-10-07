<script>
  import { DarkMode } from 'flowbite-svelte';
  import {menus} from '$lib/data/menus.ts';
  import Hamburger from './hamburger.svelte';
  import BlueyeLogo from './icons/blueye-logo.svelte';
  import Platforms from './platforms.svelte';
  import Working from "$lib/components/icons/working.svelte"
  import Todo from "$lib/components/icons/todo.svelte"
</script>


<div class="border-b text-center px-4 py-4 flex flex-col gap-4">
  <div id="blueye" class="flex justify-between items-center">
    <a href="/">
      <BlueyeLogo />
    </a>
    <div class="flex gap-4">
      <DarkMode class="hidden lg:block" />
      <Hamburger {menus} />
    </div>
  </div>

  <div id="menus" class="hidden lg:flex justify-between items-center">
    <div class="flex">
      {#each menus as menu}
        <div class="group relative cursor-pointer font-bold hover:rounded-full px-3 pt-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ">
          {#if menu.status === "완료"}
            <div></div>
          {:else if menu.status === "개발중"}
            <Working />
          {:else}
            <Todo title={menu.status} />
          {/if}
          <a rel="external" href={menu.href ?? menu.child[0].href}>{menu.title}</a>
          <div class="absolute hidden top-7 group-hover:flex flex-col pt-4 pb-2 z-40 bg-white dark:bg-black text-black dark:text-white rounded-b-xl border-b-2">
            {#each menu.child as child}
              <div class="mx-4 my-2 whitespace-nowrap text-left hover:underline ">
                <a rel="external" href={child.href}><div class="pl-4 pr-12">{child.title}</div></a>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    <div class="flex gap-4">
      <Platforms />
    </div>
  </div>
</div>