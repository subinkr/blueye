import { error } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies, params }) {
  let uploader = false;

  const response = await fetch(`${API_SERVER}/houses/${params.id}`, {
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
    method: "GET",
  });
  const { house, statusCode, loginUserId } = await response.json();

  if (statusCode === 404) {
    error(404, "Not found");
  }

  if (house.writer === loginUserId) {
    uploader = true;
  }

  return { house, uploader };
}
