import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies, params }) {
  if (!cookies.get("accessToken")) {
    redirect(303, `/login?redirectTo=tours/${params.id}/delete`);
  }

  const response = await fetch(`${API_SERVER}/tours/${params.id}`, {
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
    method: "DELETE",
  });
  const { statusCode, message } = await response.json();
  if (statusCode === undefined) {
    redirect(303, `/`);
  } else {
    redirect(303, `/tours/${params.id}`);
  }
}
