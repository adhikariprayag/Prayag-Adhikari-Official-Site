import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../scss/Navbar.scss'

function Navbar() {
  return (
    <>
    <nav>
       <ul>
        <li><NavLink to="/" title='Home'><i className="ri-home-2-line"></i></NavLink></li>
        <li><NavLink to="/about" title='About'><i className="ri-user-line"></i></NavLink></li>
        <li><NavLink to="/services" title='Services'><i className="ri-code-line"></i></NavLink></li>
        <li><NavLink to="/portfolio" title='Portfolio'><i className="ri-tv-2-line"></i></NavLink></li>
        <li><NavLink to="/contact" title='Contact'><i className="ri-chat-3-line"></i></NavLink></li>
       </ul>
    </nav>
    
    </>
  )
}

export default Navbar