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
     <div></div>
      블루아이(Blueye)그룹 | 한국 · 중국 · 말레이시아 · 싱가포르 · 캄보디아 · 베트남 · 두바이

      상하이센터 | 上海市闵行区虹莘路3988号(디존빌딩 408호) 대표전화 186 1694 0029
      서울광화문센터 | 서울 종로구 종로1 교보생명빌딩 15층
      블루아시아 | 현대가산퍼블릭 서울 금천구 디지털로 178. A동 418호  대표전화 02 2114 8288
      캄보디아모건센터 | St.Sopheak Monkol RD, Tonle Basak, koh Pich Phnom Penh 대표전화 ( 855) 15 493 600
      호치민아시아센터 | On the third floor of building D2 Galleria, Le Thuoc Street, Thao Dien Ward, District 2, Thu Duc City, HCMC
      ⓒCopyright 2024 BLUEYE. All Rights Reserved. 아시아 라이프 매거진 더리치(The Litchi)  에듀아시아(EDU ASIA)  베한타임즈(Vietnam-Korea Times)
    </div>
  </div>
</Footer> 