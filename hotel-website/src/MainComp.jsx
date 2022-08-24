import React from 'react'
import About from './components/about/About'
import Intro from './components/introduction/Intro'
import Contact from './components/contact/Contact'
import Topbar from './components/topbar/Topbar'
import SideCont from './components/side-contact/SideCont'
import Footer from './components/footer/Footer'


import "./app.css";


function MainComp () {
  return (
    <div className="app">
      <div className="topbar">
          <Topbar />
      </div>
      <div className="side-cont">
          <SideCont />
      </div>
        <div className="sections">
          <Intro />
          <About />
          <Contact />
          <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainComp