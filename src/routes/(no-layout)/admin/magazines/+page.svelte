<script>
  import { Input, Textarea, Button, Select, Alert } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import Title from '$lib/components/title.svelte';
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  
  export let form;

  // 폼 입력 바인딩
  let title = '';
  let type = 'insight';
  let redirectUrl = '';
  let description = '';
  let published = getCurrentDate();
  let thumbnailFile = null;
  let thumbnailPreview = null;
  
  // 알림 상태
  let showAlert = false;
  let alertMessage = '';
  let alertType = 'success';
  let isUploading = false;

  // 매거진 타입 옵션
  const magazineTypes = [
    { value: 'litchi', name: '더 리치' },
    { value: 'edu', name: '에듀 아시아' },
    { value: 'times', name: '베한 타임즈' },
    { value: 'fact', name: '더 팩트' },
    { value: 'insight', name: '상속 인사이트' },
  ];

  // 현재 날짜를 YYYY-MM-DD 형식으로 반환
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 파일 선택 핸들러
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
      thumbnailFile = null;
      thumbnailPreview = null;
      return;
    }

    if (!file.type.match('image.*')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    thumbnailFile = file;
    
    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      thumbnailPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // 알림 메시지 표시
  function showAlertMessage(message, type = 'success') {
    alertMessage = message;
    alertType = type;
    showAlert = true;
    setTimeout(() => {
      showAlert = false;
    }, 5000);
  }

  // 폼 결과 처리
  onMount(() => {
    if (form?.message) {
      showAlertMessage(form.message, 'error');
    }
  });
</script>

<div class="p-4 md:p-8">
  <div class="max-w-6xl mx-auto">
    <Title>매거진 관리</Title>
    
    <!-- 알림 메시지 -->
    {#if showAlert}
      <div class="mb-6">
        <Alert color={alertType === 'success' ? 'green' : 'red'}>
          <span class="font-medium">
            {#if alertType === 'success'}
              ✓ 성공:
            {:else}
              ⚠ 오류:
            {/if}
          </span>
          {alertMessage}
        </Alert>
      </div>
    {/if}

    <!-- 매거진 업로드 폼 -->
    <div class="w-screen md:w-[800px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
      <h2 class="text-xl font-bold mb-6 text-gray-800 dark:text-white">새 매거진 업로드</h2>
      
      <form 
        method="POST" 
        action="?/create" 
        enctype="multipart/form-data"
        use:enhance={() => {
          // 제출 전 유효성 검사
          if (!title || !redirectUrl || !thumbnailFile) {
            showAlertMessage('필수 항목을 모두 입력해주세요.', 'error');
            return false;
          }
          
          isUploading = true;
          
          return async ({ result, update }) => {
            isUploading = false;
            
            if (result.type === 'success') {
              title = '';
              type = 'insight';
              redirectUrl = '';
              description = '';
              published = getCurrentDate();
              thumbnailFile = null;
              thumbnailPreview = null;
              if (document.getElementById('thumbnail')) {
                document.getElementById('thumbnail').value = '';
              }
              showAlertMessage('매거진이 성공적으로 업로드되었습니다.');
            } else if (result.type === 'failure') {
              const message = result?.data?.message || '업로드 중 오류가 발생했습니다.';
              showAlertMessage(message, 'error');
            }
            
            update();
          };
        }}
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
          <!-- 왼쪽 컬럼: 썸네일 업로드 -->
          <div class="flex flex-col gap-6">
            <div>
              <label for="thumbnail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">썸네일 이미지 <span class="text-red-500">*</span></label>
              <div class="flex items-center justify-center w-full">
                <label for="thumbnail" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                  {#if thumbnailPreview}
                    <img src={thumbnailPreview} alt="썸네일 미리보기" class="object-contain w-full h-full" />
                  {:else}
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5v10m5-5H5"/>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">클릭하여 업로드</span></p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (최대 2MB)</p>
                    </div>
                  {/if}
                  <input 
                    id="thumbnail" 
                    name="thumbnail" 
                    type="file" 
                    accept="image/*" 
                    class="hidden" 
                    on:change={handleFileChange} 
                  />
                </label>
              </div>
            </div>
            
            <div>
              <label for="published" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">발행일</label>
              <Input 
                id="published" 
                name="published" 
                type="date" 
                bind:value={published} 
                class="w-full text-base"
              />
            </div>
          </div>
          
          <!-- 오른쪽 컬럼: 텍스트 정보 -->
          <div class="flex flex-col gap-6">
            <div>
              <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목 <span class="text-red-500">*</span></label>
              <Input 
                id="title" 
                name="title" 
                placeholder="매거진 제목" 
                bind:value={title} 
                required 
                class="w-full text-base"
              />
            </div>
            
            <div>
              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">종류</label>
              <Select 
                id="type" 
                name="type" 
                items={magazineTypes} 
                bind:value={type} 
                class="w-full text-base"
              />
            </div>
            
            <div>
              <label for="redirectUrl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이동 URL <span class="text-red-500">*</span></label>
              <Input 
                id="redirectUrl" 
                name="redirectUrl" 
                placeholder="https://example.com/magazine" 
                bind:value={redirectUrl} 
                required 
                class="w-full text-base"
              />
            </div>
            
            <div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">설명</label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="매거진에 대한 설명을 입력하세요" 
                bind:value={description} 
                rows="4" 
                class="w-full text-base"
              />
            </div>
          </div>
        </div>
        
        <div class="mt-8 flex justify-end">
          <Button type="submit" disabled={isUploading} class="px-6 py-2.5 text-base">
            {#if isUploading}
              <Spinner class="mr-3" size="4" />
              업로드 중...
            {:else}
              매거진 업로드
            {/if}
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>
