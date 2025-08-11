import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin/notices/create");
  }
  return { API_SERVER };
}

export const actions = {
  create: async ({ request, cookies }) => {
    try {
      const data = await request.formData();
      
      // 필드 검증
      const title = data.get('title')?.toString().trim();
      const content = data.get('content')?.toString().trim();
      const isPinned = data.get('is_pinned') === 'on';
      const isActive = data.get('is_active') === 'on';
      
      if (!title || !content) {
        return { success: false, message: '제목과 내용을 입력해주세요.' };
      }
      
      // API 호출
      const response = await fetch(`${API_SERVER}/notices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.get("accessToken")}`,
        },
        body: JSON.stringify({
          title,
          content,
          is_pinned: isPinned,
          is_active: isActive,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || '공지사항 등록에 실패했습니다.' };
      }
      
      const result = await response.json();
      redirect(303, `/admin/notices?success=true&id=${result.id}`);
    } catch (error) {
      // redirect는 에러가 아니므로 제외
      if (error.status !== 303) {
        console.error('공지사항 등록 에러:', error);
        return { success: false, message: '서버 오류가 발생했습니다.' };
      }
      throw error; // redirect 에러는 다시 던지기
    }
  },
};
