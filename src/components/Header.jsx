// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h2>CookiesCV</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cv">My CVs</Link> |{" "}
        <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
