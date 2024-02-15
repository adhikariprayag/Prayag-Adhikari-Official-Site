import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../scss/Navbar.scss'

function Navbar() {
  return (
    <>
    <nav>
       <ul>
        <li><NavLink to="/"><i className="ri-home-2-line"></i></NavLink></li>
        <li><NavLink to="/about"><i className="ri-user-line"></i></NavLink></li>
        <li><NavLink to="/services"><i className="ri-code-line"></i></NavLink></li>
        <li><NavLink to="/portfolio"><i className="ri-tv-2-line"></i></NavLink></li>
        <li><NavLink to="/contact"><i className="ri-chat-3-line"></i></NavLink></li>
       </ul>
    </nav>
    
    </>
  )
}

export default Navbar