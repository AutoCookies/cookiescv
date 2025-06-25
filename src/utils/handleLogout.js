import ENVAR from '../config/env';

export const handleLogout = async () => {
  try {
    const res = await fetch(`${ENVAR.API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Logout failed');
    }

    const data = await res.json();
    return data; // { message: 'Logged out successfully' }
  } catch (err) {
    console.error('Logout failed:', err.message);
    throw err;
  }
};
