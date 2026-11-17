import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

const handleSubmit = async (e) => {
  e.preventDefault()
  if (form.password !== form.confirm) {
    alert("Passwords don't match!")
    return
  }

  try {
    const res = await fetch("https://capstone-tee.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account created! Please login");
    window.location.href = "/login";
  } catch (err) {
    alert("Cannot connect to backend. Is backend running?");
  }
};

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>
        <p className="register-sub">Join Tech for Youth and start learning today.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text"
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            required
          />

          <label>Email Address</label>
          <input 
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            required
          />

          <label>Password</label>
          <input 
            type="password"
            placeholder="Create a password"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            required
          />

          <label>Confirm Password</label>
          <input 
            type="password"
            placeholder="Confirm your password"
            value={form.confirm}
            onChange={(e) => setForm({...form, confirm: e.target.value})}
            required
          />

          <button type="submit" className="register-btn">Create Account</button>
        </form>

        <p className="have-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
