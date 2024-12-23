import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin");
  }
}

export const actions = {
  username: async ({ request, cookies }) => {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      redirect(303, "/login?redirectTo=admin");
    }

    const data = await request.formData();
    const newUsername = data.get("newUsername");
    await fetch(`${API_SERVER}/users`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newUsername }),
    });
    redirect(303, `/`);
  },

  password: async ({ request, cookies }) => {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      redirect(303, "/login?redirectTo=admin");
    }
    
    const data = await request.formData();
    const newPassword = data.get("newPassword");
    const repeatPassword = data.get("repeatPassword");
    await fetch(`${API_SERVER}/users`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword, repeatPassword }),
    });
    redirect(303, `/`);
  },
};
