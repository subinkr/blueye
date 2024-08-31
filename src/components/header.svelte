<script>
  import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import {menus} from '$lib/menus.ts';
  import Hamburger from './hamburger.svelte';

  let child = [];
  let visible = false;

  onMount(() => {
    visible = true;
  })

</script>


<Navbar let:hidden class="border-b text-center h-20 flex">
  <NavBrand href="/">
    <img src="/images/blueye-logo.jpg" class="me-3 h-6 sm:h-9" alt="Blueye Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blueye</span>
    <div class="m-1" />
    <DarkMode />
  </NavBrand>
    <Hamburger {menus} />
    <NavUl {hidden}>
      {#each menus as menu}
        {#if visible}
        <div class="w-full" in:fly={{ x: 100, duration: 1000 }}>
        <NavLi class="w-[11vw] cursor-pointer text-sm lg:text-base xl:text-lg font-bold hover:underline" 
          on:mouseenter={()=> {
            child = menu.child;
          }}
        >
          {menu.title}
        </NavLi>
        <MegaMenu full items={child} let:item class="flex justify-end z-50">
          <div slot="default" class="w-[20vw]">
            <a href={item.url} class="hover:underline hover:font-bold text-sm lg:text-base xl:text-lg hover:text-primary-800 dark:hover:text-white">
              <!-- <div transition:fly={{ y: 100, duration: 250 }}>{item.title}</div> -->
              <div>{item.title}</div>
            </a>
          </div>
        </MegaMenu>
      </div>
      {/if}
        {/each}
    </NavUl>
</Navbar>