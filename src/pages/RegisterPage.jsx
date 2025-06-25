import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../utils/handleRegister';
import '../styles/RegisterPage.css';

function RegisterPage() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      await handleRegister(form);
      navigate('/login'); // ✅ Đăng ký thành công chuyển sang trang login
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={onSubmit}>
        <h2>Đăng ký</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Họ và tên"
          value={form.fullname}
          onChange={onChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={onChange}
          required
        />
        <button type="submit">Đăng ký</button>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default RegisterPage;
