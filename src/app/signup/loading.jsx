import styles from '../../styles/signup/loading.module.css';

/**
 * Loading page component for the /signup route in the CookiesCV application.
 * @returns {JSX.Element} The loading page content
 */
export default function LoadingPage() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner} />
        <h2 className={styles.loadingTitle}>Loading Sign Up...</h2>
        <p className={styles.loadingDescription}>Please wait while we prepare the sign-up form for you.</p>
      </div>
    </div>
  );
}