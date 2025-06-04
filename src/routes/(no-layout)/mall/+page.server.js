/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  // The valid token for access
  const validToken = "bluelink";

  // Check if the query parameter exists
  const queryToken = url.searchParams.get("token");

  // If there's a valid query token, return authorized
  if (queryToken === validToken) {
    return {
      authorized: true,
    };
  }

  // Otherwise, return unauthorized
  return {
    authorized: false,
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, url }) => {
    const data = await request.formData();
    const password = data.get("password");
    const validPassword = "bluelink";

    if (password === validPassword) {
      // Redirect to the same page with token
      return {
        success: true,
        token: validPassword,
      };
    }

    return {
      success: false,
      message:
        "블루아이 고객만 이용할 수 있는 페이지입니다. 담당자에게 비밀번호를 확인해주세요.",
    };
  },
};
