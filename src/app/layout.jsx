import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/layout.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'CookiesCV',
  description: 'Build your career with the best CV and job platform.',
  keywords: ['CookiesCV', 'CV Builder', 'Jobs', 'Career', 'Next.js'],
  authors: [{ name: 'CookiesCV Team' }],
};

/**
 * Root layout component for the CookiesCV application.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The root layout
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 min-h-screen flex flex-col antialiased`}>
        {/* Header */}
        <header className={`${styles.header} bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50`}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row justify-between items-center">
            <Link href="/" className={styles.headerBrand} aria-label="CookiesCV Home">
              CookiesCV
            </Link>
            <nav className={`${styles.navMenu} flex flex-row gap-4`} aria-label="Main navigation">
              <Link href="/jobs" className={styles.navLink} aria-label="Jobs page">Jobs</Link>
              <Link href="/create-cv" className={styles.navLink} aria-label="Create CV page">Create CV</Link>
              <Link href="/about" className={styles.navLink} aria-label="About page">About</Link>
              <Link href="/signup" className={styles.signupButton} aria-label="Sign up">Sign Up</Link>
            </nav>
          </div>
        </header>

        {/* Children */}
        {children}

        {/* Footer */}
        <footer className={`${styles.footer} bg-gradient-to-r from-gray-900 to-indigo-900 text-gray-200 py-6 text-center text-sm`}>
          <div className={`${styles.footerContent} max-w-6xl mx-auto px-4`}>
            <p className="font-medium">© {new Date().getFullYear()} CookiesCV. All rights reserved.</p>
            <div className={`${styles.footerLinks} mt-3 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 text-gray-300`}>
              <Link href="/privacy" className={styles.footerLink} aria-label="Privacy policy">Privacy</Link>
              <Link href="/terms" className={styles.footerLink} aria-label="Terms of service">Terms</Link>
              <Link href="/contact" className={styles.footerLink} aria-label="Contact us">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};