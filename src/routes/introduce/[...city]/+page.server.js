import { error } from "@sveltejs/kit";

export function load({ params }) {
  if (params.city !== "malaysia/johorbahrucity") {
    throw error(404, {
      message: "Not found",
      code: "NOT_FOUND",
    });
  }
  return {
    houses: [
      {
        image: "/images/malaysia/rnf/1.jpg",
        title: "R&F Princess Cove 2nd & 3rd Phase (2/3차 분양)",
        date: "~ 2027.12.31",
        price: "$200,000 ~ $500,000",
        location: "Tanjung Puteri 1,Johor Bahru City,Malaysia.",
        id: "",
      },
      {
        image: "/images/malaysia/rnf/2.jpg",
        title: "예시",
        date: "~ 2027.12.31",
        price: "$123,456",
        location: "Tanjung Puteri 1,Johor Bahru City,Malaysia.",
        id: "",
      },
    ],
    trips: [
      {
        image: "/images/malaysia/rnf/3.jpg",
        title: "예시) 조호바루에서 골프와 수영, 명상을 하며 한달살기",
        date: "2024.09.22 ~ 2024.10.22",
        price: "500만원",
        detail: "Tanjung Puteri 1,Johor Bahru City,Malaysia.",
        id: "",
      },
    ],
  };
}
