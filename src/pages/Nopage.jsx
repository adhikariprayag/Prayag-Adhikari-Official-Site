import React from 'react'
import Navbar from '../components/Navbar'
import '../scss/Nopage.scss'
import { Link } from 'react-router-dom'

function Nopage() {
  return (
    <>
    <div className='nopage'>
    <Navbar/>
        <div className="main fs-2  fw-bolder text-dark text-bg-info  shadow p-2 animate__animated animate__jello animate__slower animate__infinite">
           <p className='m-0 p-0'>No Page was Found.</p> 
        </div>
        <div className='text-light mt-5 fs-5 '>
            go to <Link to="/" className='fw-bold fs-4 shadow clr npl'>HOME</Link> instead?
        </div>
    </div>
    </>
  )
}

export default Nopage