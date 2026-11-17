import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">🚀Free for every young learner</span>
          <h1>Empowering the Next <br /><span className="blue">Generation of</span><br /><span className="blue">Software Developers</span></h1>
          <p className="hero-desc">
            Learn to code by building real things: Five core courses, thousands of students
            and a community that has your back — from your first HTML tag to full-stack apps.
          </p>
          <div className="hero-btns">
            <Link to="/course" className="btn-primary">📖 Explore Courses</Link>
            <Link to="/register" className="btn-secondary">Join Now →</Link>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800" alt="tech" />
          <div className="floating-card">
            <strong>Learn by Doing</strong>
            <span>Build real world projects</span>
          </div>
        </div>
      </section>

      {/* WHY - CENTER */}
      <section className="why">
        <div className="why-header">
          <span className="why-badge">WHY CHOSSE US</span>
          <h2>Why Tech for Youth?</h2>
          <p>Built by developers who started exactly where you are — curious, ambitious and ready to build.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="icon-box">💻</div>
          <h4>Project-based learning</h4>
          <p>Every track ships with real projects you build, break and fix — no passive theory marathons,just code you can show off.</p></div>
          <div className="why-card">
            <div className="icon-box">📖</div>
            <h4>Free video tracks</h4>
            <p>Curated, full-length video courses for every step of your journey — completely free, forever, on your device.</p></div>
          <div className="why-card">
            <div className="icon-box">🤍</div>
            <h4>Local community support</h4>
          <p>Join study groups, hackathons and mentor sessions with young developers in your area who can cheer you up.</p></div>
        </div>
      </section>

      {/* CTA - Your screenshot */}
      <section className="cta">
        <div className="cta-icon">🚀</div>
        <h2>Your coding journey starts today</h2>
        <p>Create a free account, pick your track and start building — your first project is one click away.</p>
        <div className="cta-btns">
          <Link to="/register" className="btn-primary">Join Now →</Link>
          <Link to="/course" className="btn-secondary">Explore Courses</Link>
        </div>
      </section>
    </div>
  );
}