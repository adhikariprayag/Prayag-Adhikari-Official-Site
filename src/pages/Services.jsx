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
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #1</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title' style={{ fontSize: '28px' }}>STEM Advance Summer Researcher (AI / NLP)</span>
                        <span className='text-secondary fw-bold'>May 2026 - Aug 2026</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Caldwell University <span className='fw-normal fs-6 text-secondary'>(Advisor: Dr. Sushil Poudel)</span>
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Prototyped a Python resume-parsing pipeline with spaCy named entity recognition (NER) and automatic scoring.</li>
                          <li>Ran experiments comparing four AI extraction systems (rule-based, GPT-only, hybrid, and filtered hybrid) and documented results; the cross-validation-filtered hybrid scored the best combined strict F1.</li>
                          <li>Built a 100-resume "gold standard" dataset from real, anonymized PDF resumes, labeling each AI prediction as correct, incorrect, or partial.</li>
                          <li>Reviewed six recent research papers on resume parsing, document understanding, and AI bias; wrote an IEEE-format paper and presented a poster at the university symposium.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="serv-slides text-light slide-2">
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #2</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Data Jam Mentor</span>
                        <span className='text-secondary fw-bold'>Sep 2026 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        The DataJam (Caldwell University / University of Pittsburgh)
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Coach high school teams through a year-long data science competition, from cleaning data to presenting to judges.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div className="serv-slides text-light slide-3">
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #3</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Instructional Technologist</span>
                        <span className='text-secondary fw-bold'>Jan 2026 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Office of Online Education, Caldwell University
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Help faculty organize and troubleshoot Blackboard courses and support the technology used in online and hybrid classes.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 4 */}
          <div className="serv-slides text-light slide-4">
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #4</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Peer Tutor</span>
                        <span className='text-secondary fw-bold'>Mar 2026 - Present</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Caldwell University, Caldwell, NJ
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Tutor classmates in Computer Programming I (CS 195), Business Spreadsheets, and Business Communications.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 5 */}
          <div className="serv-slides text-light slide-5">
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #5</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title' style={{ fontSize: '28px' }}>Tech Support Specialist</span>
                        <span className='text-secondary fw-bold'>Jan 2026 - May 2026</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Externship - West Essex YMCA (On-site)
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Solved smartphone, laptop, email, app, and connectivity problems for senior citizens.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
                  <div style={{ cursor: "pointer" }} onClick={(e) => { e.currentTarget.closest('.serv-main-con').scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }} className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 6 */}
          <div className="serv-slides text-light slide-6">
            <div className="serv-con">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-briefcase-line"></i> EXPERIENCE #6</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4">
                  <div className='box-wrap'>
                    <div className="box row g-2">
                      <div className="col-lg-12 d-flex justify-content-between flex-wrap align-items-center">
                        <span className='serv-title'>Design Lead</span>
                        <span className='text-secondary fw-bold'>Oct 2024 - Aug 2026</span>
                      </div>
                      <div className="col-lg-12 fs-5 fw-bold mb-2">
                        Google Developer Group (GDG) Caldwell, Caldwell, NJ
                      </div>
                      <div className="col-lg-12 fw-light">
                        <ul className='mb-0'>
                          <li>Designed flyers, posters, and social content in Canva for a student tech community and presented on design to members.</li>
                          <li>Collaborated with organizers to create event content on deadline and grow community engagement.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-end align-items-center py-2 py-lg-4">
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