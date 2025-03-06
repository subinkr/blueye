<script>
  import { onMount } from 'svelte';
  
  // Stats data
  const stats = [
    { value: 23, label: "경험 연수" },
    { value: 30000, label: "관리 부동산" },
    { value: 9, label: "글로벌 지사" },
    { value: 7, label: "진출 국가" }
  ];
  
  // Animation for counting up
  let counters = stats.map(() => 0);
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
    
    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);
    
    return () => {
      if (statsSection) observer.disconnect();
    };
  });
  
  function animateCounters() {
    stats.forEach((stat, index) => {
      const target = stat.value;
      const duration = 2000; // ms
      const step = target > 100 ? 100 : 1;
      const steps = Math.ceil(target / step);
      const increment = target / steps;
      const stepTime = Math.floor(duration / steps);
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current > target) {
          counters[index] = target;
          clearInterval(timer);
        } else {
          counters[index] = Math.floor(current);
        }
      }, stepTime);
    });
  }
  
  // Format numbers with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<div id="stats-section" class="w-screen bg-gray-900 py-20">
  <div class="container mx-auto px-4 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">글로벌 부동산 전문기업</h2>
      <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      <p class="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">수십 년의 전문성과 글로벌 네트워크를 통해 국제 부동산 투자의 새로운 기준을 제시합니다.</p>
    </div>
    
    <div class="flex flex-wrap w-full">
      {#each stats as stat, i}
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <div class="bg-gray-800 p-8 rounded-sm border-l-4 border-yellow-400 transform transition-transform duration-300 hover:-translate-y-2 h-full">
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="text-4xl font-bold text-white">{stat.value > 999 ? formatNumber(counters[i]) : counters[i]}{stat.value > 999 ? '+' : ''}</span>
                <div class="h-1 w-12 bg-yellow-400 mt-2"></div>
              </div>
            </div>
            <h3 class="text-lg font-medium text-gray-300">{stat.label}</h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* 배경 패럴랙스 효과 */
  #stats-section {
    background-image: linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('/images/main/blueye.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
</style>
