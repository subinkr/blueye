import { error } from "@sveltejs/kit";
import { API_SERVER } from "$env/static/private";

export async function load({ params }) {
  const { id } = params;
  
  try {
    const response = await fetch(`${API_SERVER}/notices/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw error(404, '공지사항을 찾을 수 없습니다.');
      }
      throw error(500, '공지사항을 불러오는 중 오류가 발생했습니다.');
    }
    
    const notice = await response.json();
    
    // 줄바꿈 처리
    if (notice.content) {
      notice.content = notice.content.replace(/\n/g, '<br>');
    }
    
    return { notice };
  } catch (err) {
    if (err.status) {
      throw err;
    }
    throw error(500, '공지사항을 불러오는 중 오류가 발생했습니다.');
  }
}
