import ENVAR from '../../config/env';

/**
 * Delete a CV by its ID.
 * @param {number|string} cvId - ID of the CV to delete
 * @returns {Promise<string>} - Success message
 */
export async function deleteCV(cvId) {
  const response = await fetch(`${ENVAR.API}/cv/${cvId}`, {
    method: 'DELETE',
    credentials: 'include', // required for auth cookies
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error('Invalid server response');
  }

  if (!response.ok) {
    throw new Error(result.error || 'Failed to delete CV');
  }

  return result.message;
}
