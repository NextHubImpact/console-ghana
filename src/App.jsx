import './App.css'
// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Content from './components/Content'


function App() {


  return (
    <>
      <BrowserRouter>
        <div className="absolute z-10 left-0 right-0 top-0">
        <Navbar  />
        </div>
          {/* <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/alldonations" element={<OrderHistory/>} />
              <Route path="/campaigns" element={<Campaigns/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/volunteers" element={<Volunteers/>} />
              <Route path="/allusers" element={<Allusers/>} />
            </Routes> */}
          <Hero/>
          <Content/>
      </BrowserRouter>
    </>
  )
}

export default App
