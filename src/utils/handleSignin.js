import ENVARS from "@/config/env";

/**
 * Handles user sign-in by calling the authentication API. This will sign in the system with different roles.
 * @param {Object} userData - User sign-in data
 * @param {string} userData.email - User's email address
 * @param {string} userData.password - User's password
 * @returns {Promise<{ user: Object | null, error: string | null }>} - The user data or error message
 */
export async function handleSignin({ email, password }) {
  if (typeof email !== 'string' || typeof password !== 'string') {
    return { user: null, error: 'Invalid input: email and password must be strings' };
  }

  try {
    const response = await fetch(`${ENVARS.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // Include cookies for accessToken and refreshToken
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { user: null, error: errorData.error || 'Failed to sign in' };
    }

    const data = await response.json();
    return { user: data.user, error: null };
  } catch (error) {
    return { user: null, error: error.message || 'Network error occurred' };
  }
}