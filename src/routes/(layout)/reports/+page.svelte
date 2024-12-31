<script>
  import { research } from '$lib/data/menus';
  import { page } from '$app/stores';
  export let data;

  $: reports = data.reports;
  $: country = $page.url.searchParams.get('country');
  $: currentCountry = country 
    ? research[0].child.find(item => item.name === country)
    : null;
</script>

<div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="flex justify-between items-center mb-8">
    <h1 class="w-full text-3xl text-center font-bold text-gray-900">
      {currentCountry ? `${currentCountry.title} 보고서` : '전체 보고서'}
    </h1>
  </div>

  {#if !reports || reports.length === 0}
    <div class="text-center">
      <h3 class="mt-2 text-sm font-medium text-gray-900">등록된 보고서가 없습니다</h3>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each reports as report (report.id)}
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <a 
            href={report.filePath}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {#if report.thumbnailPath}
              <img 
                src={report.thumbnailPath}
                alt={report.title}
                class="w-full h-48 object-cover"
              />
            {/if}
            <div class="p-4 flex flex-col justify-between">
              <h2 class="text-xl font-semibold mb-2 line-clamp-1">{report.title}</h2>
              <p class="text-gray-600 text-sm">
                {new Date(report.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  {/if}
</div>