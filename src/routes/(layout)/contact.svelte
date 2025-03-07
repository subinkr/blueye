<script>
  import Separator from "$lib/components/icons/separator.svelte";
  import TitleSmall from "$lib/components/title-small.svelte";
  import Title from "$lib/components/title.svelte";
  import { EnvelopeSolid, PhoneSolid, MapPinSolid, ClockSolid } from 'flowbite-svelte-icons';
</script>

<div class="w-full py-24 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium tracking-widest uppercase mb-3">문의하기</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">상담 문의</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">해외 부동산 투자에 관한 궁금한 점이 있으시면 언제든지 문의해 주세요. 전문가가 친절하게 상담해 드립니다.</p>
    </div>
    
    <div class="flex flex-wrap w-full max-w-6xl mx-auto">
      <!-- 연락처 정보 -->
      <div class="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-sm shadow-md h-full">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">연락처 정보</h3>
          
          <div class="space-y-6">
            <!-- 전화번호 -->
            <div class="flex items-start">
              <div class="bg-yellow-400 p-3 rounded-full mr-4">
                <PhoneSolid class="text-gray-900" size="md" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">전화번호</h4>
                <p class="text-gray-600 dark:text-gray-300">(02) 2070 8280</p>
              </div>
            </div>
            
            <!-- 카카오톡 -->
            <div class="flex items-start">
              <div class="bg-yellow-400 p-3 rounded-full mr-4">
                <EnvelopeSolid class="text-gray-900" size="md" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">카카오톡</h4>
                <a href="https://pf.kakao.com/_qpRxjxb/chat" class="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300">
                  카카오톡 상담 시작하기
                </a>
              </div>
            </div>
            
            <!-- 영업시간 -->
            <div class="flex items-start">
              <div class="bg-yellow-400 p-3 rounded-full mr-4">
                <ClockSolid class="text-gray-900" size="md" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">영업시간</h4>
                <p class="text-gray-600 dark:text-gray-300">10:00 - 18:00, 시간 조정 가능</p>
              </div>
            </div>
            
            <!-- 회사주소 -->
            <div class="flex items-start">
              <div class="bg-yellow-400 p-3 rounded-full mr-4">
                <MapPinSolid class="text-gray-900" size="md" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">회사주소</h4>
                <p class="text-gray-600 dark:text-gray-300">서울특별시 영등포구 국회대로 62길 5, 5층 502호<br>(여의도동, 신태진빌딩)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 지도 -->
      <div class="w-full lg:w-1/2 lg:pl-6">
        <div class="rounded-sm shadow-md overflow-hidden h-full min-h-[500px]">
          <iframe class="w-full h-full" id="blue-asia" title="Blue asia position" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.156366564428!2d126.91368262596914!3d37.52781112634754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f215e10f7ef%3A0x7552f6599a041aa!2z7Iug7YOc7KeE67mM65Sp!5e0!3m2!1sko!2skr!4v1735799955650!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* 연락처 섹션 애니메이션 */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .bg-gray-50, .rounded-sm.shadow-md {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .bg-gray-50 {
    animation-delay: 0.1s;
  }
  
  .rounded-sm.shadow-md {
    animation-delay: 0.3s;
  }
</style>
