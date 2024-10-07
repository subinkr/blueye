export async function load({ params }) {
  const response = await fetch(`http://localhost:4321/houses/${params.id}`, {
    method: "GET",
  });
  const house = await response.json();

  return house;
}
