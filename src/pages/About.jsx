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
                <div className="col-lg-12 text-light  ">
                  I'm Prayag Adhikari — a Computer Science student at Caldwell University, originally from Kathmandu, Nepal. I build and design for the web with three things always in mind: it has to look good, work on every screen, and be usable by everyone. Aesthetic, responsive, accessible — that's not a checklist for me, it's just how I think about every interface I touch. I serve as Design Lead for the Google Developers Group on campus, creating the visual content and campaigns that bring our community together. Outside of that, I build my own projects — real, shipped websites where I get to own every design decision from layout to the last pixel. I'm currently growing deeper into UI/UX and brand-focused design, and I'm looking for a creative environment where those values actually matter.
                </div>
                <div className="col-lg-12 d-flex justify-content-end">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.abt-container').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
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
                    <ul className="nav nav-tabs d-flex justify-content-evenly align-items-center gap-2 " id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Skills</button>
                      </li>
                      <li className='clr fs-3 large-device' >
                        |
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Education</button>
                      </li>
                      <li className='clr fs-3 large-device' >
                        |
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="certs-tab" data-bs-toggle="tab" data-bs-target="#certs-tab-pane" type="button" role="tab" aria-controls="certs-tab-pane" aria-selected="false">Awards</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">

                      {/* SKILLS */}
                      <div className="tab-pane fade show active py-4 px-2 px-md-4" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className="row text-light g-4 mt-2">
                          <div className="col-md-6">
                            <h6 className="clr fw-bold mb-1">Web & Design Tools</h6>
                            <p className="fw-light small mb-4">Figma, Canva, Adobe Photoshop, Illustrator, InDesign, Adobe XD</p>

                            <h6 className="clr fw-bold mb-1">UX/UI Design</h6>
                            <p className="fw-light small mb-4">Wireframing, Prototyping, Visual Hierarchy, Mobile Responsiveness, Accessibility</p>

                            <h6 className="clr fw-bold mb-1">Platforms & Tools</h6>
                            <p className="fw-light small mb-4">WordPress, Netlify, Render, Vercel, GitHub, Google Workspace</p>
                          </div>
                          <div className="col-md-6">
                            <h6 className="clr fw-bold mb-1">Web Development</h6>
                            <p className="fw-light small mb-4">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap, SASS</p>

                            <h6 className="clr fw-bold mb-1">Collaboration</h6>
                            <p className="fw-light small mb-4">Communication, Creativity, Time Management, Marketing Support, Team Coordination</p>

                            <h6 className="clr fw-bold mb-1">Languages</h6>
                            <p className="fw-light small mb-0">English (Fluent), Hindi (Fluent), Nepali (Native)</p>
                          </div>
                        </div>
                      </div>

                      {/* EDUCATION */}
                      <div className="tab-pane fade text-light" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="accordion accordion-flush py-5 " id="accordionFlushExample" data-bs-theme="dark">
                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseZero" aria-expanded="false" aria-controls="flush-collapseZero">
                                2024 - 2028
                              </button>
                            </h2>
                            <div id="flush-collapseZero" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body d-flex flex-column ">
                                <code>Caldwell University, Caldwell, New Jersey</code>
                                <p className="mt-2 mb-0">- Bachelor's in Computer Science & Business Analytics, Honors Student</p>
                              </div>
                            </div>
                          </div>
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

                      {/* AWARDS AND CERTS */}
                      <div className="tab-pane fade text-light" id="certs-tab-pane" role="tabpanel" aria-labelledby="certs-tab" tabIndex="0">
                        <div className="accordion accordion-flush py-5 " id="accordionAwards" data-bs-theme="dark">

                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-awards" aria-expanded="false" aria-controls="flush-awards">
                                Honors & Awards
                              </button>
                            </h2>
                            <div id="flush-awards" className="accordion-collapse collapse" data-bs-parent="#accordionAwards">
                              <div className="accordion-body d-flex flex-column gap-3">
                                <div><code className='clr fs-6'>Dean’s List 2024 & 2025</code><br />Caldwell University</div>
                                <div><code className='clr fs-6'>Presidential Honors Scholarship</code><br />Caldwell University</div>
                                <div><code className='clr fs-6'>St. Thomas Aquinas Scholarship</code><br />Caldwell University</div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item animate__animated animate__slideInDown">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-certs" aria-expanded="false" aria-controls="flush-certs">
                                Google AI Specialization
                              </button>
                            </h2>
                            <div id="flush-certs" className="accordion-collapse collapse" data-bs-parent="#accordionAwards">
                              <div className="accordion-body d-flex flex-column ">
                                <code>Coursera - Completed April 7, 2026</code>
                                <p className="mb-3 mt-3 fw-light" style={{ fontSize: '14px', lineHeight: '22px' }}>Courses: AI Fundamentals, AI for Brainstorming and Planning, AI for Research and Insights, AI for Writing and Communicating, AI for Content Creation, AI for Data Analysis, AI for App Building</p>
                                <a href="https://www.coursera.org/account/accomplishments/specialization/Y6T3QPXHGJK6" target="_blank" className="text-decoration-none">
                                  <button className="btn btn-outline-success btn-sm rounded-pill px-3" style={{ borderColor: '#28E98C', color: '#28E98C' }}>
                                    Verify Certificate <i className="ri-external-link-line"></i>
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.abt-container').scrollTo({ top: 0, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInUp animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default About