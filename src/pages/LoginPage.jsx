import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { handleLogin } from '../utils/handleLogin';
import { useAuth } from '../contexts/AuthContext';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const { user } = await handleLogin(email, password);
      setUser(user);
      navigate('/');
    } catch (err) {
      setErrorMsg(err.message || 'Đăng nhập thất bại');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Đăng nhập</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </form>

      <div className="register-wrapper">
        <span>Bạn chưa có tài khoản? </span>
        <Link to="/register" className="register-link">
          Đăng ký
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
