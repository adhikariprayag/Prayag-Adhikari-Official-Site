import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nopage from './pages/Nopage'
import Services from './pages/Services'
import Html from './pages/Html'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/' element={<Contact/>}/>
        <Route path='/html/projects' element={<Html/>}/>
        <Route path='*' element={<Nopage/>}/>
    </Routes>
    </>
  )
}

export default App