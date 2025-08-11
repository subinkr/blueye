<script>
  import { 
    BellOutline, 
    CalendarMonthOutline,
    ChevronRightOutline
  } from "flowbite-svelte-icons";
  import { 
    Button
  } from "flowbite-svelte";
  import Title from "$lib/components/title.svelte";
  import AlignCenter from "$lib/components/align-center.svelte";

  export let data;
  const { notices, currentPage, limit } = data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
</script>

<svelte:head>
  <title>공지사항 - Blueye</title>
  <meta name="description" content="Blueye 공지사항을 확인하세요." />
</svelte:head>

<div class='px-2 md:px-4 w-full'>
  <div class="max-w-4xl mx-auto my-12">
    <div class="text-center mb-12">
      <Title>공지사항</Title>
      <p class="text-gray-600 dark:text-gray-400 mt-4">
        Blueye의 최신 소식과 중요한 안내사항을 확인하세요.
      </p>
    </div>

    <!-- 공지사항 목록 -->
    <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {#each notices as notice, index}
        <a href="/notices/{notice.id}" class="block">
          <div class="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div class="flex-1">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                {notice.title}
              </h2>
            </div>
            
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
              <CalendarMonthOutline class="w-4 h-4 mr-1" />
              <span>{formatDate(notice.created_at)}</span>
            </div>
          </div>
          
          {#if index < notices.length - 1}
            <hr class="border-gray-200 dark:border-gray-700" />
          {/if}
        </a>
      {:else}
        <div class="text-center py-16">
          <BellOutline class="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            등록된 공지사항이 없습니다
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            새로운 공지사항이 등록되면 이곳에 표시됩니다.
          </p>
        </div>
      {/each}
    </div>

    <!-- 페이지네이션 (향후 구현) -->
    {#if notices.length >= limit}
      <div class="flex justify-center mt-8">
        <Button color="alternative" class="mr-2" disabled={currentPage <= 1}>
          이전
        </Button>
        <Button color="alternative" disabled={notices.length < limit}>
          다음
        </Button>
      </div>
    {/if}
  </div>
</div>
