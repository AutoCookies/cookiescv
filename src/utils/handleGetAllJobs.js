/**
 * Fetches all jobs from the API with pagination support.
 * @param {number} page - The page number to fetch (default: 1)
 * @param {number} limit - The number of jobs per page (default: 10)
 * @returns {Promise<{ jobs: Array, error: string | null }>} - Object containing jobs array or error message
 */

import ENVARS from '../config/env.js';

export const handleGetAllJobs = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${ENVARS.NEXT_PUBLIC_API_URL}/jobs?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { jobs: [], error: errorData.error || 'Failed to fetch jobs' };
    }

    const jobs = await response.json();
    return { jobs, error: null };
  } catch (err) {
    return { jobs: [], error: err.message || 'Network error occurred' };
  }
};