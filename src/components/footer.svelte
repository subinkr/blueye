<script>
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from 'flowbite-svelte';
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
  import { menus } from '$lib/menus.ts';
</script>

<Footer footerType="sitemap" class="bg-white dark:bg-gray-900 border-t">
  <div class="w-full flex flex-col items-center">
  <div class="w-full max-w-4xl grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    {#each menus as menu}
    <div>
      <h2 class="mb-6 text-sm sm:text-base md:text-lg font-semibold dark:text-gray-400 uppercase">{menu.title}</h2>
      <FooterLinkGroup ulClass="dark:text-gray-300">
        {#each menu.child as child}
        <FooterLink liClass="mb-4" href={child.url}>{child.title}</FooterLink>
        {/each}
      </FooterLinkGroup>
    </div>
    {/each}
  </div>
</div>

  <div class="py-6 px-4 bg-white dark:bg-gray-700 md:flex md:items-center md:justify-between">
    <FooterCopyright spanClass="text-sm dark:text-gray-300 sm:text-center" href="/" by="Blueye" />
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
      <FooterIcon href="/">
        <FacebookSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
      </FooterIcon>
    </div>
  </div>
</Footer> 