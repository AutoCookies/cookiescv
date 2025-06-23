import { useState } from 'react';
import { handleRegister } from '../../utils/auth/register';

function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { user, message } = await handleRegister({ fullname, email, password });
      console.log(message);
      setMessage(`Welcome, ${user.fullname}!`);
      // Optionally redirect to login or homepage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          required
        /><br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default Register;