export const countries = [
  {
    title: "말레이시아",
    name: "malaysia",
    child: [
      {
        title: "조호바루",
        name: "johorbahrucity",
        href: "/introduces/malaysia/johorbahrucity",
      },
    ],
  },
  {
    title: "아랍에미리트",
    name: "uae",
    child: [
      {
        title: "두바이",
        name: "dubai",
        href: "/introduces/uae/dubai",
      },
    ],
  },
  {
    title: "캄보디아",
    name: "cambodia",
    child: [
      {
        title: "프놈펜",
        name: "phnompenh",
        href: "/introduces/cambodia/phnompenh",
      },
    ],
  },
  {
    title: "중국",
    name: "china",
    child: [
      // {
      //   title: "베이징",
      //   name: "beijing",
      //   href: "/introduces/china/beijing",
      // },
      {
        title: "상하이",
        name: "shanghai",
        href: "/introduces/china/shanghai",
      },
    ],
  },
  {
    title: "베트남",
    name: "vietnam",
    child: [
      // {
      //   title: "하노이",
      //   name: "hanoi",
      //   href: "/introduces/vietnam/hanoi",
      // },
      {
        title: "호치민",
        name: "hochiminhcity",
        href: "/introduces/vietnam/hochiminhcity",
      },
    ],
  },
  // {
  //   title: "싱가포르",
  //   name: "singapore",
  //   href: "/introduces/singapore",
  //   child: [
  //     {
  //       title: "싱가포르",
  //       name: "singapore",
  //       href: "/introduces/singapore",
  //     },
  //   ],
  // },
  {
    title: "대한민국",
    name: "korea",
    child: [
      {
        title: "서울",
        name: "seoul",
        href: "/introduces/korea/seoul",
      },
    ],
  },
];

export const magazines = {
  title: "매거진",
  href: "/magazines",
  child: [
    {
      title: "더 리치",
      href: "/magazines?type=litchi",
      child: [],
    },
    {
      title: "에듀 아시아",
      href: "/magazines?type=edu",
      child: [],
    },
    {
      title: "베한 타임즈",
      href: "/magazines?type=times",
      child: [],
    },
    {
      title: "더 팩트",
      href: "/magazines?type=fact",
      child: [],
    },
    {
      title: "상속 인사이트",
      href: "/magazines?type=insight",
      child: [],
    },
  ],
};

export const menus = [
  {
    title: "회사소개",
    href: "/",
    child: [
      {
        title: "대표인사말",
        href: "/#ceo",
      },
      // {
      //   title: "주요연혁",
      //   href: "/introduces#history",
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
  magazines,
  {
    title: "고객몰",
    href: "/mall",
    child: [],
  },
];
