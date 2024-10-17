import { redirect, fail } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies, params }) {
  if (!cookies.get("accessToken")) {
    redirect(303, `/login?redirectTo=houses/${params.id}/edit`);
  }

  const response = await fetch(`${API_SERVER}/houses/${params.id}`, {
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
    method: "GET",
  });
  const { house } = await response.json();

  return { API_SERVER, house };
}

export const actions = {
  house: async ({ request, cookies, params }) => {
    const data = await request.formData();
    const response = await fetch(`${API_SERVER}/houses/${params.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
      body: data,
    });
    const json = await response.json();

    const { id, statusCode, message } = json;
    if (statusCode !== undefined) {
      return fail(statusCode, { message });
    }

    redirect(303, `/houses/${id}`);
  },
};
