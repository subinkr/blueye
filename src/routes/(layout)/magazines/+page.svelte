<script>
  export let magazines = [];
  let email = '';
  let name = '';
  let agreePrivacy = false;
  let agreeAds = false;
</script>

<div class="p-4">
  {#each magazines as magazine}
    <div class="mb-4">
      <h2 class="text-xl font-bold">{magazine.title}</h2>
      <p class="text-sm text-gray-600">Type: {magazine.type}</p>
      <a class="text-blue-500 hover:underline" href={magazine.redirectUrl}>Read more</a>
    </div>
  {/each}

  <div class="flex gap-8 justify-center items-center">
    <!-- <img src="/images/main/blueye.jpg" alt="Magazines" class="w-80 h-80 object-cover" /> -->
     <div class="flex justify-center items-center w-80 h-80">매거진 구독 기능 개발중입니다.</div>
    <form class="mt-8 space-y-4">
      <div>
        <label class="block mb-1" for="email">이메일*</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="email" id="email" bind:value={email} required />
      </div>
      <div>
        <label class="block mb-1" for="name">이름*</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="name" bind:value={name} required />
      </div>
      <div>
        <input class="mr-2" type="checkbox" id="privacy" bind:checked={agreePrivacy} required />
        <label for="privacy">(필수) 개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div>
        <input class="mr-2" type="checkbox" id="ads" bind:checked={agreeAds} required />
        <label for="ads">(필수) 광고성 정보 수신에 동의합니다.</label>
      </div>
      <button class="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600" type="submit">무료 구독하기</button>
    </form>
  </div>
</div>

<style>
  /* Tailwind CSS used, no custom styles needed */
</style>
