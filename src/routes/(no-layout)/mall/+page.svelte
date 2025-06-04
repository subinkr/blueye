<script>
  import { LockSolid } from 'flowbite-svelte-icons';
  import { goto } from '$app/navigation';
  import { enhance } from '$app/forms';

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  let password = '';
  let showErrorMessage = false;
  let errorMessage = '';

  // 로그인/리다이렉트 처리
  $: if (form?.success === false) {
    showErrorMessage = true;
    errorMessage = form.message;
    setTimeout(() => goto('/'), 3000);
  }
  $: if (form?.success === true && form?.token) {
    // Full reload to avoid clientHeight timing error
    window.location.replace(`/mall?token=${form.token}`);
  }

  /* -----------------------------
     임시 상품 데이터 (API 대체용)
  ------------------------------*/
  const products = [
    {
      id: 1,
      name: '[고봉]육개장 800g',
      price: '9,800',
      originalPrice: '13,500',
      link: 'https://smartstore.naver.com/ljbubustore/products/5594763265',
      categoryId: 6        // 식품
    },
    {
      id: 2,
      name: '[고봉]나주식 진곰탕 800g',
      price: '13,500',
      originalPrice: '',
      link: 'https://smartstore.naver.com/ljbubustore/products/5594767232',
      categoryId: 6        // 식품
    },
    {
      id: 3,
      name: '[초지일관]김포쌀 컵떡국 6개입 김포로컬푸드 간편식',
      price: '15,000',
      originalPrice: '',
      link: 'https://smartstore.naver.com/ljbubustore/products/5730418292',
      categoryId: 6        // 가구/인테리어
    },
    {
      id: 4,
      name: '혼합) 상주 곶감 추석 명절 선물세트 건시 반건시',
      price: '49,000',
      originalPrice: '65,000',
      link: 'https://smartstore.naver.com/ljbubustore/products/6156901614',
      categoryId: 6        // 생활/건강
    },
    {
      id: 5,
      name: 'Slumberland 매트리스, royal hotel series',
      price: '2,000,000',
      originalPrice: '3,300,000',
      link: 'https://smartstore.naver.com/fairtaget/products/5654155683',
      categoryId: 3        // 가구/인테리어
    }
  ];

  // 가격 문자열("1,200,000") → 숫자 변환
  const toNumber = (s) => Number(String(s).replaceAll(',', '').trim()) || 0;

  // 할인률 계산 (원가·할인가 모두 숫자여야 표시)
  const getDiscount = (p) => {
    const o = toNumber(p.originalPrice);
    const c = toNumber(p.price);
    return o > c && c > 0 ? `${Math.round((1 - c / o) * 100)}%` : '';
  };

  /* -----------------------------
     카테고리 (가나다순)
  ------------------------------*/
  const categories = [
    { id: 1, name: '생활/건강',    anchor: 'life-health-section' },
    { id: 2, name: '디지털/가전',   anchor: 'digital-appliance-section' },
    { id: 3, name: '가구/인테리어', anchor: 'furniture-interior-section' },
    { id: 4, name: '패션잡화',    anchor: 'fashion-accessory-section' },
    { id: 5, name: '패션의류',    anchor: 'fashion-clothing-section' },
    { id: 6, name: '식품',       anchor: 'food-section' },
    { id: 7, name: '출산/육아',    anchor: 'baby-section' },
    { id: 8, name: '여가/생활편의', anchor: 'leisure-section' }
  ];

  /* -----------------------------
     스크롤 헬퍼
  ------------------------------*/
  function scrollToSection(anchor) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

{#if data.authorized}
<div class="min-h-screen">
  <!-- Header -->
  <header class="border-b border-gray-200 w-full">
    <div class="py-4 flex flex-wrap justify-center md:justify-between items-center sm:gap-4 px-4">
      <div class="flex flex-col md:flex-row items-center space-x-2 mb-2 md:gap-4 sm:mb-0">
        <div class="text-xl sm:text-2xl font-bold text-blue-600">Bluelink</div>
        <div class="flex flex-col">
          <span class="text-sm sm:text-base text-gray-500">블루아이 고객 전용 특가 쇼핑몰</span>
          <span class="text-xs sm:text-sm text-gray-500">협력 파트너 정책 상 재판매는 허용되지 않으며, 재판매 시 법적 책임이 발생할 수 있습니다.</span>
        </div>
      </div>
      <a href="/" class="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base">메인 페이지로</a>
    </div>
  </header>

  <!-- Navigation -->
  <nav class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10 w-full">
    <div class="flex justify-around sm:justify-start sm:space-x-8 py-3 sm:py-4 px-2 sm:px-8 overflow-x-auto">
      {#each categories as c}
        <button
          on:click={() => scrollToSection(c.anchor)}
          class="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-medium whitespace-nowrap px-2">
          {c.name}
        </button>
      {/each}
    </div>
  </nav>

  <!-- 상품이 있는 카테고리만 출력 -->
  {#each categories as category, idx}
    {#if products.some(p => p.categoryId === category.id)}
      <section id={category.anchor} class={"py-8 scroll-mt-12"}>
        <div class="container mx-auto px-4">
          <h2 class="text-xl font-bold mb-6">{category.name}</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {#each products.filter(p => p.categoryId === category.id) as product}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                class="block border border-gray-200 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div class="p-4 flex flex-col h-full justify-between">
                  <h3 class="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <div>
                    {#if getDiscount(product)}
                      <span class="text-sm text-gray-500 line-through">{product.originalPrice}원</span>
                    {/if}
                    <div class="flex items-baseline space-x-2">
                      <span class="text-lg font-bold text-gray-900">{product.price}원</span>
                      {#if getDiscount(product)}
                        <span class="text-sm text-red-600 font-semibold">{getDiscount(product)}</span>
                      {/if}
                    </div>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </section>
    {/if}
  {/each}

  <!-- Footer -->
  <footer class="bg-gray-100 border-t border-gray-200 py-6 sm:py-8 w-full">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div>
          <h4 class="text-sm font-bold text-gray-900 mb-3">회사 정보</h4>
          <p class="text-xs text-gray-600 mb-1">상호명: 블루아이</p>
          <p class="text-xs text-gray-600 mb-1">사업자등록번호: 833-23-00791</p>
          <p class="text-xs text-gray-600 mb-1">주소: 서울특별시 영등포구 국회대로 62길 5, 5층 502호(여의도동, 신태진빌딩)</p>
          <p class="text-xs text-gray-600">전화: 02-2070-8280</p>
        </div>
      </div>
      <div class="mt-6 sm:mt-8 pt-4 sm:pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
        &copy; 2025 블루아이. All rights reserved.
      </div>
    </div>
  </footer>
</div>

{:else}
<!-- 비밀번호 입력 화면 -->
<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-lg shadow-md">
    <div class="text-center">
      <div class="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-600 flex items-center justify-center">
        <LockSolid class="text-white" size="lg" />
      </div>
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-4">블루아이 고객몰</h2>
      <p class="text-sm sm:text-base text-gray-600">블루아이 고객만을 위한 혜택!</p>
    </div>

    {#if showErrorMessage}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        {errorMessage}
      </div>
    {/if}

    <form method="POST" use:enhance>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="password">비밀번호</label>
      <input
        id="password"
        name="password"
        type="password"
        bind:value={password}
        placeholder="비밀번호를 입력해주세요"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button
        type="submit"
        class="w-full mt-6 py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        입장하기
      </button>
    </form>
  </div>
</div>
{/if}

<style>
  /* 간단한 fade-in 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .min-h-screen { animation: fadeIn 0.4s ease-out; }
</style>
