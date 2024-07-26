import './App.css'
// import { useState } from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Content from './components/Content'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
// import Home from './pages/Home'


function App() {


  return (
    <>
      <BrowserRouter>
      <div className="bg-[whitesmoke]">
        <div className="fixed top-0 z-10 w-full ">
        <Navbar   />
        </div>
          <div className="">
          <Routes>

             <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
              {/* <Route path="/campuslife" element={<CampusLife/>} />
              <Route path="/donate" element={<Donate/>} />
           
              <Route path="/applyhere" element={<ApplyHere/>} />   */}

          </Routes>
          </div>
          {/* <Hero/> */}
          {/* <Content/> */}
          <Footer/>
          </div>

      </BrowserRouter>
    </>
  )
}

export default App
