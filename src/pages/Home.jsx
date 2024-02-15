import React from 'react'
import '../scss/Home.scss'
import Pfp from '../images/Pa.jpg'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <div className="home ">
                <Navbar />
                <Card />
                <div className="container-main animate__animated animate__pulse">
                    <div className="row g-3">
                        <div className="col-lg-12">
                            <div class="marquee">
                                <p className='fs-5'> Web Designer • Web Developer • Graphic Designer</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='text-light status'><i className="ri-home-2-line"></i> HOME</div>
                        </div>
                    </div>
                    <div className="row text-light py-4 py-md-5 g-md-5 g-2 ">
                        <div className="col-lg-12 fs-1 fw-bold ">
                        Hello! I am <span className="clr">Prayag Adhikari</span>, Website Designer and Developer
                        </div>
                        <div className="col-lg-12 fw-light fs-5 py-3 py-md-0">
                        I am a High School Graduate, with a passion for website design and development.
                        </div>
                        <div className='prj-btn'>
                        <div className='col-lg-11 py-0 d-flex justify-content-end align-items-center gap-4'>
                            <span className='fs-6 fw-light text-uppercase '>My Projects:</span>
                           <Link to='/portfolio' className='text-decoration-none '><div className="pj-btn text-end "><i className="ri-tv-2-line"></i></div></Link> 
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Home