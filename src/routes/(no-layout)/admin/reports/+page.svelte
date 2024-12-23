<script>
  const { API_SERVER } = data;
  let file;
  let uploading = false;
  export let data;
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900">보고서 업로드</h1>
  </div>

  <div class="bg-white rounded-lg shadow p-6">
    <form method="POST" enctype="multipart/form-data" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">보고서 제목</label>
        <input
          type="text"
          name="title"
          id="title"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label for="file" class="block text-sm font-medium text-gray-700">PDF 파일</label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          required
          bind:files={file}
        />
      </div>

      {#if data?.error}
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">{data.error}</span>
        </div>
      {/if}

      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={uploading}
      >
        {uploading ? '업로드 중...' : '업로드'}
      </button>
    </form>
  </div>
</div>
