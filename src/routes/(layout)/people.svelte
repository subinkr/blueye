<script>
  import { Marquee } from 'flowbite-svelte'
  import Title from '$lib/components/title.svelte';
  import { peoples } from '$lib/data/peoples.ts'
</script>

    <div class="flex flex-col gap-8 py-16 dark:bg-gray-900">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium tracking-widest uppercase mb-3">Our Team</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">블루아이 전문가 팀</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">글로벌 부동산 시장에서 23년간의 경험을 가진 전문가들이 고객님의 성공적인 투자를 지원합니다.</p>
      </div>
      <div class="relative">
        <div class="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
        <div class="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
        
        <Marquee speed={0.5} hoverSpeed={0}>
          {#each peoples as people}
          <div class="w-full flex flex-col justify-center items-center">
            <img alt={people.name} src={"/images/people/" + people.id + ".jpg"} />
            <div class="text-center dark:text-white">
              <div class="whitespace-nowrap dark:text-gray-300">{people.team}</div>
              <div class="flex gap-1 justify-center items-center">
                <div class="text-xl">{people.name}</div>
                <div>{people.position}</div>
              </div>
            </div>
          </div>
          {/each}
        </Marquee>
      </div>
    </div>