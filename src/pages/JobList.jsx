import React, { useEffect, useState } from 'react';
import { fetchPublicJobs } from '../utils/handleGetPublicJob.js';
import '../styles/JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchPublicJobs(1, 10);
        setJobs(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="joblist">
      <h2>Danh sách công việc</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Loại:</strong> {job.job_types.join(', ')}</p>
              <p><strong>Chuyên môn:</strong> {job.specializations.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;
