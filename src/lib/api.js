const API_BASE = 'http://localhost/sveltekit-api'; // hoặc đổi thành thư mục PHP của bạn trong htdocs

/**
 * Gọi API đăng nhập
 * @param {string} username
 * @param {string} password
 */
export async function loginUser(username, password) {
  const res = await fetch(`${API_BASE}/login.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  return await res.json();
}

/**
 * Gọi API đăng ký
 * @param {string} username
 * @param {string} password
 */
export async function signupUser(username, password) {
  const res = await fetch(`${API_BASE}/signup.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  return await res.json();
}
