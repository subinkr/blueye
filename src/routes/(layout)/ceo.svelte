<script>
  import { Button } from "flowbite-svelte";
  let src="/images/people/ceo.jpg";
</script>

<div class="py-24">
  <div class="container mx-auto px-4 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-gray-200 text-gray-800 text-xs font-medium tracking-widest uppercase mb-3">Leadership</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CEO 메시지</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
    </div>
    
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- CEO Image Section -->
        <div class="w-full lg:w-2/5">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-400"></div>
            <img class="relative z-10 w-full object-cover shadow-xl" src={src} alt="CEO 배양희" />
          </div>
          <div class="flex mt-4">
            <Button on:click={() => src="/images/people/ceo.jpg"} class="flex-1 py-3 rounded-none text-center bg-gray-800 hover:bg-gray-700 text-white" disabled={src === "/images/people/ceo.jpg"}>CEO 배양희</Button>
            <Button on:click={() => src="/images/people/nomasian.jpg"} class="flex-1 py-3 rounded-none text-center bg-gray-800 hover:bg-gray-700 text-white" disabled={src === "/images/people/nomasian.jpg"}>대표저서 노마시안</Button>
          </div>
        </div>
        
        <!-- CEO Message Section -->
        <div class="w-full lg:w-3/5">
          <div class="mb-8">
            <span class="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-semibold tracking-wider uppercase mb-4">CEO MESSAGE</span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              블루아이와 만난 순간<br/>
              <span class="text-primary-600">풍요로운 해외 라이프</span>가<br/>
              꿈이 아닌 현실이 됩니다.
            </h2>
            <div class="flex items-center mb-8">
              <div class="mr-4 h-px w-12 bg-yellow-400"></div>
              <div class="text-xl font-medium">CEO 배양희</div>
            </div>
          </div>
          
          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p><span class="font-bold text-gray-900">23년 전</span>, 중국 상해에서 코리아부동산을 설립하며 해외 부동산 시장에 첫 발을 내디뎠습니다. 교민 여러분의 성원에 힘입어 코리아부동산은 중국에서 가장 큰 교민 부동산으로 성장하였고, 그 네트워크를 기반으로 글로벌 시장에 진출할 수 있었습니다.</p>
            
            <p>그동안 <span class="font-bold text-gray-900">3,500여 명의 고객님께 30,000건 이상의 해외 부동산 거래를 성사</span>시키며 쌓아온 경험과 노하우는 블루아이의 가장 큰 자산입니다. 이는 저희의 전문성과 고객 중심의 서비스를 증명하는 결과이기도 합니다.</p>
            
            <p>중국의 북경과 상해를 비롯해 두바이, 베트남의 호치민과 하노이, 캄보디아의 프놈펜, 싱가포르, 말레이시아의 조호바루, 그리고 서울까지 <span class="font-bold text-gray-900">7개국 9개 도시에 지사</span>를 운영하며, 각 지역의 전문가들과 협력하며 현지 시장에 대한 깊은 이해를 쌓아왔습니다.</p>
            
            <p>해외 부동산을 활용한 자산 관리가 복잡하고 낯설게 느껴질 수 있지만, 블루아이는 <span class="font-bold text-gray-900">현지 전문가들의 네트워크와 23년간 축적한 노하우</span>로 고객님들의 안전하고 성공적인 자산 관리를 돕고 있습니다. 부동산 뿐만 아니라 재테크, 교육, 기업 진출, 문화 투어, 스타트업 지원, 미디어 등 다양한 분야에서 종합적인 솔루션을 제공하여 고객님의 다양한 필요에 부응하고 있습니다.</p>
            
            <p>아시아 전역으로 확대된 블루아이의 네트워크가 여러분을 기다리고 있습니다. 저의 경험과 열정을 고객님들과 나누어, 새로운 기회와 성공을 함께 만들어가고 싶습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .prose p {
    margin-bottom: 1.25rem;
  }
  
  .prose p:last-child {
    margin-bottom: 0;
  }
  
  /* Add subtle animation for content */
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .lg\:w-2\/5 {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  .lg\:w-3\/5 {
    animation: fadeInRight 0.8s ease-out forwards;
  }
</style>