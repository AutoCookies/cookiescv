// src/pages/home/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to CookiesCV</h1>
      <p>Find jobs or upload your CV now!</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/cv/upload">
          <button style={{ marginRight: '1rem' }}>📤 Upload Your CV</button>
        </Link>

        <Link to="/cv">
          <button>📄 My Uploaded CVs</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
