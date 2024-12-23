import { API_SERVER } from "$env/static/private";

export async function load({ params }) {
  const reportsRes = await fetch(
    `${API_SERVER}/reports?country=${params.country}`,
    {
      method: "GET",
    }
  );
  const reports = await reportsRes.json();

  return { reports };
}
