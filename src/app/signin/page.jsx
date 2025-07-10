'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { handleSignin } from '../../utils/handleSignin.js';
import styles from '../../styles/signin/page.module.css';
import Link from 'next/link';

export default function SigninPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const validateForm = (data) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Please enter a valid email address';
        if (data.password.length < 6) return 'Password must be at least 6 characters';
        return null;
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // hoạt động đúng vì không bị debounce
        setLoading(true);
        setError(null);

        const validationError = validateForm(formData);
        if (validationError) {
            setError(validationError);
            setLoading(false);
            return;
        }

        const { user, error } = await handleSignin(formData);
        setLoading(false);

        if (error) {
            setError(
                error === 'Email not found' ? 'No account found with this email' :
                    error === 'Invalid password' ? 'Incorrect password' : error
            );
            return;
        }

        if (!user?.role) {
            setError('Invalid user data received');
            return;
        }

        if (user.role === 'user') {
            router.push('/');
        } else if (user.role === 'admin') {
            router.push('/admin');
        } else {
            setError('Unknown user role');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Sign In to CookiesCV</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            className={styles.input}
                            disabled={loading}
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.submitButton} disabled={loading}>
                        {loading ? (
                            <span className={styles.submitButtonContent}>
                                <span className={styles.spinner} />
                                Processing...
                            </span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
                <Link href="/signup" className={styles.signUpLink} aria-label="Sign up if you don't have an account">
                    Don’t have an account? Sign up
                </Link>
            </div>
        </div>
    );
}