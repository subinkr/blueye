<script>
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Board from "../components/board.svelte";

  export let country;

  const boards = {
    dubai: [
      {title: "두바이 1 제목", summary: "두바이 1 내용 요약", img: "/images/apartment.png"},
      {title: "두바이 2 제목", summary: "두바이 2 내용 요약", img: "/images/apartment.png"},
      {title: "두바이 3 제목", summary: "두바이 3 내용 요약", img: "/images/apartment.png"},
    ],
    cambodia: [
      {title: "캄보디아 1 제목", summary: "캄보디아 1 내용 요약", img: "/images/apartment.png"},
      {title: "캄보디아 2 제목", summary: "캄보디아 2 내용 요약", img: "/images/apartment.png"},
      {title: "캄보디아 3 제목", summary: "캄보디아 3 내용 요약", img: "/images/apartment.png"},
    ],
    china: [
      {title: "중국 1 제목", summary: "중국 1 내용 요약", img: "/images/apartment.png"},
      {title: "중국 2 제목", summary: "중국 2 내용 요약", img: "/images/apartment.png"},
      {title: "중국 3 제목", summary: "중국 3 내용 요약", img: "/images/apartment.png"},
    ],
    vietnam: [
      {title: "베트남 1 제목", summary: "베트남 1 내용 요약", img: "/images/apartment.png"},
      {title: "베트남 2 제목", summary: "베트남 2 내용 요약", img: "/images/apartment.png"},
      {title: "베트남 3 제목", summary: "베트남 3 내용 요약", img: "/images/apartment.png"},
    ],
    singapore: [
      {title: "싱가포르 1 제목", summary: "싱가포르 1 내용 요약", img: "/images/apartment.png"},
      {title: "싱가포르 2 제목", summary: "싱가포르 2 내용 요약", img: "/images/apartment.png"},
      {title: "싱가포르 3 제목", summary: "싱가포르 3 내용 요약", img: "/images/apartment.png"},
    ],
    malaysia: [
      {title: "말레이시아 1 제목", summary: "말레이시아 1 내용 요약", img: "/images/apartment.png"},
      {title: "말레이시아 2 제목", summary: "말레이시아 2 내용 요약", img: "/images/apartment.png"},
      {title: "말레이시아 3 제목", summary: "말레이시아 3 내용 요약", img: "/images/apartment.png"},
    ],
  };
</script>

<div class="flex flex-col md:flex-row justify-center items-center m-4 gap-4">
  {#each boards[country] as board}
    <Board {...board}>
      <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Board>
  {/each}
</div>