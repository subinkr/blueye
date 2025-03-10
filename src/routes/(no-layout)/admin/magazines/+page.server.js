import { redirect, fail } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  // 액세스 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin/magazines");
  }

  // API_SERVER 환경 변수만 전달
  return { API_SERVER };
}

export const actions = {
  create: async ({ request, cookies }) => {
    // 액세스 토큰이 없으면 로그인 페이지로 리다이렉트
    if (!cookies.get("accessToken")) {
      redirect(303, "/login?redirectTo=admin/magazines");
    }

    try {
      const data = await request.formData();
      const response = await fetch(`${API_SERVER}/magazines`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        return fail(response.status, { 
          message: errorData.message || "매거진 업로드 중 오류가 발생했습니다.",
          success: false 
        });
      }

      const result = await response.json();
      return { success: true, magazine: result };
    } catch (error) {
      console.error("매거진 업로드 중 오류 발생:", error);
      return fail(500, { 
        message: "서버 오류가 발생했습니다. 다시 시도해주세요.",
        success: false 
      });
    }
  },
};
