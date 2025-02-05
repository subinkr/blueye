import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  if (cookies.get("accessToken")) {
    redirect(303, "/");
  }
}

export const actions = {
  default: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const response = await fetch(`${API_SERVER}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { accessToken } = await response.json();
    if (accessToken) {
      cookies.set("accessToken", accessToken, {
        path: "/",
        httpOnly: true,
        secure: true,
      });
    }
    if (url.searchParams.has("redirectTo")) {
      redirect(303, url.searchParams.get("redirectTo"));
    }
  },
};
