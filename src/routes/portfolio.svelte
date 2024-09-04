<script>

  import { Heading } from "flowbite-svelte";
  import Panel from "../components/panel.svelte";

</script>

<div class="mt-10 flex flex-col gap-4 items-center">
  <Heading tag="h2" class="text-black dark:text-white whitespace-nowrap" customSize="text-lg font-extrabold sm:text-xl md:text-2xl lg:text-3xl">7개국 부동산 포트폴리오</Heading>
  <div class="flex flex-col lg:flex-row gap-4 justify-center items-center">
    <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Panel title="Shanghai" img="/images/intro/shanghai.jpg" />
      <Panel title="Dubai" img="/images/intro/dubai.jpg" />
    </div>
    <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Panel title="Ho Chi Minh City" img="/images/intro/ho-chi-minh-city.jpg" />
      <Panel title="Hanoi" img="/images/intro/hanoi.jpg" />
    </div>
  </div>
  <div class="flex flex-col lg:flex-row gap-4 justify-center items-center">
    <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Panel title="Cambodia" img="/images/intro/cambodia.jpg" />
      <Panel title="Singapore" img="/images/intro/singapore.jpg" />
    </div>
    <div class="w-full flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Panel title="Malaysia" img="/images/intro/malaysia.jpg" />
      <Panel title="South korea" img="/images/intro/south-korea.jpg" />
    </div>
  </div>
</div>