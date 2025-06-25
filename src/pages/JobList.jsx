import React, { useEffect, useState } from 'react';
import { fetchPublicJobs } from '../utils/handleGetPublicJob.js';
import { useNavigate } from 'react-router-dom';
import '../styles/JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleClickJob = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="joblist">
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id} onClick={() => handleClickJob(job.id)} style={{ cursor: 'pointer' }}>
              <img
                src={job.logo_company}
                alt="Logo công ty"
                style={{ width: 80, height: 'auto', marginBottom: 10 }}
              />
              <h3>{job.title}</h3>
              <p><strong>Loại:</strong> {job.job_types.join(', ')}</p>
              <p><strong>Chuyên môn:</strong> {job.specializations.join(', ')}</p>
              <p><strong>Lương:</strong> {job.salary}</p>
              <p><strong>Dạng việc:</strong> {job.job_types.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;
