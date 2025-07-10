import ENVARS from '../../config/env.js';

/**
 * Registers a new user by calling the auth register API.
 * @param {Object} userData - User registration data
 * @param {string} userData.fullname - User's full name
 * @param {string} userData.email - User's email address
 * @param {string} userData.password - User's password
 * @param {string} [userData.role='user'] - User's role (optional, defaults to 'user')
 * @returns {Promise<{ user: Object, error: string | null }>} - Object containing registered user data or error message
 */
export const handleSignup = async ({ fullname, email, password, role = 'user' }) => {
  try {
    const response = await fetch(`${ENVARS.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, email, password, role }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { user: null, error: errorData.error || 'Failed to register user' };
    }

    const data = await response.json();
    return { user: data.user, error: null };
  } catch (err) {
    return { user: null, error: err.message || 'Network error occurred' };
  }
};