import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
const isLoggedIn = localStorage.getItem("user") || localStorage.getItem("token");
const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  setIsOpen(false);
  navigate("/login");
  window.location.reload();
};

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo" onClick={()=>setIsOpen(false)}>
          Tech <span>4</span> Youth
        </Link>

        <button className="menu-btn" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <NavLink to="/" onClick={()=>setIsOpen(false)}>Home</NavLink>
        <NavLink to="/course" onClick={()=>setIsOpen(false)}>Courses</NavLink>
  {(() => {
  const saved = localStorage.getItem("user");
  let name = "";
    try {
    const parsed = saved ? JSON.parse(saved) : null;
    if (typeof parsed === "string") name = parsed;
    else name = parsed?.name || parsed?.username || parsed?.email || localStorage.getItem("name") || localStorage.getItem("email") || "";
    if (name && name.includes("@")) name = name.split("@")[0];
  } catch(e) {
    name = saved || localStorage.getItem("email") || "";
    if (name.includes("@")) name = name.split("@")[0];
  }
  const isLoggedIn = localStorage.getItem("user") || localStorage.getItem("token");
  if (isLoggedIn) {
    return (
      <>
        <span className="nav-name">Hi, {name ? name.split(" ")[0] : "User"}</span>
        <NavLink to="/login" onClick={()=>{ localStorage.removeItem("user"); localStorage.removeItem("token"); setIsOpen(false); window.location.reload(); }}>Logout</NavLink>
      </>
    );
  }
  return (
    <>
      <NavLink to="/login" onClick={()=>setIsOpen(false)}>Login</NavLink>
      <NavLink to="/register" onClick={()=>setIsOpen(false)}>Register</NavLink>
    </>
  );
})()}
      </nav>
    </header>
  )
}

export default Navbar