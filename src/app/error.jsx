'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/error.module.css';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <html>
      <body className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.title}>Oops! Something went wrong.</h1>
          <p className={styles.description}>
            We encountered an unexpected error. Our team has been notified.
          </p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => reset()}
              className={styles.retryButton}
            >
              Try Again
            </button>
            <Link href="/" className={styles.homeButton}>
              Go Home
            </Link>
          </div>
          <p className={styles.errorDetails}>
            Error details: <span className={styles.errorMessage}>{error?.message || 'Unknown error'}</span>
          </p>
        </div>
      </body>
    </html>
  );
}