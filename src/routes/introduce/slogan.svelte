<script>
  import { bodyHeight } from '$lib/scroll-controls/index.ts'
  import BlueyeLogo from "../../components/icons/blueye-logo.svelte";
</script>

<div class={"flex flex-col justify-center items-center gap-40 " + $bodyHeight}>
  <div></div>
  <div class="text-center text-xl sm:text-4xl">
    <div >사람과 기업과</div>
    <div >기회를 연결하고</div>
    <div >모두의 꿈을 잇는</div>
    <br />
    <div class="font-bold">아시아 라이프 솔루션 기업</div>
  </div>
  <BlueyeLogo />
</div>