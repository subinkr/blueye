<script>
  import { Footer, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
  import { menus } from '$lib/data/menus.ts';
  import Separator from './icons/separator.svelte';
  import BlueyeLogo from './icons/blueye-logo.svelte';
  import TitleSmall from './title-small.svelte';
</script>

<Footer footerType="logo" class="z-20 bg-white dark:bg-gray-900 border-t flex flex-col items-center gap-20">
  <!-- large sitemap -->
  <div class="hidden sm:flex min-w-[640px] flex-col items-center">
    <div class="w-full grid gap-8 py-8 px-6 grid-cols-3">
      {#each {length: 3} as _, i}
        <div class="flex flex-col gap-8">
          {#each menus.filter((menu, index) => {
            if(index % 3 == i) return menu
          }) as menu}
          <div class="flex flex-col gap-4">
            <a href={menu.href}><TitleSmall>{menu.title}</TitleSmall></a>
            <FooterLinkGroup ulClass="dark:text-gray-300">
              {#each menu.child as child}
              <FooterLink liClass="mb-4" href={child.href}>{child.title}</FooterLink>
              {/each}
            </FooterLinkGroup>
          </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="sm:hidden w-full flex flex-col items-center">
    <div class="w-full grid gap-4 py-4 px-6 grid-cols-1">
      {#each menus as menu}
      <div class="flex flex-col gap-4">
        <a href={menu.href}><TitleSmall>{menu.title}</TitleSmall></a>
        <FooterLinkGroup ulClass="dark:text-gray-300">
          {#each menu.child as child}
          <FooterLink liClass="mb-4" href={child.href}>{child.title}</FooterLink>
          {/each}
        </FooterLinkGroup>
      </div>
      {/each}
    </div>
  </div>

  <div class="w-[80vw] text-xs flex flex-col gap-8 lg:gap-1 text-gray-500 font-normal lg:font-bold">
    <div class="flex flex-col justify-center items-center gap-1">
      <BlueyeLogo />
      <div class="text-base font-bold mt-8">대한민국 · 말레이시아 · 베트남 · 싱가포르 · 아랍에미리트 · 중국 · 캄보디아</div>
      <div class="lg:flex gap-4 font-bold">
        <div>아시아 라이프 매거진 더리치(The Litchi)</div>
        <Separator />
        <div>에듀아시아(EDU ASIA)</div>
        <Separator />
        <div>베한타임즈(Vietnam-Korea Times)</div>
      </div>
    </div>
    <div class="hidden lg:block">
      <br />
      <br />
      <br />
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">상하이센터</div>
      <Separator />
      <div>上海市闵行区虹泉路1000号 A座701室</div>
      <Separator />
      <div>대표전화 (186) 1694 0029</div>
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">서울센터</div>
      <Separator />
      <div>서울특별시 영등포구 국회대로 62길 5, 5층 502호(여의도동, 신태진빌딩)</div>
      <Separator />
      <div>대표전화 010 5763 0617</div>
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">캄보디아센터</div>
      <Separator />
      <div>St.Sopheak Monkol RD, Tonle Basak, koh Pich Phnom Penh</div>
      <Separator />
      <div>대표전화 (855) 15 493 600</div>
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">말레이시아센터</div>
      <Separator />
      <div>HI JAUAN MACROLINK, BLOCK A-32-05,Medini Central1,79250, Iskandar PuteriI,Johor</div>
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">호치민센터</div>
      <Separator />
      <div>2F, 8/6 Vo Truong Toan Street , An Phu Ward, Thu Duc City, HCMC</div>
    </div>
    <div class="lg:flex gap-4">
      <div class="font-bold w-24">하노이센터</div>
      <Separator />
      <div>The garden 1002, my dinh 1, nam tu liem, hanoi</div>
    </div>
    <br />
    <div class="font-normal text-center">ⓒCopyright 2002 - 2024 BLUEYE. All Rights Reserved.</div>
  </div>
</Footer> 