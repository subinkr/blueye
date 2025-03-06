<script>
	import Carousel from "$lib/components/carousel.svelte";
  import { AngleLeftOutline, AngleRightOutline } from 'flowbite-svelte-icons';

	const images = [
    {
      alt: '두바이',
      src: '/images/main/blueye.jpg',
      title: "GLOBAL REAL ESTATE EXCELLENCE",
      subtitle: "Elevating International Property Investment Since 2000",
      content1: "30,000+ Successful Transactions",
      content2: "Premium Properties in 9 Global Cities",
      textColor: "text-white"
    },
  ];
</script>

<Carousel autoplay="10000">
  {#each images as image, index (index)}
    <div class={"w-full h-full relative"}>
      <!-- Premium gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-5"></div>
      
      <div class={"w-full z-10 absolute flex flex-col items-center justify-center h-full " + image.textColor}>
        <div class="container mx-auto px-4 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Elegant header badge -->
            <div class="inline-block px-6 py-2 mb-6 border-b border-t border-yellow-400 text-sm tracking-widest uppercase font-light">BLUEYE GLOBAL REAL ESTATE</div>
            
            <!-- Main headline with elegant typography -->
            <h1 class="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight">{image.title}</h1>
            
            <!-- Refined subtitle -->
            <p class="text-xl lg:text-2xl mb-10 font-light tracking-wide">{image.subtitle}</p>
            
            <!-- Premium stats display -->
            <div class="hidden sm:flex justify-center gap-12 mb-10">
              <div class="flex flex-col items-center">
                <span class="text-yellow-400 font-bold text-4xl mb-2">23</span>
                <span class="text-sm uppercase tracking-wider font-light">Years of Excellence</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-yellow-400 font-bold text-4xl mb-2">30K+</span>
                <span class="text-sm uppercase tracking-wider font-light">Premium Properties</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-yellow-400 font-bold text-4xl mb-2">9</span>
                <span class="text-sm uppercase tracking-wider font-light">Global Locations</span>
              </div>
            </div>
            
            <!-- Premium CTA button -->
            <div class="flex justify-center">
              <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-4 px-10 rounded-none transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <img class={"w-full object-cover h-full min-h-[700px]"} src={image.src} alt={image.alt} />
    </div>
  {/each}
  
  <!-- Premium navigation controls -->
  <div class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 transition-all duration-300 rounded-full" slot="left-control">
    <AngleLeftOutline size="xl" class="text-white" />
  </div>
  <div class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 transition-all duration-300 rounded-full" slot="right-control">
    <AngleRightOutline size="xl" class="text-white" />
  </div>
</Carousel>

<style>
  /* Elegant animations for the hero section */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  h1 {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }
  
  p {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
  }
  
  .hidden.sm\:flex {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }
  
  button {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.8s;
    opacity: 0;
  }
  
  .inline-block {
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
</style>