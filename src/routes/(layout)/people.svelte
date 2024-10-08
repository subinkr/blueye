<script>
  import { Marquee } from 'flowbite-svelte'
  import Title from '$lib/components/title.svelte';
  import { peoples } from '$lib/data/peoples.ts'
</script>

<div class="flex flex-col gap-8">
  <Title>블루아이 사람들</Title>
  <Marquee speed={0.5} hoverSpeed={0}>
    {#each peoples as people, peopleId}
    <div class="w-full flex flex-col justify-center items-center">
      <img alt={people.name} src={"/images/people/" + peopleId + ".jpg"} />
      <div class="text-center">
        <div class="whitespace-nowrap">{people.team}</div>
        <div class="flex gap-1 justify-center items-center">
          <div class="text-xl">{people.name}</div>
          <div>{people.position}</div>
        </div>
      </div>
    </div>
    {/each}
  </Marquee>
</div>