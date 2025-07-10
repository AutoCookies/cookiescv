'use client';
import Link from 'next/link';
import styles from '../styles/page.module.css';

/**
 * Home page component for the CookiesCV application.
 * @returns {JSX.Element} The home page content
 */
export default function HomePage() {
  return (
    <main className={`${styles.mainContent} max-w-7xl mx-auto px-6 py-16 text-center relative z-10`}>
      {/* Gradient Background Bubbles */}
      <div className={styles.backgroundBubbles}>
        <div className={`${styles.bubble} absolute -top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full opacity-30`} />
        <div className={`${styles.bubble} absolute top-10 right-0 w-72 h-72 bg-pink-200 rounded-full opacity-30`} />
      </div>

      {/* Title & Description */}
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.title} text-4xl sm:text-5xl font-extrabold mb-4 leading-tight`}>
          <span className={styles.titlePrefix}>Welcome to </span>
          <span className={styles.titleHighlight}>
            CookiesCV
          </span>
        </h1>
        <p className={`${styles.description} text-lg sm:text-xl mb-10 max-w-2xl mx-auto`}>
          Build your professional CV and explore curated job opportunities tailored just for you.
        </p>

        {/* Buttons */}
        <div className={`${styles.buttonGroup} flex flex-col sm:flex-row justify-center gap-4 mb-16`}>
          <Link href="/jobs" className={styles.primaryButton} aria-label="Browse job listings">
            Browse Jobs
          </Link>
          <Link href="/create-cv" className={styles.secondaryButton} aria-label="Create your CV">
            Create Your CV
          </Link>
        </div>

        {/* Features */}
        <section className={`${styles.featuresSection} mt-10 max-w-3xl mx-auto text-left bg-white bg-opacity-90 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur`}>
          <h2 className={styles.featuresTitle}>Why choose CookiesCV?</h2>
          <ul className={styles.featuresList}>
            <li>
              <span className={styles.featureHighlight}>Simple & Modern:</span> Intuitive CV
              builder with beautiful templates.
            </li>
            <li>
              <span className={styles.featureHighlight}>Curated Jobs:</span> Verified listings
              tailored to your skillset.
            </li>
            <li>
              <span className={styles.featureHighlight}>Privacy-First:</span> Your data is
              always under your control.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}