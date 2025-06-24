import ENVAR from '../../config/env';

/**
 * Handles user login by calling backend API.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user: object, message: string}>}
 */
export async function handleLogin(email, password) {
  console.log(ENVAR.API_URL);
  const response = await fetch(`${ENVAR.API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  const text = await response.text();
  console.log('RAW RESPONSE TEXT:', text);

  if (!text) {
    throw new Error('Empty response from server');
  }

  try {
    const json = JSON.parse(text);

    if (!response.ok) {
      throw new Error(json.error || 'Login failed');
    }

    return {
      user: json.user,
      message: json.message
    };
  } catch (err) {
    console.error('Failed to parse response as JSON:', text);
    throw new Error('Unexpected server response');
  }
}