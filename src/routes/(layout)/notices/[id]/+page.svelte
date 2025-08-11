<script>
  import { 
    CalendarMonthOutline,
    StarOutline,
    ClockOutline
  } from "flowbite-svelte-icons";
  import { 
    Badge
  } from "flowbite-svelte";

  export let data;
  const { notice } = data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
</script>

<svelte:head>
  <title>{notice.title} - 공지사항 - Blueye</title>
  <meta name="description" content={notice.content.substring(0, 160)} />
</svelte:head>

<div class="min-h-screen w-full  bg-gray-50 dark:bg-gray-900">
  <div class="w-full max-w-none mx-auto px-40 py-8">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <!-- 헤더 -->
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
        <div class="flex items-center justify-between mb-4">
          {#if notice.is_pinned}
            <div class="flex items-center">
              <StarOutline class="w-5 h-5 text-yellow-300" />
              <Badge color="red" class="ml-2 bg-red-500">고정</Badge>
            </div>
          {/if}
          <div class="text-white/80 text-sm">
            {formatRelativeDate(notice.created_at)}
          </div>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold text-white leading-tight">
          {notice.title}
        </h1>
      </div>

      <!-- 메타 정보 -->
      <div class="px-8 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div class="flex items-center">
            <CalendarMonthOutline class="w-4 h-4 mr-2" />
            <span>작성일: {formatDate(notice.created_at)}</span>
          </div>
          
          {#if notice.updated_at !== notice.created_at}
            <div class="flex items-center">
              <ClockOutline class="w-4 h-4 mr-2" />
              <span>수정일: {formatDate(notice.updated_at)}</span>
            </div>
          {/if}
        </div>
      </div>

      <!-- 내용 -->
      <div class="px-8 py-8">
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {@html notice.content}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  p {
    margin: 0 0;
  }

  .prose img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .prose blockquote {
    border-left: 4px solid #8b5cf6;
    padding-left: 1rem;
    font-style: italic;
    color: #6b7280;
    margin: 1rem 0;
    background-color: #f8fafc;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
  }

  .dark .prose blockquote {
    background-color: #1f2937;
  }
  
  .prose ul, .prose ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }
  
  .prose li {
    margin-bottom: 0.5rem;
  }

  .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
    color: inherit;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .prose h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .prose h2 {
    font-size: 1.75rem;
    line-height: 1.3;
  }

  .prose h3 {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  .prose p {
    margin: 0;
    line-height: 1.7;
    font-size: 1.125rem;
  }

  .prose a {
    color: #8b5cf6;
    text-decoration: underline;
    font-weight: 500;
  }

  .prose a:hover {
    color: #7c3aed;
  }

  .prose strong {
    color: inherit;
    font-weight: 700;
  }

  .prose em {
    color: inherit;
    font-style: italic;
  }

  .prose code {
    background-color: #f3f4f6;
    color: #1f2937;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-weight: 600;
  }

  .dark .prose code {
    background-color: #374151;
    color: #f9fafb;
  }

  .prose pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    border-radius: 0.375rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .prose th, .prose td {
    border: 1px solid #e5e7eb;
    padding: 0.5rem;
    text-align: left;
  }

  .prose th {
    background-color: #f9fafb;
    font-weight: 600;
  }

  .dark .prose th {
    background-color: #374151;
  }

  .dark .prose td {
    border-color: #374151;
  }
</style>
