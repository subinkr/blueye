import { API_SERVER } from '$env/static/private';

export async function load({ url }) {
  const type = url.searchParams.get('type');
  const apiUrl = type 
    ? `${API_SERVER}/magazines?type=${type}`
    : `${API_SERVER}/magazines`;

  const response = await fetch(apiUrl);
  const magazines = await response.json();

  return {
    magazines,
  };
}
