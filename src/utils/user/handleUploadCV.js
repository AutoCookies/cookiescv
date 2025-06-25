import ENVAR from '../../config/env';

export const handleUploadCV = async (file) => {
  try {
    const formData = new FormData();
    formData.append('cv', file);

    const res = await fetch(`${ENVAR.API_ROUTE}/user/cv/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include', 
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Tải lên CV thất bại');
    }

    return data.cv; 
  } catch (err) {
    console.error('Lỗi khi upload CV:', err.message);
    throw err;
  }
};
