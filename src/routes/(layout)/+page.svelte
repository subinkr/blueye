<script>
  import Reviews from './reviews.svelte';
  import Ceo from './ceo.svelte';
  import MainCarousel from './main-carousel.svelte';
  import Branch from './branch.svelte';
  import Why from './why.svelte';
  import People from './people.svelte';
  import Benefits from './benefits.svelte';
  import Contact from './contact.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  export let data;
  const { API_SERVER } = data;

  onMount(() => {
    if($page.url.hash == '') {
      return;
    }
    const hash = $page.url.hash
    let location = document.querySelector(hash).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'})
  })

  async function downloadReport(id) {
    try {
      const response = await fetch(`${API_SERVER}/reports/${id}/download`);
      if (!response.ok) {
        throw new Error('Failed to get download URL');
      }
      
      const { url } = await response.json();
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading report:', error);
      alert('보고서 다운로드 중 오류가 발생했습니다.');
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
</script>

<div id="main-carousel" class="w-full">
  <MainCarousel />
</div>
<div id="ceo">
  <Ceo />
</div>
<div id="branch" class="w-full py-8 min-h-screen flex flex-col gap-4 justify-center items-center bg-primary-50 dark:bg-black">
  <Branch />
</div>
<div id="people" class="py-20">
  <People />
</div>
<div id="why" class="w-full flex justify-center">
  <Why />
</div>
<div id="reviews" class="w-full py-20 flex flex-col gap-4 bg-primary-50 dark:bg-black">
  <Reviews />
</div>
<div id="benefits" class=" w-full flex flex-col gap-4 justify-center py-20">
  <Benefits />
</div>
<div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="flex justify-between items-center mb-8">
    <h1 class="w-full text-3xl text-center font-bold text-gray-900">최신 보고서</h1>
  </div>

  <div class="w-full flex justify-center">
  {#if data.reports?.length === 0}
    <div class="text-center py-12 bg-white rounded-lg shadow">
      <h3 class="mt-2 text-sm font-medium text-gray-900">등록된 보고서가 없습니다</h3>
    </div>
  {:else}
    <div class="w-full lg:w-8/12 space-y-4">
      {#each data.reports as report (report.id)}
        <button 
          type="button"
          class="w-full text-left bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          on:click={() => downloadReport(report.id)}
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{report.title}</h3>
              <p class="mt-1 text-sm text-gray-500">
                업로드: {formatDate(report.createdAt)}
              </p>
            </div>
            <div class="text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
  </div>
</div>
<div id="contact" class="w-full pt-20 flex flex-col gap-12 justify-center items-center bg-primary-50 dark:bg-black">
  <Contact />
</div>