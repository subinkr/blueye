import { API_SERVER } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const accessToken = cookies.get('access_token');
  if (!accessToken) {
    throw redirect(303, '/login');
  }

  return { API_SERVER };
}

export const actions = {
  default: async ({ request, cookies }) => {
    const accessToken = cookies.get('access_token');
    if (!accessToken) {
      throw redirect(303, '/login');
    }

    const formData = await request.formData();
    
    try {
      const response = await fetch(`${API_SERVER}/reports/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      if (!response.ok) {
        const error = await response.text();
        return {
          error: error || '보고서 업로드에 실패했습니다.'
        };
      }

      throw redirect(303, '/');
    } catch (error) {
      if (error instanceof redirect) {
        throw error;
      }
      return {
        error: '보고서 업로드 중 오류가 발생했습니다.'
      };
    }
  }
};
