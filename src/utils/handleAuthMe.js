// utils/handleAuthMe.js
import ENVARS from "@/config/env";

export const handleAuthMe = async () => {
  try {
    const res = await fetch(`${ENVARS.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { user: null, error: errorData.error || 'Failed to authenticate' };
    }

    const data = await res.json();
    return { user: data.user, error: null };
  } catch (err) {
    return { user: null, error: err.message || 'Network error' };
  }
};
