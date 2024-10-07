import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const response = await fetch("http://localhost:4321/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { accessToken } = await response.json();
    if (accessToken) {
      cookies.set("accessToken", accessToken, { path: "/", httpOnly: true });
    }
    if (url.searchParams.has("redirectTo")) {
      redirect(303, url.searchParams.get("redirectTo"));
    }
  },
};
