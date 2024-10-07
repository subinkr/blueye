export async function load({ params }) {
  const housesRes = await fetch(
    `http://localhost:4321/houses?city=${params.city}`,
    {
      method: "GET",
    }
  );
  const houses = await housesRes.json();
  const trips = [];

  return { houses, trips };
}
