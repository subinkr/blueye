export const countries = [
  {
    title: "말레이시아",
    name: "malaysia",
    status: "개발중",
    child: [
      {
        title: "조호바루",
        name: "johorbahrucity",
        href: "/introduce/malaysia/johorbahrucity",
      },
    ],
  },
  {
    title: "아랍에미리트",
    name: "uae",
    status: "정보필요",
    child: [
      {
        title: "두바이",
        name: "dubai",
        href: "/introduce/uae/dubai",
      },
    ],
  },
  {
    title: "캄보디아",
    name: "cambodia",
    status: "개발예정",
    child: [
      {
        title: "프놈펜",
        name: "phnompenh",
        href: "/introduce/cambodia/phnompenh",
      },
    ],
  },
  {
    title: "중국",
    name: "china",
    status: "정보필요",
    child: [
      {
        title: "북경",
        name: "beijing",
        href: "/introduce/china/beijing",
      },
      {
        title: "상해",
        name: "shanghai",
        href: "/introduce/china/shanghai",
      },
    ],
  },
  {
    title: "베트남",
    name: "vietnam",
    status: "정보필요",
    child: [
      {
        title: "하노이",
        name: "hanoi",
        href: "/introduce/vietnam/hanoi",
      },
      {
        title: "호치민",
        name: "hochiminhcity",
        href: "/introduce/vietnam/hochiminhcity",
      },
    ],
  },
  {
    title: "싱가포르",
    name: "singapore",
    href: "/introduce/singapore",
    status: "정보필요",
    child: [],
  },
  {
    title: "대한민국",
    name: "korea",
    status: "정보필요",
    child: [
      {
        title: "서울",
        name: "seoul",
        href: "/introduce/korea/seoul",
      },
    ],
  },
];

export const menus = [
  {
    title: "회사소개",
    status: "완료",
    href: "/",
    child: [
      {
        title: "대표인사말",
        href: "/#ceo",
      },
      // {
      //   title: "주요연혁",
      //   href: "/introduce#history",
      // },
      {
        title: "지사소개",
        href: "/#branch",
      },
      {
        title: "블루아이 사람들",
        href: "/#people",
      },
    ],
  },
  ...countries,
  {
    title: "고객센터",
    status: "정보필요",
    child: [
      {
        title: "공지사항",
        href: "/contact/announce",
      },
      {
        title: "설명회 & 현장투어",
        href: "/contact/ask",
      },
      {
        title: "Q&A",
        href: "/contact/qna",
      },
    ],
  },
];
