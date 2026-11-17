import './Courses.css'
import { Link } from 'react-router-dom'
const courses = [
  { title: "HTML Fundamentals", desc: "Learn how to create website structures.", link: "https://www.youtube.com/results?search_query=net+ninja+html" },
  { title: "CSS & Web Design", desc: "Learn how to style beautiful websites.", link: "https://www.youtube.com/results?search_query=net+ninja+css" },
  { title: "JavaScript", desc: "Learn how to make websites interactive.", link: "https://www.youtube.com/results?search_query=net+ninja+javascript" },
  { title: "React Development", desc: "Learn how to build websites with React.", link: "https://www.youtube.com/results?search_query=net+ninja+react" },
  { title: "Node.js", desc: "Learn how to build backend applications.", link: "https://www.youtube.com/results?search_query=net+ninja+node" },
  { title: "MongoDB", desc: "Learn how to store and manage data.", link: "https://www.youtube.com/results?search_query=net+ninja+mangodb" },
  { title: "Git", desc: "Learn how to track changes in your code.", link: "https://www.youtube.com/results?search_query=net+ninja+git" },
  { title: "GitHub", desc: "Learn how to upload and share your projects.", link: "https://www.youtube.com/results?search_query=net+ninja+github" },
]

function Courses() {
  return (
    <div className="course-page">
      <div className="course-header">
        <h1>Explore Our Learning Hub</h1>
        <p>Learn the skills you need to become a professional software developer.</p>
      </div>
      <div className="course-grid">
        {courses.map((c, i) => (
          <div className="course-card" key={i}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <a href={c.link} target="_blank" rel="noreferrer" className="watch-btn">
              Watch Lessons →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses