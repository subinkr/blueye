<script>
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { Button, Input } from 'flowbite-svelte';
  import { ArrowLeftOutline } from "flowbite-svelte-icons";
  import { onMount } from 'svelte';

  export let data;
  export let form;

  $: if (form?.message) {
    alert(form.message);
  }

  // 편집기 상태
  let title = data.notice.title;
  let content = data.notice.content;
  let isPinned = data.notice.is_pinned;
  let isActive = data.notice.is_active;
  let editorContainer;
  let quill;

  function goBack() {
    goto('/admin/notices');
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      document.querySelector('form').requestSubmit();
    }
  }

  async function uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:4321/data/image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('이미지 업로드에 실패했습니다.');
      }

      const result = await response.json();
      return result.url;
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      alert('이미지 업로드에 실패했습니다.');
      return null;
    }
  }

  onMount(async () => {
    if (browser && editorContainer) {
      // 브라우저에서만 Quill 로드
      const { default: Quill } = await import('quill');
      await import('quill/dist/quill.snow.css');
      
      // 이미지 핸들러 추가
      const Image = Quill.import('formats/image');
      Image.sanitize = function(url) {
        return url;
      };
      
      quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ],
            handlers: {
              image: function() {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                  const file = input.files[0];
                  if (file) {
                    // 파일 크기 체크 (10MB)
                    if (file.size > 10 * 1024 * 1024) {
                      alert('파일 크기는 10MB 이하여야 합니다.');
                      return;
                    }

                    // 파일 형식 체크
                    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
                    if (!allowedTypes.includes(file.type)) {
                      alert('지원하는 이미지 형식: JPG, PNG, GIF, WebP');
                      return;
                    }

                    const url = await uploadImage(file);
                    if (url) {
                      const range = quill.getSelection();
                      quill.insertEmbed(range.index, 'image', url);
                    }
                  }
                };
              }
            }
          }
        },
        placeholder: '공지사항 내용을 입력하세요...'
      });

      // 기존 내용 설정
      quill.root.innerHTML = content;

      // 내용 변경 감지
      quill.on('text-change', () => {
        content = quill.root.innerHTML;
      });
    }
  });
</script>

<svelte:head>
  <title>공지사항 수정 - Blueye</title>
</svelte:head>

<div class='px-2 md:px-4 w-full min-h-screen bg-gray-50 dark:bg-gray-900'>
  <div class="w-full mx-auto py-4">
    <!-- 헤더 -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-4">
        <Button color="alternative" on:click={goBack} class="flex items-center">
          <ArrowLeftOutline class="w-4 h-4 mr-2" />
          목록으로
        </Button>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">공지사항 수정</h1>
      </div>
      
      <div class="flex items-center space-x-3">
        <Button 
          type="submit" 
          form="notice-form"
          class="bg-blue-600 hover:bg-blue-700"
        >
          수정
        </Button>
      </div>
    </div>

    <form id="notice-form" method="post" action="?/update" use:enhance>
      <div class="space-y-4">
        <!-- 제목 입력 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            제목 *
          </label>
          <Input 
            id="title"
            name="title" 
            bind:value={title}
            placeholder="공지사항 제목을 입력하세요" 
            required 
            class="text-lg font-medium w-full"
          />
        </div>

        <!-- 편집기 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            내용 *
          </label>
          <div 
            bind:this={editorContainer}
            class="min-h-[800px] w-full"
            role="textbox"
            aria-label="공지사항 내용 편집기"
          />
          <input type="hidden" name="content" value={content} />
          <input type="hidden" name="is_pinned" value={isPinned} />
          <input type="hidden" name="is_active" value={isActive} />
        </div>
      </div>
    </form>
  </div>
</div>

<style>
  :global(.ql-editor) {
    min-height: 700px;
    font-size: 16px;
    line-height: 1.6;
    width: 100%;
  }

  :global(.ql-toolbar) {
    border-top: 1px solid #e5e7eb;
    border-left: 1px solid #e5e7eb;
    border-right: 1px solid #e5e7eb;
    border-bottom: none;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
  }

  :global(.ql-container) {
    border: 1px solid #e5e7eb;
    border-radius: 0 0 0.5rem 0.5rem;
    width: 100%;
  }

  :global(.dark .ql-toolbar) {
    border-color: #374151;
    background-color: #1f2937;
  }

  :global(.dark .ql-container) {
    border-color: #374151;
    background-color: #1f2937;
  }

  :global(.dark .ql-editor) {
    color: #f9fafb;
  }
</style>


