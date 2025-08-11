import { API_SERVER } from "$env/static/private";

export async function load({ url }) {
  const page = url.searchParams.get("page") || 1;
  const limit = url.searchParams.get("limit") || 10;
  
  try {
    // 공지사항 조회
    const response = await fetch(`${API_SERVER}/notices?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch notices');
    }
    
    const notices = await response.json();
    
    return { 
      notices: notices || [],
      currentPage: parseInt(page),
      limit: parseInt(limit)
    };
  } catch (error) {
    console.error('Error fetching notices:', error);
    return { 
      notices: [],
      currentPage: 1,
      limit: 10
    };
  }
}
