<script>
  import { Drawer, Button, CloseButton, Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarWrapper, DarkMode } from 'flowbite-svelte';
  import { BarsOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  import Platforms from './platforms.svelte';

  let hidden = true;
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
  export let menus;
</script>

<div class="lg:hidden text-center">
  <Button on:click={() => (hidden = false)}><BarsOutline /></Button>
</div>

<Drawer class="z-50 w-full h-screen p-0 flex flex-col justify-start items-center" placement="top" width="w-full" transitionType="fly" transitionParams={transitionParamsTop} bind:hidden={hidden} id="sidebar7">
  <div class="w-full min-h-20 px-4 flex justify-between items-center">
    <DarkMode />
    <h5 id="drawer-navigation-label-3" class="flex-1 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <CloseButton on:click={() => (hidden = true)} class="dark:text-white m-0" />
  </div>
  <Sidebar>
    <SidebarWrapper divClass="h-[calc(100vh-80px)] flex flex-col items-center overflow-y-auto rounded dark:bg-gray-800">
      <SidebarGroup class="w-full">
        {#each menus as menu}
          <SidebarDropdownWrapper class="pl-0" href={menu.href} label={menu.title}>
            {#each menu.child as child}
              <SidebarDropdownItem href={child.href} label={child.title} on:click={() => (hidden = true)} />
            {/each}
          </SidebarDropdownWrapper>
          {/each}
        </SidebarGroup>
        <div class="my-8">
          <Platforms size="h-8" />
        </div>
    </SidebarWrapper>
  </Sidebar>
</Drawer>