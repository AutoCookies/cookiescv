import ENV from '@/config/env';

export const fetchPublicJobs = async (page = 1, limit = 10) => {
  try {
    const res = await fetch(`${ENV.API_URL}/jobs?page=${page}&limit=${limit}`);
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch public jobs:', error.message);
    return [];
  }
};