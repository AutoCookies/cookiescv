import ENVAR from '../../config/env';

/**
 * Uploads a CV PDF file to the server.
 * @param {File} file - The selected file object (only PDF allowed)
 * @returns {Promise<Object>} - Returns { message, cv }
 */
export async function handleUploadCV(file) {
  if (!file) {
    throw new Error('No file selected');
  }

  if (file.type !== 'application/pdf') {
    throw new Error('Only PDF files are allowed');
  }

  const formData = new FormData();
  formData.append('cv', file); // "cv" must match backend's multer.single('cv')

  const response = await fetch(`${ENVAR.API_URL}/user/cv/upload`, {
    method: 'POST',
    credentials: 'include', // send cookies for token-based auth
    body: formData
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error('Invalid server response');
  }

  if (!response.ok) {
    throw new Error(result.error || 'Upload failed');
  }

  return result; // { message, cv }
}
