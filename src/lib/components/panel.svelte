<script>
  export let img = null
  export let href = ""
</script>

<a {href} class="hover:cursor-pointer relative w-full h-full flex flex-col justify-between hover:shadow-xl hover:shadow-gray-500 rounded-lg">
  <img class="object-cover w-full h-60 rounded-t-lg" src={img} alt="" />
  <slot />
</a>