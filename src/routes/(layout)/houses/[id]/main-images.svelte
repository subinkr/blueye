<script>
  import { Button } from "flowbite-svelte";
  import { onMount, afterUpdate } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

  export let title;
  export let images;
  let showModal = false;
  let currentImageIndex = 0;
  let isFullscreen = false;
  let touchStartX = 0;
  let touchEndX = 0;
  let imageElement;
  let modalContainer;
  let showControls = true;
  let controlsTimeout;
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(controlsTimeout);
    };
  });
  
  afterUpdate(() => {
    // Prevent body scrolling when modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  function handleKeydown(e) {
    if (!showModal) return;
    
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  }
  
  function handleMouseMove() {
    if (!showModal) return;
    
    showControls = true;
    clearTimeout(controlsTimeout);
    
    controlsTimeout = setTimeout(() => {
      if (isFullscreen) {
        showControls = false;
      }
    }, 3000);
  }
  
  function showImage(index) {
    currentImageIndex = index;
    showModal = true;
  }
  
  function closeModal() {
    showModal = false;
    if (isFullscreen) {
      exitFullscreen();
    }
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }
  
  function enterFullscreen() {
    if (modalContainer) {
      if (modalContainer.requestFullscreen) {
        modalContainer.requestFullscreen();
      } else if (modalContainer.webkitRequestFullscreen) {
        modalContainer.webkitRequestFullscreen();
      } else if (modalContainer.msRequestFullscreen) {
        modalContainer.msRequestFullscreen();
      }
    }
  }
  
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }
  
  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }
  
  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextImage();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevImage();
    }
  }
  
  function handleBackdropClick(e) {
    // Only close if the click was directly on the backdrop, not on its children
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  
  function handleBackdropKeydown(e) {
    // Close modal on Enter or Space key press
    if (e.key === 'Enter' || e.key === ' ') {
      closeModal();
    }
  }
</script>

{#if showModal}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black"
    transition:fade={{ duration: 200 }}
    on:click={handleBackdropClick}
    on:keydown={handleBackdropKeydown}
    role="button"
    tabindex="0"
    aria-label="Close image gallery"
  >
    <div 
      bind:this={modalContainer}
      class="relative w-full h-full bg-black flex flex-col"
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:mousemove={handleMouseMove}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
    >
      <!-- Header -->
      {#if showControls}
        <div 
          class="flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent text-white z-10 transition-opacity duration-300"
          transition:fade={{ duration: 200 }}
        >
          <h3 class="text-xl font-semibold">{title} ({currentImageIndex + 1}/{images.length})</h3>
          <button 
            on:click={closeModal} 
            class="p-2 rounded-full hover:bg-gray-700/70 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      {/if}
      
      <!-- Main Image Container -->
      <div class="flex-1 flex justify-center items-center p-4 relative">
        <img 
          bind:this={imageElement}
          src={images[currentImageIndex]} 
          alt={`${title} - image ${currentImageIndex + 1}`} 
          class="max-h-[85vh] max-w-full object-contain transition-all duration-300"
        />
        
        <!-- Navigation Arrows -->
        {#if showControls}
          <button 
            on:click={prevImage} 
            class="absolute left-4 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 z-10 hover:scale-110"
            aria-label="Previous image"
            transition:fade={{ duration: 200 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            on:click={nextImage} 
            class="absolute right-4 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 z-10 hover:scale-110"
            aria-label="Next image"
            transition:fade={{ duration: 200 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        {/if}
        
        <!-- Thumbnails (now absolutely positioned) -->
        {#if showControls}
          <div 
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-black/60 w-full flex justify-center gap-2 overflow-x-auto transition-opacity duration-300 max-w-[90%]"
            transition:fade={{ duration: 200 }}
          >
            {#each images as img, i}
              <button 
                on:click={() => currentImageIndex = i}
                class="w-14 h-14 rounded-md overflow-hidden transition-all duration-200 {i === currentImageIndex ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-black scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'}"
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} class="w-full h-full object-cover" />
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<div class="relative">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
    <!-- Main large image -->
    <div class="lg:col-span-2 h-[400px] relative group overflow-hidden rounded-lg">
      <button class="w-full h-full" on:click={() => showImage(0)}>
        {#if images.length > 0}
          <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={images[0]} alt={title} />
        {/if}
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <span class="bg-black/70 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            전체 이미지 보기
          </span>
        </div>
      </button>
    </div>
    
    <!-- Side images grid -->
    <div class="hidden lg:grid grid-rows-2 gap-2 h-[400px]">
      <button class="relative group overflow-hidden rounded-lg" on:click={() => showImage(1)}>
        {#if images.length > 1}
          <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={images[1]} alt={title} />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        {:else}
          <div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 dark:text-gray-400">이미지 없음</span>
          </div>
        {/if}
      </button>
      
      <button class="relative group overflow-hidden rounded-lg" on:click={() => showImage(2)}>
        {#if images.length > 2}
          <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={images[2]} alt={title} />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {#if images.length > 3}
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <span class="text-white text-xl font-bold transition-transform duration-300 group-hover:scale-110">+{images.length - 3} 더보기</span>
            </div>
          {/if}
        {:else}
          <div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 dark:text-gray-400">이미지 없음</span>
          </div>
        {/if}
      </button>
    </div>
  </div>
  
  <!-- Mobile image counter and button -->
  <div class="lg:hidden absolute right-4 bottom-4 flex items-center gap-2">
    <span class="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
      {images.length}장의 사진
    </span>
    <Button size="sm" color="dark" on:click={() => showModal = true} class="!rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </Button>
  </div>
</div>

<style>
  :global(.fullscreen-modal) {
    max-width: 100% !important;
    width: 100% !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  :global(.fullscreen-modal .modal-content) {
    height: 100vh !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
    background-color: black !important;
  }
</style>