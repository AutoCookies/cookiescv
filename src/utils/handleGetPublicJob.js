import ENVAR from '../config/env';

export const fetchPublicJobs = async (page = 1, limit = 10) => {
  try {
    const url = `${ENVAR.API_ROUTE}/jobs/?page=${page}&limit=${limit}`;
    console.log('Fetching URL:', url);

    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // Nếu backend yêu cầu cookie
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Luôn kiểm tra status trước khi gọi .json()
    if (!response.ok) {
      let errorMsg = 'Failed to fetch jobs';
      try {
        const error = await response.json();
        errorMsg = error?.error || errorMsg;
      } catch (parseErr) {
        // Không làm gì nếu không parse được JSON
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Fetch jobs failed:', err.message);
    throw err;
  }
};
