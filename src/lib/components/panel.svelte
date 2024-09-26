<script>
  export let img = null
  export let href = ""
</script>

<a {href} class="hover:cursor-pointer relative w-60 h-full flex flex-col justify-between border-gray-100 text-black hover:shadow-xl rounded-lg">
  <img class="object-cover rounded-t-lg" src={img} alt="" />
  <slot />
</a>