<script>
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Board from "../components/board.svelte";

  const boards =[
    
      {title: "48세 남성, 중국 주재원 / 중국 상하이 런헝허빈청", summary: "해외 부동산 투자는 처음이라 많이 걱정했는데, 블루아이의 전문적인 상담과 현지 지원 덕분에 안전하게 투자를 마칠 수 있었습니다. 특히 계약 과정에서의 투명성과 신속한 대응이 인상적이었습니다. 감사합니다.",},
      {title: "52세 여성, 말레이시아 이민 / 말레이시아 조호르바루 Macrolink", summary: "말레이시아 부동산 시장에 관심이 있었지만 정보가 부족해서 망설이고 있었습니다. 블루아이를 통해 상세한 시장 분석과 투자의 장단점을 알 수 있었고, 현지 지사의 도움으로 복잡한 절차도 쉽게 진행할 수 있었습니다.",},
      {title: "35세 남성, 동남아 해외 영업 / 캄보디아 프놈펜 Morgan Tower", summary: "캄보디아의 성장 가능성을 보고 투자를 결심했는데, 블루아이의 체계적인 지원과 현지 전문성 덕분에 성공적으로 매매를 완료했습니다. 현지 법률과 문화에 대한 상세한 안내로 안심하고 투자할 수 있었습니다.",},
      {title: "57세 한국 회사원 / 베트남 호치민 Diamond Lotus", summary: "베트남 부동산 투자에 대한 막연한 두려움이 있었지만, 블루아이의 현지 전문가들이 제공한 인사이트로 안심하고 투자할 수 있었습니다. 이후에도 지속적인 사후 관리로 큰 도움을 받고 있습니다.",},
  
  ]
</script>

<div class="flex flex-wrap justify-center items-center m-4 gap-4">
  {#each boards as board}
    <Board {...board}>
      <!-- <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button> -->
    </Board>
  {/each}
</div>