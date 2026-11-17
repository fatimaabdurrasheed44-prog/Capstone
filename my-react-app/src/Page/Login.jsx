import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || 'Login failed');
        return;
      }
      localStorage.setItem('token', data.token);
      const userName = data.user?.name || data.user?.username || data.name || email.split('@')[0];
localStorage.setItem('user', JSON.stringify({ name: userName, email: email }));
localStorage.setItem('name', userName);
localStorage.setItem('email', email);
      navigate('/course');
    } catch (err) {
      setMessage('Cannot connect to server');
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p className="login-sub">Login to continue your learning journey.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
{message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="no-account">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login 