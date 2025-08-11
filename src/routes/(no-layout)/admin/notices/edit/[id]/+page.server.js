import { redirect } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ cookies, params }) {
  if (!cookies.get("accessToken")) {
    redirect(303, "/login?redirectTo=admin/notices/edit/" + params.id);
  }

  try {
    const response = await fetch(`${API_SERVER}/notices/${params.id}`, {
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    });

    if (!response.ok) {
      redirect(303, "/admin/notices");
    }

    const notice = await response.json();
    return { notice };
  } catch (error) {
    // redirect는 에러가 아니므로 제외
    if (error.status !== 303) {
      console.error("공지사항 로드 에러:", error);
    }
    redirect(303, "/admin/notices");
  }
}

export const actions = {
  update: async ({ request, cookies, params }) => {
    try {
      const data = await request.formData();
      const { id } = params;
      
      // 필드 검증
      const title = data.get('title')?.toString().trim();
      const content = data.get('content')?.toString().trim();
      const isPinned = data.get('is_pinned') === 'on';
      const isActive = data.get('is_active') === 'on';
      
      if (!title || !content) {
        return { success: false, message: '제목과 내용을 입력해주세요.' };
      }
      
      // API 호출
      const response = await fetch(`${API_SERVER}/notices/${id}`, {
        method: "PUT",
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
        return { success: false, message: errorData.message || '공지사항 수정에 실패했습니다.' };
      }
      
      const result = await response.json();
      redirect(303, `/admin/notices?success=true&updated=true`);
    } catch (error) {
      // redirect는 에러가 아니므로 제외
      if (error.status !== 303) {
        console.error('공지사항 수정 에러:', error);
        return { success: false, message: '서버 오류가 발생했습니다.' };
      }
      throw error; // redirect 에러는 다시 던지기
    }
  },
};
