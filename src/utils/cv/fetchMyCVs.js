import ENVAR from '../../config/env';

/**
 * Fetch all CVs uploaded by the authenticated user.
 * @returns {Promise<Array>} - List of user CVs
 */
export async function fetchMyCVs() {
  const response = await fetch(`${ENVAR.API}/cv`, {
    method: 'GET',
    credentials: 'include', // ensures httpOnly cookies (token) are sent
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error('Invalid response from server');
  }

  if (!response.ok) {
    throw new Error(result.error || 'Failed to fetch CVs');
  }

  return result.cvs;
}
