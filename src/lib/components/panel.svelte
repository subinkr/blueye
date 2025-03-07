<script>
  export let img = null
  export let href = ""
</script>

<a {href} class="hover:cursor-pointer relative w-full h-full flex flex-col justify-between rounded-lg overflow-hidden">
  <div class="w-full h-60 overflow-hidden">
    <img class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110" src={img} alt="" />
  </div>
  <slot />
</a>

<style>
  /* This ensures the container maintains proper dimensions */
  a {
    display: block;
  }
</style>