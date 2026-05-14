import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import '../scss/Services.scss'
import wd from '../images/webd.jpg'


function Services() {
  return (
    <>
      <Navbar />
      <Card />
      <div className="services">
        <div className="serv-main-con animate__animated animate__slideInUp">

          {/* SLIDE 1 */}
          <div className="serv-slides text-light slide-1">
            <div className="serv-con ">
              <div className="row g-3 ">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #1</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Instructional Technologist</span>
                        <span className='text-secondary fw-bold'>Jan 2026 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Office of Online Education, Caldwell University
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Assisted faculty with Blackboard course organization and troubleshooting.</li>
                          <li>Provided support for instructional technologies used in online and hybrid courses.</li>
                          <li>Contributed to daily operations within the Office of Online Education.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4 ">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="serv-slides text-light slide-2">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #2</div>
                </div>
              </div>

              {/* TILES */}
              <div className="col-lg-12 py-4 ">
                <div className=' box-wrap '>
                  <div className="box row g-2 ">
                    <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                      <span className='serv-title' style={{ fontSize: '28px' }}>Tech Support Specialist</span>
                      <span className='text-secondary fw-bold'>Jan 2026 - Present</span>
                    </div>
                    <div className="col-lg-12 fs-5 fw-bold mb-2">
                      Externship - West Essex YMCA (On-site)
                    </div>
                    <div className="col-lg-12 fw-light">
                      <ul className='mb-0'>
                        <li>Provided technical support to senior citizens with smartphones, laptops, and tablets.</li>
                        <li>Assisted users with email setup, app usage, and basic software troubleshooting.</li>
                        <li>Diagnosed and resolved common device and connectivity issues.</li>
                        <li>Communicated technical information clearly and patiently to non-technical users.</li>
                        <li>Gained hands-on IT experience through CS 332 Experiential Learning.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4 ">
                <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div className="serv-slides text-light slide-3">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #3</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Peer Tutor</span>
                        <span className='text-secondary fw-bold'>Mar 2026 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Hybrid Tutor
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Tutored peers in Computer Programming, Philosophy, Business Communications, Business Spreadsheets, and American Music helping improve understanding and academic performance.</li>
                          <li>Developed lesson plans and customized exercises for diverse learning styles.</li>
                          <li>Assisted students in mastering complex concepts, critical thinking, and practical applications.</li>
                          <li>Provided guidance on assignments, presentations, and problem-solving strategies.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4 ">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>

            </div>
          </div>

          {/* SLIDE 4 */}
          <div className="serv-slides text-light slide-4">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #4</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Design Lead</span>
                        <span className='text-secondary fw-bold'>Oct 2024 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Google Developers Group, Caldwell University
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Designed and created marketing materials (flyers, posters) using Canva to promote events and initiatives.</li>
                          <li>Collaborated with team members to develop creative content and enhance community engagement.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4 ">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollTo({ top: 0, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInUp animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services