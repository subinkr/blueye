import { redirect, fail } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin/tours");
  }

  return { API_SERVER };
}

export const actions = {
  tour: async ({ request, cookies }) => {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      redirect(303, "/login?redirectTo=admin/tours");
    }

    const data = await request.formData();
    const response = await fetch(`${API_SERVER}/tours`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
      body: data,
    });
    const json = await response.json();

    const { id, statusCode, message } = json;
    if (message !== undefined) {
      return fail(statusCode, { message });
    }

    redirect(303, `/tours/${id}`);
  },
};
