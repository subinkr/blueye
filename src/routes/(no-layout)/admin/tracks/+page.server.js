import { API_SERVER } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const accessToken = cookies.get('accessToken');
  if (!accessToken) {
    redirect(303, "/login?redirectTo=admin/tracks");
  }

  return { API_SERVER };
}

export const actions = {
  track: async ({ request, cookies }) => {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return redirect(303, "/login?redirectTo=admin/tracks");
    }

    const formData = await request.formData();
    const data = {
      property: formData.get('property'),
      address: formData.get('address')
    };
    
    try {
      const response = await fetch(`${API_SERVER}/tracks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.text();
        return {
          error: error || '부동산 ID 생성에 실패했습니다.'
        };
      }

      const json = await response.json();

      return json;
    } catch (error) {
      return {
        error: '부동산 ID 생성 중 오류가 발생했습니다.'
      };
    }
  },

  remove: async ({ request, cookies }) => {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return redirect(303, "/login?redirectTo=admin/tracks");
    }

    const formData = await request.formData();
    const id = formData.get('id');

    try {
      const response = await fetch(`${API_SERVER}/tracks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 404) {
        return {
          error: '부동산을 찾을 수 없습니다. ID를 확인하세요.'
        };
      }

      if (!response.ok) {
        const error = await response.text();
        return {
          error: error || '부동산 ID 삭제에 실패했습니다.'
        };
      }
      const json = await response.json();

      return json;
    } catch (error) {
      return {
        error: '부동산 ID 삭제 중 오류가 발생했습니다.'
      };
    }
  },

  id: async ({ request, cookies }) => {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return redirect(303, "/login?redirectTo=admin/tracks");
    }

    const formData = await request.formData();
    const data = {
      trackId: formData.get('trackId'),
      content: formData.get('content'),
    };
    
    try {
      const response = await fetch(`${API_SERVER}/tracks/log`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 404) {
        return {
          error: '부동산을 찾을 수 없습니다. ID를 확인하세요.'
        };
      }

      if (!response.ok) {
        const error = await response.text();
        return {
          error: error || '로그 생성에 실패했습니다.'
        };
      }

      const json = await response.json();

      return json;
    } catch (error) {
      return {
        error: '로그 생성 중 오류가 발생했습니다.'
      };
    }
  },

  property: async ({ request, cookies }) => {
    const accessToken = cookies.get('accessToken');
    if (!accessToken) {
      return redirect(303, "/login?redirectTo=admin/tracks");
    }

    const formData = await request.formData();
    const data = {
      property: formData.get('property'),
      content: formData.get('content'),
    };
    
    try {
      const response = await fetch(`${API_SERVER}/tracks/log`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 404) {
        return {
          error: '부동산을 찾을 수 없습니다. 부동산 이름을 확인하세요.'
        };
      }

      if (!response.ok) {
        const error = await response.text();
        return {
          error: error || '로그 생성에 실패했습니다.'
        };
      }

      const json = await response.json();

      return json;
    } catch (error) {
      return {
        error: '로그 생성 중 오류가 발생했습니다.'
      };
    }
  }
};
