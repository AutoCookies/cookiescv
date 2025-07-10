'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { handleSignup } from '../../utils/handleSignup.js';
import styles from '../../styles/signup/page.module.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const validateForm = (data) => {
    if (!data.fullname.trim()) return 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Invalid email format';
    if (data.password.length < 6) return 'Password must be at least 6 characters';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    const { user, error } = await handleSignup(formData);
    setLoading(false);

    if (error) {
      setError(error);
    } else {
      router.push('/signin'); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? (
              <span className={styles.submitButtonContent}>
                <span className={styles.spinner} />
                Processing...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <Link href="/" className={styles.homeLink}>Back to Home</Link>
        <Link href="/signin" className={styles.signInLink}>Already have an account? Sign in</Link>
      </div>
    </div>
  );
}
