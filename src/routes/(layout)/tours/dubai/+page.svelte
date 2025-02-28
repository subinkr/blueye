<script>
  import { enhance } from '$app/forms';
</script>

<div class="w-full min-h-screen bg-white flex flex-col gap-20 pb-20">
  <!-- Hero Section -->
  <div class="relative bg-blue-600 text-white py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">두바이 부동산 투자 투어</h1>
      <p class="text-xl text-center max-w-3xl mx-auto">
        두바이 부동산 투자, 이제 직접 확인하세요! 최고의 입지 탐방, 현장 분석, 전문가 상담까지 제공하며, 안정적인 투자 결정을 돕습니다.
      </p>
    </div>
  </div>


  <!-- Why Dubai Section -->
  <div class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Why Dubai?</h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">세계적인 비즈니스 허브</h3>
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>중동의 경제 중심지이자 글로벌 비즈니스 허브로서, 지속적인 경제 성장과 안정적인 투자 환경을 제공합니다.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">외국인 투자 친화적</h3>
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>외국인 부동산 소유 100% 허용, 비자 혜택, 무세금 정책 등 투자자 친화적인 제도를 운영합니다.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">높은 투자 수익률</h3>
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>부동산의 지속적인 가치 상승과 높은 임대 수익률로 매력적인 투자 기회를 제공합니다.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Key Points Section -->
  <div class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">핵심 포인트</h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">현장 경험</h3>
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>직접 현장에서 두바이의 부동산을 보고 전문가의 조언과 설명을 들을 수 있는 귀중한 경험</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">전문가 컨설팅</h3>
            <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>두바이 현지 전문가의 시장 분석과 투자 전략 컨설팅 제공</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md max-w-80 hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">원스톱 서비스</h3>
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <p class='flex-1 text-gray-600'>투어부터 계약, 사후관리까지 원스톱으로 진행 가능한 프리미엄 서비스</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Tour Schedule Section -->
  <div class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">투자 투어 일정</h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-20 text-center">
        <!-- Option 1 -->
        <div class="flex-1 max-w-sm">
          <h3 class="text-2xl font-bold mb-4">3박 5일 패키지</h3>
          <p class="text-lg font-semibold text-blue-600 mb-6">500만원 (비행기표 별도)</p>
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              5성급 호텔 숙박 & 전용 차량
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              부동산 투자 컨설팅
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              두바이 관광 포함
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              최대 6명 소수정예
            </li>
          </ul>
          <a 
            href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
          >
            신청하기
          </a>
        </div>

        <!-- Option 2 -->
        <div class="flex-1 max-w-sm">
          <h3 class="text-2xl font-bold mb-4">4박 6일 패키지</h3>
          <p class="text-lg font-semibold text-blue-600 mb-6">900만원 (비행기표 별도)</p>
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              7성급 호텔 숙박 & 전용 차량
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              프리미엄 부동산 투자 컨설팅
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              두바이 럭셔리 관광 포함
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              최대 4명 소수정예
            </li>
          </ul>
          <a 
            href="https://e5uy5dok1k8.sg.larksuite.com/share/base/form/shrlgoBAqUYbG5PpCoKu0Bcdybe"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
          >
            신청하기
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">상품 안내 및 규정</h2>
      <div class="max-w-2xl mx-auto bg-white p-8">
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
        </div>
      </div>
    </div>
  </div>
</div>
