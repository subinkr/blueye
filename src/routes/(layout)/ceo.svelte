<script>

  import { Button } from "flowbite-svelte";

  let src="/images/people/ceo.jpg";

</script>
<div class="flex flex-col justify-center items-center min-h-screen py-20 gap-4">
  <div class="lg:hidden text-yellow-400 text-2xl sm:text-4xl text-center sm:text-left">
    <div>블루아이와 만난 순간</div>
    <div class="font-bold">풍요로운 해외 라이프가</div>
    <div class="font-bold">꿈이 아닌 현실이 됩니다.</div>
  </div>
  <div class="lg:hidden flex gap-2 items-center justify-center sm:justify-normal sm:text-xl">
    <div>CEO</div>
    <div class="sm:text-2xl font-bold">배양희</div>
  </div>
  <div class="p-4 max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start">
    <div>
      <img class="w-80 lg:min-w-[400px] max-h-screen object-cover" {src} alt="ceo" />
      <div class="flex mb-4">
        <Button on:click={() => src="/images/people/ceo.jpg"} class="flex-1 py-4 rounded-none rounded-bl-lg text-center" disabled={src === "/images/people/ceo.jpg"}>CEO 배양희</Button>
        <Button on:click={() => src="/images/people/nomasian.jpg"} class="flex-1 py-4 rounded-none rounded-br-lg text-center" disabled={src === "/images/people/nomasian.jpg"}>대표저서 노마시안</Button>
      </div>
    </div>
    <div class="flex flex-col gap-8 sm:px-8">
      <div class="hidden lg:block text-yellow-400 text-2xl sm:text-4xl text-center sm:text-left">
        <div>블루아이와 만난 순간</div>
        <div class="font-bold">풍요로운 해외 라이프가</div>
        <div class="font-bold">꿈이 아닌 현실이 됩니다.</div>
      </div>
      <div class="hidden lg:flex gap-2 items-center justify-center sm:justify-normal sm:text-xl">
        <div>CEO</div>
        <div class="sm:text-2xl font-bold">배양희</div>
      </div>
      <div class="font-thin">
        <div><span class="font-extrabold">23년 전</span>, 중국 상해에서 코리아부동산을 설립하며 해외 부동산 시장에 첫 발을 내디뎠습니다. 교민 여러분의 성원에 힘입어 코리아부동산은 중국에서 가장 큰 교민 부동산으로 성장하였고, 그 네트워크를 기반으로 글로벌 시장에 진출할 수 있었습니다.</div>
        <br />
        <!-- <div>현재 블루아이는 중국 상해와 서안을 비롯하여 두바이, 호치민, 하노이, 프놈펜, 싱가포르, 조호바루, 서울 등 <span class="font-extrabold">7개 국가 9개 도시에 지사를 운영</span>하고 있습니다. 이를 통해 현지 시장에 대한 깊은 이해와 전문성을 확보하였으며, 고객님들께 신뢰할 수 있는 투자 기회를 제공하고 있습니다.</div> -->
        <!-- <br /> -->
        <div>그동안 <span class="font-bold">3,500여 명의 고객님께 30,000건 이상의 해외 부동산 거래를 성사</span>시키며 쌓아온 경험과 노하우는 블루아이의 가장 큰 자산입니다. 이는 저희의 전문성과 고객 중심의 서비스를 증명하는 결과이기도 합니다.</div>
        <br />
        <div>중국의 북경과 상해를 비롯해 두바이, 베트남의 호치민과 하노이, 캄보디아의 프놈펜, 싱가포르, 말레이시아의 조호바루, 그리고 서울까지 <span class="font-extrabold">7개국 9개 도시에 지사</span>를 운영하며, 각 지역의 전문가들과 협력하며 현지 시장에 대한 깊은 이해를 쌓아왔습니다.</div>
        <!-- <div>해외 부동산 투자는 복잡하고 낯설 수 있지만, 저희 블루아이는 <span class="font-extrabold">현지 전문가들의 네트워크와 23년간의 노하우</span>를 통해 안전하고 성공적인 투자를 약속드립니다. 또한 부동산뿐만 아니라 재테크, 교육, 기업 진출, 문화 투어, 스타트업 지원, 미디어 등 다양한 분야에서 맞춤형 솔루션을 제공하여 고객님의 다양한 필요에 부응하고 있습니다.</div> -->
        <br />
        <div>해외 부동산을 활용한 자산 관리가 복잡하고 낯설게 느껴질 수 있지만, 블루아이는 <span class="font-extrabold">현지 전문가들의 네트워크와 23년간 축적한 노하우</span>로 고객님들의 안전하고 성공적인 자산 관리를 돕고 있습니다. 부동산 뿐만 아니라 재테크, 교육, 기업 진출, 문화 투어, 스타트업 지원, 미디어 등 다양한 분야에서 종합적인 솔루션을 제공하여 고객님의 다양한 필요에 부응하고 있습니다.</div>
        <!-- <div>처음 상해에서 시작한 작은 발걸음이 이제는 아시아 전역으로 확대되었습니다. 저의 경험과 열정을 고객님들과 나누어, 새로운 기회와 성공을 함께 만들어가고 싶습니다.</div> -->
        <br />
        <div>아시아 전역으로 확대된 블루아이의 네트워크가 여러분을 기다리고 있습니다. 저의 경험과 열정을 고객님들과 나누어, 새로운 기회와 성공을 함께 만들어가고 싶습니다.</div>
        <!-- <div>해외 부동산 투자와 아시아 시장 진출을 고민하고 계십니까? 블루아이가 든든한 파트너가 되어 드리겠습니다.</div> -->
      </div>
    </div>
  </div>
</div>