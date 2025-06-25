import ENVAR from '../config/env';

export const handleGetJobDetailsByID = async (jobId) => {
  try {
    const res = await fetch(`${ENVAR.API_ROUTE}/jobs/${jobId}`, {
      method: 'GET',
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Không thể tải thông tin công việc');
    }

    return data.job;
  } catch (err) {
    console.error('Lỗi khi lấy chi tiết công việc:', err.message);
    throw err;
  }
};
