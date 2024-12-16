<script>
  export let data;
  const { reports, API_SERVER } = data;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {#each reports as report}
    <button 
      type="button"
      class="text-left bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      on:click={() => window.open(`${API_SERVER}/reports/${report.id}/download`, '_blank')}
    >
      {#if report.thumbnailPath}
        <img 
          src={`${API_SERVER}/${report.thumbnailPath}`} 
          alt={report.title}
          class="w-full h-48 object-cover"
        />
      {/if}
      <div class="p-4">
        <h3 class="text-lg font-semibold">{report.title}</h3>
        <p class="text-sm text-gray-500">
          {new Date(report.createdAt).toLocaleDateString()}
        </p>
      </div>
    </button>
  {/each}
</div>
