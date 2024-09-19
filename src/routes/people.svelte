<script>
  import { Marquee, Heading } from 'flowbite-svelte'

  const peoples = [
    {name:"배양희", position: "CEO", team: "블루아이(Blueye)" },
    {name:"표병선", position: "대표", team: "미디어 솔루션" },
    {name:"유영주", position: "부대표", team: "상하이 본사" },
    {name:"마성철", position: "대표", team: "상하이센터" },
    {name:"박성우", position: "대표", team: "아시아총본부" },
    {name:"전인우", position: "전무", team: "전략기획실/시장개발" },
    {name:"박청송", position: "상무", team: "아시아 시장개발" },
    {name:"성주현", position: "지사장", team: "서울글로벌센터" },
    {name:"최광선", position: "소장", team: "서울 블루아시아 공인중개사" },
    {name:"추경철", position: "지사장", team: "말레이시아 조호바루" },
    {name:"백현종", position: "대표", team: "호치민아시아센터" },
    {name:"김서연", position: "지사장", team: "호치민아시아센터" },
    {name:"김용희", position: "지사장", team: "싱가포르" },
    {name:"정미란", position: "이사", team: "7개국 해외부동산/고객관리" },
    {name:"강희경", position: "이사", team: "주재원 임대 전문" },
    {name:"유영미", position: "센터장", team: "상하이 푸동(浦东)" },
    {name:"오금화", position: "팀장", team: "푸리 & 런헝 임대 전문" },
    {name:"최현옥", position: "팀장", team: "얼서우 매매 전문/부동산 법률 자문" },
    {name:"임송옥", position: "팀장", team: "7개국 계약팀" },
    {name:"이지영", position: "팀장", team: "상하이 임대/매매 전문" },
    {name:"김미영", position: "팀장", team: "홍췐루, 구베이 임대" },
    {name:"김매", position: "매니저", team: "단기임대 중국고객 전담" },
    {name:"김국화", position: "매니저", team: "계약팀" },
    {name:"林巧灵", position: "매니저", team: "상하이 구베이" },
    {name:"텅궈량", position: "팀장", team: "상하이 수리콜" },
    {name:"최현경", position: "지사장", team: "중국 베이징" },
    {name:"서정림", position: "매니저", team: "중국 베이징" },
    {name:"배길환", position: "지사장", team: "중국 시안" },
    {name:"정규식", position: "이사", team: "캄보디아 프놈펜 TK STAR" },
    {name:"Max", position: "매니저", team: "캄보디아 프놈펜지사" },
    {name:"이희주", position: "매니저", team: "말레이시아 조호바루지사" },
    {name:"김성준", position: "대표원장", team: "교육컨설팅" },
    {name:"이인선", position: "부장", team: "한중분양팀" },
    {name:"손을성", position: "차장", team: "한중분양팀" },
    {name:"김범수", position: "단장", team: "호치민아시아센터" },
    {name:"박상미", position: "팀장", team: "호치민아시아센터 유학부" },
    {name:"Thao", position: "매니저", team: "호치민아시아센터" },
    {name:"서혜정", position: "이사", team: "더리치 미디어" },
    {name:"박명은", position: "대표", team: "베트남 하노이지사" },
    {name:"양소연", position: "이사", team: "베트남 하노이지사" },
    {name:"주칠성", position: "팀장", team: "시안 매매전문" },
    {name:"설지영", position: "매니저", team: "항저우" },
    {name:"이수연", position: "팀장", team: "서울센터 계약팀" },
    {name:"정효령", position: "매니저", team: "중국 공식계정관리" },
    {name:"이선균", position: "팀장", team: "너디블루사업부" },
    {name:"강수빈", position: "매니저", team: "너디블루사업부" },
    {name:"이경섭", position: "대표", team: "코칭(한국)" },
    {name:"김종각", position: "대표(변호사)", team: "베한타임즈(베트남)" },
    {name:"이창규", position: "대표", team: "에듀아시아(상하이)" },
  ]
</script>

<div class="flex flex-col gap-8">
  <h2 class="text-xl font-extrabold text-center sm:text-2xl md:text-3xl">블루아이 사람들</h2>
  <Marquee speed={0.5} hoverSpeed={0}>
    {#each peoples as people, peopleId}
    <div class="w-full flex flex-col justify-center items-center">
      <img alt={people.name} src={"/images/people/" + peopleId + ".jpg"} />
      <div class="text-center">
        <div class="whitespace-nowrap">{people.team}</div>
        <div class="flex gap-1 justify-center items-center">
          <div class="text-xl">{people.name}</div>
          <div>{people.position}</div>
        </div>
      </div>
    </div>
    {/each}
  </Marquee>
</div>