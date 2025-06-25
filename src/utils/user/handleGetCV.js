import ENVAR from '../../config/env';

export const handleGetCV = async () => {
  try {
    const res = await fetch(`${ENVAR.API_ROUTE}/user/cv`, {
      method: 'GET',
      credentials: 'include', 
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Không thể lấy danh sách CV');
    }

    const data = await res.json();
    return data.cvs; // Trả về mảng CVs
  } catch (err) {
    console.error('Lỗi khi lấy CVs:', err.message);
    throw err;
  }
};
