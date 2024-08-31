<script>
  import { Drawer, Button, CloseButton, Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarWrapper } from 'flowbite-svelte';
  import { BarsOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let hidden2 = true;
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
  export let menus;
</script>

<div class="md:hidden text-center">
  <Button on:click={() => (hidden2 = false)}><BarsOutline /></Button>
</div>

<Drawer class="w-full h-screen p-0 flex flex-col justify-start items-center" placement="top" width="w-full" transitionType="fly" transitionParams={transitionParamsTop} bind:hidden={hidden2} id="sidebar7">
  <div class="w-full min-h-20 px-4 flex justify-between items-center">
    <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <CloseButton on:click={() => (hidden2 = true)} class="dark:text-white" />
  </div>
  <Sidebar>
    <SidebarWrapper divClass="overflow-y-auto rounded dark:bg-gray-800">
      <SidebarGroup>
        {#each menus as menu}
          <SidebarDropdownWrapper class="pl-0" href={menu.url} label={menu.title}>
            {#each menu.child as child}
              <SidebarDropdownItem href={child.url} label={child.title} />
            {/each}
          </SidebarDropdownWrapper>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>