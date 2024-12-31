import { API_SERVER } from '$env/static/private';

export async function load({ url }) {
  const country = url.searchParams.get('country');
  const apiUrl = country 
    ? `${API_SERVER}/reports?country=${country}`
    : `${API_SERVER}/reports`;

  const response = await fetch(apiUrl);
  const reports = await response.json();

  return {
    reports,
  };
}
