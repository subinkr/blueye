<script>
  import { 
    BellOutline, 
    TrashBinOutline, 
    EditOutline, 
    PlusOutline,
    EyeOutline,
    EyeSlashOutline,
    StarOutline
  } from "flowbite-svelte-icons";
  import { 
    Button, 
    Modal, 
    Input, 
    Textarea, 
    Table, 
    TableHead, 
    TableHeadCell, 
    TableBody, 
    TableBodyRow, 
    TableBodyCell,
    Checkbox,
    Card,
    Badge
  } from "flowbite-svelte";
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import Title from "$lib/components/title.svelte";

  export let data;
  export let form;

  $: if (form?.message) {
    alert(form.message);
  }

  $: if (form?.success) {
    location.reload();
  }

  const { notices, currentPage, limit } = data;

  // 모달 상태
  let deleteModal = false;
  let selectedNotice = null;

  function openDeleteModal(notice) {
    selectedNotice = notice;
    deleteModal = true;
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function formatRelativeDate(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '오늘';
    if (diffDays === 2) return '어제';
    if (diffDays <= 7) return `${diffDays - 1}일 전`;
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)}주 전`;
    return formatDate(dateString);
  }

  function truncateContent(content, maxLength = 100) {
    // HTML 태그 제거
    const plainText = content.replace(/<[^>]*>/g, '');
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + '...';
  }
</script>

<div class='px-2 md:px-4 w-full min-h-screen bg-gray-50 dark:bg-gray-900'>
  <div class="w-full mx-auto py-4">
    <!-- 헤더 -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center">
        <BellOutline class="w-8 h-8 text-purple-500 mr-3" />
        <Title>공지사항 관리</Title>
      </div>
      <Button on:click={() => goto('/admin/notices/create')} class="bg-purple-600 hover:bg-purple-700">
        <PlusOutline class="w-4 h-4 mr-2" />
        새 공지사항 작성
      </Button>
    </div>

    <!-- 공지사항 목록 -->
    <div class="space-y-4">
      {#each notices as notice}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-start justify-between">
            <div class="flex-1 min-w-0">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {notice.title}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                {truncateContent(notice.content, 150)}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{formatRelativeDate(notice.created_at)}</span>
                </div>
                
                <div class="flex items-center space-x-2">
                  <Button 
                    size="xs" 
                    on:click={() => goto(`/admin/notices/edit/${notice.id}`)} 
                    color="blue"
                    class="flex items-center"
                  >
                    <EditOutline class="w-3 h-3 mr-1" />
                    수정
                  </Button>
                  <Button 
                    size="xs" 
                    on:click={() => openDeleteModal(notice)} 
                    color="red"
                    class="flex items-center"
                  >
                    <TrashBinOutline class="w-3 h-3 mr-1" />
                    삭제
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-16 text-center">
          <BellOutline class="w-20 h-20 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            등록된 공지사항이 없습니다
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-lg mb-6">
            새로운 공지사항을 작성해보세요.
          </p>
          <Button on:click={() => goto('/admin/notices/create')} color="purple">
            <PlusOutline class="w-4 h-4 mr-2" />
            첫 공지사항 작성하기
          </Button>
        </div>
      {/each}
    </div>

    <!-- 페이지네이션 (향후 구현) -->
    {#if notices.length >= limit}
      <div class="flex justify-center mt-8">
        <div class="flex items-center space-x-2">
          <Button color="alternative" class="px-4 py-2" disabled={currentPage <= 1}>
            이전
          </Button>
          <span class="px-4 py-2 text-gray-600 dark:text-gray-400">
            페이지 {currentPage}
          </span>
          <Button color="alternative" class="px-4 py-2" disabled={notices.length < limit}>
            다음
          </Button>
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- 공지사항 삭제 모달 -->
<Modal bind:open={deleteModal} title="공지사항 삭제">
  <div class="p-6">
    <div class="flex items-center mb-4">
      <TrashBinOutline class="w-8 h-8 text-red-500 mr-3" />
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        공지사항 삭제
      </h3>
    </div>
    
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      정말로 이 공지사항을 삭제하시겠습니까?
    </p>
    
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
      <p class="font-medium text-red-800 dark:text-red-200 mb-2">
        삭제할 공지사항:
      </p>
      <p class="text-red-700 dark:text-red-300">
        "{selectedNotice?.title}"
      </p>
    </div>
    
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
      이 작업은 되돌릴 수 없습니다. 삭제된 공지사항은 복구할 수 없습니다.
    </p>
    
    <form method="post" action="?/delete" use:enhance>
      <input type="hidden" name="id" value={selectedNotice?.id} />
      <div class="flex justify-end space-x-3">
        <Button color="alternative" on:click={() => deleteModal = false}>
          취소
        </Button>
        <Button type="submit" color="red" class="flex items-center">
          <TrashBinOutline class="w-4 h-4 mr-2" />
          삭제
        </Button>
      </div>
    </form>
  </div>
</Modal>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
