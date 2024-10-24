import { API_SERVER } from "$env/static/private";

export async function load({ params }) {
  const housesRes = await fetch(`${API_SERVER}/houses?city=${params.city}`, {
    method: "GET",
  });
  const toursRes = await fetch(`${API_SERVER}/tours?city=${params.city}`, {
    method: "GET",
  });
  const houses = await housesRes.json();
  const tours = await toursRes.json();

  return { houses, tours };
}
