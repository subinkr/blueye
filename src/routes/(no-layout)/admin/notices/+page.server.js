import { redirect, fail } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies, url }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin/notices");
  }

  // 공지사항 목록 조회
  const page = url.searchParams.get("page") || 1;
  const limit = url.searchParams.get("limit") || 10;
  
  try {
    const response = await fetch(`${API_SERVER}/notices?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    });
    
    const notices = await response.json();
    
    return { 
      API_SERVER,
      notices: notices || [],
      currentPage: parseInt(page),
      limit: parseInt(limit)
    };
  } catch (error) {
    return { 
      API_SERVER,
      notices: [],
      currentPage: 1,
      limit: 10
    };
  }
}

export const actions = {
  create: async ({ request, cookies }) => {
    const data = await request.formData();
    const response = await fetch(`${API_SERVER}/notices`, {
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

    return { success: true, id };
  },

  update: async ({ request, cookies }) => {
    const data = await request.formData();
    const id = data.get("id");
    
    const response = await fetch(`${API_SERVER}/notices/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
      body: data,
    });
    const json = await response.json();

    const { statusCode, message } = json;
    if (message !== undefined) {
      return fail(statusCode, { message });
    }

    return { success: true };
  },

  delete: async ({ request, cookies }) => {
    const data = await request.formData();
    const id = data.get("id");
    
    const response = await fetch(`${API_SERVER}/notices/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    });
    const json = await response.json();

    const { statusCode, message } = json;
    if (message !== undefined) {
      return fail(statusCode, { message });
    }

    return { success: true };
  },
};
