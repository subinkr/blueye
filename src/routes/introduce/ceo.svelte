<script>
  import { bodyHeight } from '$lib/scroll-control.ts'
  import BlueyeLogo from '../../components/icons/blueye-logo.svelte';
</script>

<div class={"flex flex-col justify-center items-center gap-40 " + $bodyHeight}>
  <div></div>
  <div class="text-center">
    <div class="text-4xl">사람과 기업과</div>
    <div class="text-4xl">기회를 연결하고</div>
    <div class="text-4xl">모두의 꿈을 잇는</div>
    <br />
    <div class="text-4xl font-bold">아시아 라이프 솔루션 기업</div>
  </div>
  <BlueyeLogo />
</div>
<div>
  <div class="max-w-8xl md:flex items-center">
    <img class="w-[400px] max-h-screen object-cover" src="/images/people/ceo.jpg" alt="ceo" />
    <div class="flex flex-col gap-8 p-2 py-8 sm:p-8">
      <div class="text-yellow-400 text-2xl sm:text-4xl text-center sm:text-left">
        <div>프레임을 바꾸면</div>
        <div class="font-bold">새로운</div>
        <div class="font-bold">아시아가 보인다</div>
      </div>
      <div class="flex gap-2 items-center justify-center sm:justify-normal sm:text-xl">
        <div>CEO</div>
        <div class="sm:text-2xl font-bold">배양희</div>
      </div>
      <div class="text-sm">
        <div>블루아이는 마지막 남은 기회의 땅,</div>
        <div>아시아에서 솔루션을 제공하는 그룹입니다.</div>
        <br />
        <div>평범하던 당신의 삶은</div>
        <div>노마시안으로 특별해집니다.</div>
      </div>
    </div>
  </div>
</div>