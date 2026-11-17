import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Home from "./Page/Home"
import Courses from "./Page/Courses"
import CourseDetail from "./Page/CourseDetail"
import Login from "./Page/Login"
import Register from "./Page/Register"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
         <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App