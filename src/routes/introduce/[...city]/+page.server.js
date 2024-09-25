import { error } from "@sveltejs/kit";

export function load({ params }) {
  if (params.city !== "malaysia/johorbahrucity") {
    throw error(404, {
      message: "Not found",
      code: "NOT_FOUND",
    });
  }
  return {
    house: [
      {
        image: "/images/malaysia/rnf/1.jpg",
        title: "R&F Princess Cove 2nd & 3rd Phase (2/3차 분양)",
        averagePricePerM2: "$4,100",
        location: "Tanjung Puteri 1,Johor Bahru City,Malaysia.",
        href: "/house",
      },
    ],
    trip: [],
  };
}
