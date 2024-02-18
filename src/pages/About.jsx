import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import '../scss/About.scss'
import 'animate.css'
import figma from '../images/figma.svg'
import react from '../images/react.svg'
import sass from '../images/sass.svg'
import nextjs from '../images/nextjs.svg'
import js from '../images/js.svg'
import html from '../images/html.svg'

function About() {
  return (
    <>
      <Card />
      <Navbar />
      <section className="about animate__animated animate__slideInUp ">
        <div className="abt-container">

          {/* SLIDE-1 */}
          <div className="abt-slides abt-1">
            <div className="sm-con">
              <div className="row w-100 g-md-5 g-4">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-user-line"></i> ABOUT</div>
                </div>
                <div className="col-lg-12 fs-1 fw-bold clr">
                  About Me
                </div>
                <div className="col-lg-12 text-light sm-text">
                  <span className='extra-text'>A recent high school graduate, with a passion for software development. Alongside the above-average academic background,</span> I have actively participated in various extracurricular activities in the fields related to science, sports, and art. My time has also been dedicated to acquiring training in front-end website development. All the past experience has heightened my interest in the field of Computer Science.
                </div>
                <div className="col-lg-12 d-flex justify-content-end">
                  <div className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE-2 */}

          <div className="abt-slides abt-2 ">
            <div className="sm-con">
              <div className="row ">
                <div className="col-lg-12 fs-2 fw-bold clr">
                  Skills & Education
                </div>
                <div className="col-lg-12 py-5 ">
                  <div className='tabs-pills'>
                    <ul className="nav nav-tabs d-flex justify-content-evenly align-items-center gap-3 " id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Skills</button>
                      </li>
                      <li className='clr fs-3 large-device' >
                        |
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Education</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">

                      {/* SKILLS */}
                      <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        {/* SKILLS SMALL DEVICE */}
                        <div className="small-device">
                          <div className="row py-3 ">
                            <div className="col-lg-12">
                              <div className="row d-flex flex-wrap ">
                                <div className="col-6  text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={figma} alt="" />
                                  <span className='img-txt'>Figma</span>
                                </div>
                                <div className="col-6   text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={react} alt="" />
                                  <span className='img-txt'>React</span>
                                </div>

                              </div>

                              <div className="row py-2">
                                <div className="col-6 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={sass} alt="" />
                                  <span className='img-txt'>Sass</span>
                                </div>
                                <div className="col-6  text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={nextjs} alt="" />
                                  <span className='img-txt'>Nextjs</span>
                                </div>
                              </div>

                              <div className="row ">

                                <div className="col-6 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={js} alt="" />
                                  <span className='img-txt'>JavaScript</span>
                                </div>
                                <div className="col-6 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={html} alt="" />
                                  <span className='img-txt'>HTML</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* SKILLS LARGE DEVICE */}
                        <div className="large-device">
                          <div className="row p-5 ">
                            <div className="col-lg-12">
                              <div className="row d-flex flex-wrap ">
                                <div className="col-4  text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={figma} alt="" />
                                  <span className='img-txt'>Figma</span>
                                </div>
                                <div className="col-4   text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={react} alt="" />
                                  <span className='img-txt'>React</span>
                                </div>
                                <div className="col-4 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={sass} alt="" />
                                  <span className='img-txt'>Sass</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="row py-4">
                                <div className="col-4  text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={nextjs} alt="" />
                                  <span className='img-txt'>Nextjs</span>
                                </div>

                                <div className="col-4 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={js} alt="" />
                                  <span className='img-txt'>JavaScript</span>
                                </div>
                                <div className="col-4 text-light d-flex flex-column gap-3 align-items-center  ">
                                  <img className='animate__animated animate__pulse' src={html} alt="" />
                                  <span className='img-txt'>HTML</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* EDUCATION */}
                      <div className="tab-pane fade text-light" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="accordion accordion-flush py-5 " id="accordionFlushExample" data-bs-theme="dark">
                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                2023 - 2024
                              </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body d-flex flex-column ">
                                <code>Broadway Infosys</code>
                                <p>- Web Design / Development</p>
                                <code>Coursera</code>
                                <p>- Wordpress</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                2021 - 2023
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body d-flex flex-column ">
                                <code>Global School</code>
                                <p>- Graduated High School with Science Stream (major in CS & Mathematics)</p>
                                <code>C Programming</code>
                                <code className='py-2 '>Programming Basics</code>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                2019 - 2021
                              </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body d-flex flex-column ">
                                <code>Elite Grand School</code>
                                <p>- Graduated Secondary School</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div className="pj-btn text-end animate__animated animate__fadeInUp animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default About