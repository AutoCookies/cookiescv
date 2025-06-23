const API = import.meta.env.VITE_API_URL;

/**
 * Register a new user by calling the backend API.
 * @param {Object} formData - { fullname, email, password }
 * @returns {Promise<Object>} - { user, message }
 */
export async function handleRegister(formData) {
  const response = await fetch(`http://localhost:3000/v1/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // allow httpOnly cookies
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error || 'Registration failed');
  }

  return await response.json(); // returns { message, user }
}
