import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import './CourseDetail.css'

const courseData = {
  html: {
    title: "HTML Fundamentals",
    video: "https://www.youtube.com/embed/pQN-pnXPaVg",
    lessons: ["Intro to HTML", "Tags & Elements", "Forms", "Final Project"]
  },
  css: {
    title: "CSS & Web Design",
    video: "https://www.youtube.com/embed/OXGznpKZ_sA",
    lessons: ["CSS Basics", "Flexbox", "Grid", "Animations"]
  },
  javascript: {
    title: "JavaScript",
    video: "https://www.youtube.com/embed/PkZNo7MFNFg",
    lessons: ["Variables", "Functions", "DOM", "Events"]
  },
  react: {
    title: "React Development",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    lessons: ["What is React", "Components", "Hooks", "Router"]
  },
  nodejs: {
    title: "Node.js",
    video: "https://www.youtube.com/embed/Oe421EPjeBE",
    lessons: ["Node Intro", "Express", "API", "Deploy"]
  },
  mongodb: {
    title: "MongoDB",
    video: "https://www.youtube.com/embed/9OPP_1YI2gU",
    lessons: ["What is MongoDB", "CRUD", "Mongoose", "Connect"]
  },
  git: {
    title: "Git",
    video: "https://www.youtube.com/embed/Ez8F0nW6S-w",
    lessons: ["Git Init", "Commit", "Branch", "Merge"]
  },
  github: {
    title: "GitHub",
    video: "https://www.youtube.com/embed/apGV9Kg7ics",
    lessons: ["Push Code", "Pull Request", "Collaboration", "Portfolio"]
  }
}

function CourseDetail() {
  const { id } = useParams()
  const course = courseData[id] || courseData.html
  const [active, setActive] = useState(0)

  return (
    <div className="detail-page">
      <Link to="/courses" className="back-link">← Back to Courses</Link>
      <h1 className="detail-title">{course.title}</h1>

      <div className="detail-layout">
        <div className="lesson-list">
          {course.lessons.map((lesson, index) => (
            <div 
              key={index} 
              className={`lesson-item ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="lesson-num">{index + 1}</span>
              <span className="lesson-name">{lesson}</span>
            </div>
          ))}
        </div>

        <div className="video-area">
          <div className="video-box" style={{padding:0, overflow:"hidden"}}>
            <iframe 
              width="100%" 
              height="380" 
              src={course.video} 
              title={course.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <h3 style={{marginTop:"14px", textAlign:"center"}}>Now Playing: {course.lessons[active]}</h3>
          <div className="video-controls">
            <button disabled={active===0} onClick={()=>setActive(active-1)}>← Prev</button>
            <button disabled={active===course.lessons.length-1} onClick={()=>setActive(active+1)}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail