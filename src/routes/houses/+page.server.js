import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=houses");
  }
}

export const actions = {
  house: async ({ request, cookies }) => {
    const data = await request.formData();
    console.log(data);
    const response = await fetch(`http://localhost:4321/houses`, {
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
