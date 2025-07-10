'use client';
import { useState } from 'react';
import Link from 'next/link';
import { handleSignup } from '../../utils/signup/handleSignup.js';
import styles from '../../styles/signup/page.module.css';

/**
 * Signup page component for the CookiesCV application.
 * @returns {JSX.Element} The signup page content
 */
export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { user, error } = await handleSignup(formData);
    setLoading(false);

    if (error) {
      setError(error);
    } else {
      setSuccess(`Registration successful! Welcome, ${user.fullname}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Sign Up for CookiesCV</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role" className={styles.label}>Role (Optional)</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <Link href="/" className={styles.homeLink} aria-label="Back to home">
          Back to Home
        </Link>
        <Link href="/signin" className={styles.signInLink} aria-label="Sign in if you already have an account">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
}