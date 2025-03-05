<script>
  import { enhance } from '$app/forms';
</script>

<div class="w-full min-h-screen bg-white flex flex-col pb-20">
  <!-- Hero Section -->
  <div class="relative py-20 min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm"></div>
    </div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-white text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">두바이 부동산 <span class="text-yellow-400">투자의 기회</span></h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          세계 최고의 부동산 시장에서 직접 보고, 느끼고, 투자하는 특별한 경험
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#packages" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            투어 패키지 보기
          </a>
          <a href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-full text-lg font-semibold transition-all">
            지금 신청하기
          </a>
        </div>
        
        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-lg flex-1 min-w-[150px] max-w-[200px]">
            <div class="text-3xl font-bold text-yellow-400">0%</div>
            <div class="text-sm text-gray-200">소득세 및 양도세</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-lg flex-1 min-w-[150px] max-w-[200px]">
            <div class="text-3xl font-bold text-yellow-400">100%</div>
            <div class="text-sm text-gray-200">외국인 소유권</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-lg flex-1 min-w-[150px] max-w-[200px]">
            <div class="text-3xl font-bold text-yellow-400">10년+</div>
            <div class="text-sm text-gray-200">골든 비자 혜택</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-10 inset-x-0 flex justify-center items-center z-10">
      <div class="animate-bounce">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>


  <!-- Why Dubai Section -->
  <div class="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -mr-32 -mt-32"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-10 -ml-40 -mb-40"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">왜 <span class="text-blue-600">두바이</span>인가?</h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          세계에서 가장 빠르게 성장하는 도시이자, 글로벌 투자자들이 주목하는 부동산 시장
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Card 1 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative p-6 flex items-center justify-center">
            <svg class="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 class="text-2xl font-bold text-white absolute bottom-6 left-6">세계적인 비즈니스 허브</h3>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-6">중동의 경제 중심지이자 글로벌 비즈니스 허브로서, 지속적인 경제 성장과 안정적인 투자 환경을 제공합니다. 두바이의 GDP는 매년 평균 4% 이상 성장하고 있습니다.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">국제 무역</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">금융 중심지</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">관광 허브</span>
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-br from-green-500 to-green-700 relative p-6 flex items-center justify-center">
            <svg class="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 class="text-2xl font-bold text-white absolute bottom-6 left-6">외국인 투자 친화적</h3>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-6">외국인 부동산 소유 100% 허용, 비자 혜택, 무세금 정책 등 투자자 친화적인 제도를 운영합니다. 부동산 구매 시 장기 체류 비자를 받을 수 있는 혜택도 제공됩니다.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">100% 소유권</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">골든 비자</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">무세금</span>
            </div>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-700 relative p-6 flex items-center justify-center">
            <svg class="w-24 h-24 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 class="text-2xl font-bold text-white absolute bottom-6 left-6">높은 투자 수익률</h3>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-6">부동산의 지속적인 가치 상승과 높은 임대 수익률로 매력적인 투자 기회를 제공합니다. 프라임 지역의 경우 연 8-12%의 임대 수익률을 기대할 수 있습니다.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">높은 임대 수익</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">자산 가치 상승</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">안정적 투자</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Key Points Section -->
  <div class="py-16 md:py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">두바이 부동산 투어의 특별함</h2>
      <p class="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">직접 눈으로 보고, 느끼고, 결정하는 프리미엄 부동산 임장 투어</p>
      
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Card 1 -->
        <div class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <svg class="absolute bottom-4 right-4 w-20 h-20 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 class="text-xl font-bold">현장에서 직접 확인</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-4">사진과 영상으로는 알 수 없는 실제 현장의 분위기와 입지 조건을 직접 체험하세요. 두바이 최고의 부동산 전문가와 함께 현장을 둘러보며 투자 가치를 정확히 판단할 수 있습니다.</p>
            <a href="#packages" class="flex items-center text-indigo-600 font-medium">
              
            </a>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-r from-teal-500 to-emerald-600 relative overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <svg class="absolute bottom-4 right-4 w-20 h-20 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 class="text-xl font-bold">맞춤형 투자 컨설팅</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-4">개인적 투자 목적과 예산에 맞는 맞춤형 컨설팅을 제공합니다. 두바이 부동산 시장의 트렌드, 수익률, 법적 절차까지 전문가의 명확한 조언을 받으세요.</p>
            <a href="#packages" class="flex items-center text-teal-600 font-medium">
              
            </a>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-1 min-w-[280px] md:max-w-[32%] mb-4 md:mb-0">
          <div class="h-48 bg-gradient-to-r from-amber-500 to-orange-600 relative overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <svg class="absolute bottom-4 right-4 w-20 h-20 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 class="text-xl font-bold">VIP 네트워킹 기회</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-4">두바이 현지 개발사, 투자자, 부동산 전문가들과의 독점적인 네트워킹 기회를 제공합니다. 일반 투자자로는 접근하기 어려운 프리미엄 정보와 특별 혜택을 받으세요.</p>
            <a href="#packages" class="flex items-center text-amber-600 font-medium">
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonials Section -->
  <!-- <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">TESTIMONIALS</span>
        <h2 class="text-4xl font-bold mb-4">투자자들의 <span class="text-blue-600">생생한 후기</span></h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          두바이 부동산 투어에 참여한 고객들의 실제 경험담과 성공 사례를 확인하세요
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        <div class="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative flex-1 min-w-[280px] md:max-w-[32%]">
          <div class="absolute -top-5 -left-5">
            <svg class="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div class="pt-6">
            <p class="text-gray-700 mb-6 italic">
              "두바이 부동산 투어를 통해 처음으로 해외 부동산에 투자했습니다. 전문적인 가이드와 컨설팅 덕분에 자신감을 갖고 결정할 수 있었고, 현재 10% 이상의 임대 수익률을 얻고 있습니다."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="김준호님 이미지" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">김준호</h4>
                <p class="text-sm text-gray-500">IT 기업 CEO, 2022년 투자</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative flex-1 min-w-[280px] md:max-w-[32%]">
          <div class="absolute -top-5 -left-5">
            <svg class="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div class="pt-6">
            <p class="text-gray-700 mb-6 italic">
              "VIP 투어 패키지를 통해 두바이의 최고급 부동산을 둘러볼 수 있었습니다. 개발사 CEO와의 미팅을 통해 시장에 대한 깊은 이해를 얻었고, 프리미엄 물건에 투자할 수 있었습니다. 투자 후 1년 만에 20% 가치 상승을 경험했습니다."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="이미영님 이미지" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">이미영</h4>
                <p class="text-sm text-gray-500">부동산 투자자, 2023년 투자</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative flex-1 min-w-[280px] md:max-w-[32%]">
          <div class="absolute -top-5 -left-5">
            <svg class="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div class="pt-6">
            <p class="text-gray-700 mb-6 italic">
              "두바이 부동산 투어는 단순한 관광이 아닌 실질적인 투자 기회를 제공했습니다. 현지 시장에 대한 전문적인 안내와 분석 덕분에 좋은 위치의 물건을 발굴할 수 있었고, 현재 안정적인 임대 수익을 얻고 있습니다."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="박성민님 이미지" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">박성민</h4>
                <p class="text-sm text-gray-500">의사, 2023년 투자</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <a 
          href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          나도 두바이 부동산에 투자하기
        </a>
      </div>
    </div>
  </div> -->

  <!-- Tour Schedule Section -->
  <div class="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50" id="packages">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10 md:mb-16">
        <span class="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">PREMIUM PACKAGES</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">특별한 <span class="text-blue-600">투어 패키지</span></h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          두바이 부동산 투자의 모든 것을 경험할 수 있는 맞춤형 투어 패키지를 만나보세요
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Standard Package -->
        <div class="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col relative min-w-[300px] md:max-w-[45%]">
          <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8">
            <h3 class="text-2xl font-bold mb-2">스탠다드 패키지</h3>
            <p class="text-blue-100 mb-4">3박 5일 프리미엄 투어</p>
            <div class="flex items-baseline">
              <span class="text-3xl font-bold">₩500만</span>
              <span class="text-blue-200 ml-2">(항공권 별도)</span>
            </div>
          </div>
          
          <div class="p-8 flex-grow flex flex-col">
            <div class="mb-8">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                포함 사항
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>5성급 호텔 숙박 (3박)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>전용 차량 및 가이드</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>부동산 투자 컨설팅 (1회)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>두바이 주요 관광지 방문</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>최대 6명 소수정예 그룹</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-auto">
              <a 
                href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-center transition-colors"
              >
                지금 예약하기
              </a>
              <p class="text-sm text-gray-500 text-center mt-4">* 선착순 마감, 예약 확정 시 계약금 20% 결제</p>
            </div>
          </div>
        </div>
        
        <!-- Premium Package -->
        <div class="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col relative min-w-[300px] md:max-w-[45%]">
          <!-- Recommended Badge -->
          <div class="absolute top-0 right-0 bg-yellow-500 text-white px-6 py-1 rounded-bl-lg font-semibold z-10 shadow-md">
            추천
          </div>
          
          <div class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8">
            <h3 class="text-2xl font-bold mb-2">프리미엄 패키지</h3>
            <p class="text-indigo-200 mb-4">4박 6일 VIP 투어</p>
            <div class="flex items-baseline">
              <span class="text-3xl font-bold">₩1,500만</span>
              <span class="text-indigo-200 ml-2">(항공권 별도)</span>
            </div>
          </div>
          
          <div class="p-8 flex-grow flex flex-col">
            <div class="mb-8">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg class="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                포함 사항
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>7성급 럭셔리 호텔 숙박 (4박)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>전용 리무진 및 전문 가이드</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>VIP 부동산 투자 컨설팅 (무제한)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>두바이 & 아부다비 럭셔리 투어</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>최대 4명 VIP 그룹</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>개발사 CEO 미팅 기회</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-auto">
              <a 
                href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-4 rounded-xl font-semibold text-center transition-colors"
              >
                VIP 예약하기
              </a>
              <p class="text-sm text-gray-500 text-center mt-4">* 선착순 마감, 예약 확정 시 계약금 20% 결제</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="py-12 md:pt-16 md:pb-20">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">상품 안내 및 규정</h2>
      <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md">
        <div class="space-y-8">
          <!-- 유의사항 섹션 -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">유의사항</h3>
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>업체 사정 또는 천재지변으로 인해 투어가 취소될 경우, 환불 규정과 별개로 전액 환불됩니다.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>1인 1실 변경을 신청하시는 경우, 추가 요금이 발생합니다.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>계절성에 따른 요금 변동으로 인해 비행기 표 비용은 별도 요금으로 간주됩니다.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>호텔룸 1인 1실 사용 시 100만원(3박5일) / 300만원(4박6일) 추가 요금이 발생합니다. (VAT 별도)</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>세부 일정은 현지 사정에 따라 변동될 수 있으며, 최대한 빠른 시일내에 사전 안내드립니다.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>투자 투어 신청서를 작성하시고 24시간 내에 입금이 확인되지 않으면, 자동으로 예약 취소가 됩니다.</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>상품 비용은 1인 기준 500만원(3박5일) / 1500만원(4박6일) 입니다.</span>
              </li>
            </ul>
          </div>

          <!-- 환불규정 섹션 -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">환불규정</h3>
            <div class="bg-gray-50 rounded-lg p-4 space-y-2">
              <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-600">출발 30일 이내 취소</span>
                <span class="font-semibold text-blue-600">40% 환불</span>
              </div>
              <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                <span class="text-gray-600">출발 15일 이내 취소</span>
                <span class="font-semibold text-blue-600">20% 환불</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">출발 전날 ~ 당일 취소</span>
                <span class="font-semibold text-red-600">환불 불가</span>
              </div>
            </div>
          </div>
          
          <!-- 주관여행사 섹션 -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">주관여행사</h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span class="text-gray-700 font-medium">이레팜투어</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
