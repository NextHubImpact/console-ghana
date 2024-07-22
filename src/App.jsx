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
import Admission from './pages/Admission.jsx'
import Blog from './pages/Blog.jsx'
// import Home from './pages/Home'
// import Home from './pages/Home'


function App() {


  return (
    <>
      <BrowserRouter>
      <div className="">
        <div className="absolute z-10 left-0 right-0 top-0">
        <Navbar  />
        </div>
          <div className="">
          <Routes>

             <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>} />
              <Route path="/admission" element={<Admission/>} />
              <Route path="/blog" element={<Blog/>} />
              {/* <Route path="/campuslife" element={<CampusLife/>} />
              <Route path="/donate" element={<Donate/>} />
              <Route path="/contact" element={<Contact/>} />
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
