import styles from '../styles/loading.module.css';

export default function Loading() {
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