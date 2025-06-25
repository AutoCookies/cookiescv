import ENVAR from '../config/env';

export const handleRegister = async ({ fullname, email, password, role = 'user' }) => {
  try {
    const response = await fetch(`${ENVAR.API_ROUTE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({ fullname, email, password, role }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error?.error || 'Registration failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('📛 Registration error:', error.message);
    throw error;
  }
};
