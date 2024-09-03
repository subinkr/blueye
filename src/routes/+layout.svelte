<script>
  import "../app.css";
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
</script>

<div class="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col justify-center">
  <Header />
    <div class="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <slot />
    </div>
  <Footer />
</div>