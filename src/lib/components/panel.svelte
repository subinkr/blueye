<script>
  export let img = null
  export let href = ""
</script>

<a {href} class="hover:cursor-pointer relative w-60 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-gray-500 rounded-lg">
  <img class="object-cover h-32 rounded-t-lg" src={img} alt="" />
  <slot />
</a>