import ENVAR from '../config/env';

export const handleLogin = async (email, password) => {
  try {
    const response = await fetch(`${ENVAR.API_ROUTE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // để lưu cookie access/refresh token
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error?.error || 'Login failed');
    }

    const data = await response.json();
    return data; // { message: 'Login successful', user }
  } catch (error) {
    console.error('🔒 Login error:', error.message);
    throw error;
  }
};
