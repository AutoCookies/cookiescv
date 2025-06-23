import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to CookiesCV</h1>
      <p>This is the homepage.</p>
      
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default App
