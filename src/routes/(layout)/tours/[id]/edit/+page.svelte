<script>
  import { TrashBinOutline } from "flowbite-svelte-icons";
  import Title from "$lib/components/title.svelte";
  import { scrollY, headerHeight } from "$lib/scroll-controls/index.ts"
  import { Input, Textarea, Select, Button } from "flowbite-svelte";
	import { enhance } from '$app/forms';
  import { onMount } from "svelte";

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Enter 키 동작을 막음
    }
  }

  export let data;
  export let form;

  const { API_SERVER, tour } = data;

  $: if (form?.message) {
    alert(form.message); // 서버에서 받은 error를 경고로 표시
  }

  let selected;

  let countries = [
    { value: 'korea/seoul', name: '대한민국 서울' },
    { value: 'malaysia/johorbahrucity', name: '말레이시아 조호바루' },
    { value: 'vietnam/hanoi', name: '베트남 하노이' },
    { value: 'vietnam/hochiminhcity', name: '베트남 호치민' },
    { value: 'singapore', name: '싱가포르' },
    { value: 'uae/dubai', name: '아랍에미리트 두바이' },
    { value: 'china/beijing', name: '중국 북경' },
    { value: 'china/shanghai', name: '중국 상해' },
    { value: 'cambodia/phnompenh', name: '캄보디아 프놈펜' },
  ];

  let title = tour.title
  let descriptions = JSON.parse(tour.descriptions)
  let descriptionsString = ''
  let price = tour.price
  let date = tour.date
  let mainImage = tour.mainImage
  let images = tour.images

  $: newImages = []

  const beforeSubmit = () => {
    descriptionsString = JSON.stringify(descriptions)
  };

  onMount(() => {
    for(let i = 0 ; i < countries.length ; i++) {
      if(countries[i].value === tour.city) {
        document.getElementById("select").selectedIndex = i + 1;
        break;
      }
    }
  })
</script>

{#if $scrollY >= $headerHeight}
  <div id="title" class="z-20 fixed top-0 left-0 bg-white dark:bg-gray-900 w-full border-b-2 flex justify-center items-center p-4 text-center">
    <Input placeholder="프로젝트 이름" bind:value={title} on:keydown={handleKeydown} />
  </div>
{/if}

<form method="POST" action="?/tour" class="w-full" use:enhance>
  <div id="title" class="w-full text-center p-4 border-b-2">
    <Input name="title" placeholder="프로젝트 이름" bind:value={title} on:keydown={handleKeydown} />
  </div>

  {#if !mainImage}
    <Input type="file" accept="image/*" on:change={async (e) => {
      if(e.target.files.length) {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        const response = await fetch(`${API_SERVER}/data/image`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const { image } = await response.json();
          mainImage = image
        } else {
          console.error('Image upload failed');
        }
      }
    }}/>
  {:else}
    <div class='relative'>
      <img class="w-full max-h-[50vh] object-cover" src={mainImage} alt={mainImage} />
      <Button on:click={
        () => {
          mainImage = ""
        }
      } class="w-16 h-16 absolute flex justify-center items-center top-0 right-0">
        <TrashBinOutline size='lg' />
      </Button>
    </div>
  {/if}

  <Input name="mainImage" bind:value={mainImage} class="hidden" />
  
  <div>
    <div class="px-4 md:px-20 my-4">
      <div class="flex flex-col gap-8">
        <Title>투어 특징</Title>
        <div class="flex flex-col sm:flex-row gap-8">
          <div class="w-full flex flex-col gap-4">
            <Input name="descriptions" class="hidden" bind:value={descriptionsString} on:keydown={handleKeydown} />
            {#each descriptions as description}
              <div class='relative'>
                <Input size="lg" placeholder="소개 제목" class="font-bold" bind:value={description.title} on:keydown={handleKeydown} />
                <Button on:click={
                  () => {
                    descriptions = descriptions.filter(e => e.id !== description.id)
                  }
                } class="w-16 h-full absolute flex justify-center items-center top-0 right-0">
                  <TrashBinOutline size='lg' />
                </Button>
              </div>
              <Textarea placeholder="소개 내용" bind:value={description.content} />
            {/each}
            <Button class="text-2xl" on:click={
              () => {
                descriptions.push(
                  {id: descriptions.length, title: '', content: ''}
                )
                descriptions = descriptions
              }
            }>+</Button>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-4">
          <div class="w-full flex flex-col justify-start items-center">
            <Title>참가비</Title>
            <Textarea name="price" placeholder={`최대 4인 / 95,000원\n(1인 참가 시에도 95,000원)`} size='lg' class="font-bold" value={price} />
          </div>
          <div class="w-full flex flex-col justify-start items-center">
            <Title>투어일</Title>
            <Textarea name="date" placeholder="1일(4시간) / 상시, 문의 필요" size='lg' class="font-bold" value={date} />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Select id='select' name="city" class="mt-2" items={countries} bind:value={selected} placeholder="부동산 지역 선택" on:keydown={handleKeydown} />
  <Input name="images" bind:value={images} class="hidden" />
  <div id="images" class="w-full flex flex-col items-center">
    {#if images.length}
      {#each images.split('|') as src}
        <div class='relative'>
          <img src={src} alt={src} />
          <Button on:click={
            () => {
              images = images.split('|').filter(image => image !== src).join('|')
            }
          } class="w-16 h-16 absolute flex justify-center items-center top-0 right-0">
            <TrashBinOutline size='lg' />
          </Button>
        </div>
      {/each}
    {/if}
    {#each newImages as newImage}
      <Input type="file" accept="image/*" class={!newImage.value ? "" : 'hidden'} on:change={async (e) => {
        if(e.target.files.length) {
          const formData = new FormData();
          formData.append('file', e.target.files[0]);

          const response = await fetch(`${API_SERVER}/data/image`, {
            method: 'POST',
            body: formData
          });

          if (response.ok) {
            const { image } = await response.json();
            images = images !== '' ? `${images}|${image}` : image
          } else {
            console.error('Image upload failed');
          }
          newImage.value = true
          newImages = newImages
        }
      }}/>
    {/each}
    <Button on:click={() => {
      newImages.push({id: `image-${newImages.length}`, value: ''})
      newImages = newImages
    }} class="w-full text-2xl mt-4">+</Button>
  </div>
  <button type="submit" on:click={beforeSubmit} 
  id="contact" class="bg-primary-700 text-white w-full h-[70px] border-t-2 flex justify-center items-center p-4 hover:cursor-pointer">
    <Title>업로드</Title>
      <!-- <MainButton title="문의하기">
        정보 입력
      </MainButton> -->
  </button>
</form>