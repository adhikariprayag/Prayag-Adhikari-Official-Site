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
                <div className="sub-container">

                    <div className="inner-container inner-mob">
                        <div className="container mob-screen">
                            <div>
                                <img src={Pfp} alt="" />
                            </div>
                            <div className='clr py-3'><h1 className='fw-bolder p-0 m-0 '>Prayag Adhikari</h1></div>
                            <div className='py-3 '><p className='text-light fw-light fs-5 p-0 m-0 '>A Web Designer/Developer, Graphic Designer and UI/UX Designer, based in Kathmandu, Nepal.</p></div>
                            <div>
                                <ul className='d-flex list-unstyled  m-0 p-0 justify-content-evenly gap-4'>
                                    <li><a href="https://www.facebook.com/adhikariprayag" target='_blank'><i className="ri-facebook-line"></i></a></li>
                                    <li><a href="https://www.instagram.com/adhikariprayag/" target='_blank'><i className="ri-instagram-line"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/adhikariprayag/" target='_blank'><i className="ri-linkedin-line"></i></a></li>
                                    <li><a href="https://github.com/adhikariprayag" target='_blank'><i className="ri-github-line"></i></a></li>
                                </ul>
                            </div>
                            <div className='pt-4 '>
                                <div className='btn-out'><Link to="/contact" className='button'>Let's Talk</Link></div>
                            </div>
                            <div>
                                <p className='pt-4 fw-lighter text-secondary m-0 '>© a Y<i className="ri-eye-line"></i>GA creation</p>
                                <a href="mailto:adhikariprayag0@gmail.com" className='text-decoration-none text-secondary'><p className='fw-normal  py-2  m-0 fs-6 '><i className="ri-mail-send-line fw-lighter "></i> adhikariprayag0@gmail.com</p></a>
                            </div>
                            <div className="col-lg-12 d-flex justify-content-end w-100 ">
                                <div className="pj-btn py-1  text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                            </div>

                        </div>
                    </div>
                    <div className="inner-container">
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
                </div>
            </div>

        </>
    )
}

export default Home