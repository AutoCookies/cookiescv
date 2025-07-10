'use client';
import Link from 'next/link';
import styles from '../../styles/signup/error.module.css';

export default function SignupError() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Oops! Something went wrong</h1>
        <p className={styles.message}>
          We're sorry, but there was a problem while loading the signup page.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.button}>
            Back to Home
          </Link>
          <Link href="/signup" className={styles.link}>
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
