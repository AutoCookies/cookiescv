'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import { handleGetAllJobs } from '../utils/handleGetAllJobs';

/**
 * Home page component for the CookiesCV application, displaying jobs in a grid.
 * @returns {JSX.Element} The home page content with job listings
 */
export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const { jobs, error } = await handleGetAllJobs(1, 10);
      setJobs(jobs);
      setError(error);
      setLoading(false);
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner} />
          <h2 className={styles.loadingTitle}>Loading...</h2>
          <p className={styles.loadingDescription}>Please wait while we load the content for you.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
          <p className={styles.errorDescription}>{error}</p>
          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.homeButton}>Go Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className={`${styles.mainContent} max-w-7xl mx-auto px-6 py-16 text-center`}>
      <section className={styles.jobsSection}>
        <h2 className={styles.sectionTitle}>Featured Jobs</h2>
        <div className={styles.jobsGrid}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              {job.logo_company && (
                <img src={job.logo_company} alt={`${job.title} logo`} className={styles.jobLogo} />
              )}
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobDetails}>Salary: {job.salary || 'Not specified'}</p>
              <p className={styles.jobDetails}>Types: {job.job_types.join(', ') || 'None'}</p>
              <p className={styles.jobDetails}>Specializations: {job.specializations.join(', ') || 'None'}</p>
            </div>
          ))}
        </div>
        <Link href="/jobs" className={styles.viewAllButton} aria-label="View all jobs">
          View All Jobs
        </Link>
      </section>
    </main>
  );
}