import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleGetJobDetailsByID } from '../utils/handleGetJobDetailsByID';
import '../styles/JobDetails.css'; // 👉 import CSS

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const jobData = await handleGetJobDetailsByID(id);
        setJob(jobData);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  if (loading) return <p>Đang tải chi tiết công việc...</p>;
  if (!job) return <p>Không tìm thấy công việc.</p>;

  return (
    <div className="job-details-container">
      <img src={job.logo_company} alt="Logo công ty" className="job-logo" />
      <h2 className="job-title">{job.title}</h2>
      <p className="job-info"><strong>Chuyên môn:</strong> {job.specializations.join(', ')}</p>
      <p className="job-info"><strong>Dạng việc:</strong> {job.job_types.join(', ')}</p>
      <p className="job-info"><strong>Lương:</strong> {job.salary}</p>
      <p className="job-info"><strong>Địa điểm:</strong> {job.location}</p>
      <p className="job-info"><strong>Mô tả:</strong> {job.description}</p>
    </div>
  );
}

export default JobDetails;
