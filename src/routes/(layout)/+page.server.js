import { API_SERVER } from '$env/static/private';

export async function load() {
  let reports = [];
  try {
    const response = await fetch(`${API_SERVER}/reports`)

    if (response.ok) {
      reports = await response.json();
    }
  } catch (error) {
    // Silently handle error
  }

  return {
    API_SERVER,
    reports
  };
}
