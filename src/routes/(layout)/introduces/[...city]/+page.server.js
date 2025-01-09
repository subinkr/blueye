import { API_SERVER } from "$env/static/private";

export async function load({ params, url }) {
  const q = url.searchParams.get('q');
  let houses = [];
  let tours = [];

  // q가 houses면 매물만, tours면 투어만, 그 외에는 모두 가져오기
  if (q === 'houses') {
    const housesRes = await fetch(`${API_SERVER}/houses?city=${params.city}`, {
      method: "GET",
    });
    houses = await housesRes.json();
  } else if (q === 'tours') {
    const toursRes = await fetch(`${API_SERVER}/tours?city=${params.city}`, {
      method: "GET",
    });
    tours = await toursRes.json();
  } else {
    // q가 없거나 다른 쿼리일 때는 모든 데이터 가져오기
    const [housesRes, toursRes] = await Promise.all([
      fetch(`${API_SERVER}/houses?city=${params.city}`, {
        method: "GET",
      }),
      fetch(`${API_SERVER}/tours?city=${params.city}`, {
        method: "GET",
      })
    ]);
    houses = await housesRes.json();
    tours = await toursRes.json();
  }

  return { houses, tours };
}
