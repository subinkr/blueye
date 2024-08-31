<script>
  import "../app.css";
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
</script>

<Header />
  <div class="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-white dark:bg-gray-900">
    <slot />
  </div>
<Footer />