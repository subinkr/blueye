import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=houses");
  }

  return { API_SERVER };
}

export const actions = {
  house: async ({ request, cookies }) => {
    const data = await request.formData();
    const response = await fetch(`${API_SERVER}/houses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
      body: data,
    });
    const { id } = await response.json();
    redirect(303, `/houses/${id}`);
  },
};
