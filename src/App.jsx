import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
      
  )
}

export default App
