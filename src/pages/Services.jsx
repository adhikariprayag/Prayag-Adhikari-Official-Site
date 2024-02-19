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
                  <div className='text-light status'><i className="ri-code-line"></i> SERVICE #1</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12">
                        <span className='serv-title'>Web Design</span>
                      </div>
                      <div className="col-lg-12 ">
                        Craft trendy, responsive websites with Figma, blending creativity and functionality. Embrace sleek design, intuitive navigation, and seamless responsiveness effortlessly.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-between align-items-center py-2 py-lg-4 ">
                  <div className='ms-3 d-flex flex-wrap gap-3 icons-star'><i class="ri-star-fill fs-6 clr"></i> <i class="ri-star-fill fs-5 clr"></i> <i class="ri-star-fill fs-4 clr"></i> <i class="ri-star-fill fs-3 clr"></i> <i class="ri-star-line fs-2 clr"></i></div>
                  <div className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="serv-slides text-light slide-2">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-code-line"></i> SERVICE #2</div>
                </div>
              </div>

              {/* TILES */}
              <div className="col-lg-12 py-4 ">
                <div className=' box-wrap '>
                  <div className="box row g-2 ">
                    <div className="col-lg-12">
                      <span className='serv-title'>Web Development</span>
                    </div>
                    <div className="col-lg-12 ">
                      Create stunning, trendy, and responsive websites with React, Next.js, HTML, Sass, and JavaScript, ensuring a fluid and dynamic user experience.</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-between align-items-center py-2 py-lg-4 ">
                <div className='ms-3 d-flex flex-wrap gap-3 icons-star'><i class="ri-star-fill fs-6 clr"></i> <i class="ri-star-fill fs-5 clr"></i> <i class="ri-star-fill fs-4 clr"></i> <i class="ri-star-half-line fs-3 clr"></i> <i class="ri-star-line fs-2 clr"></i></div>
                <div className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
              </div>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div className="serv-slides text-light slide-3">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-code-line"></i> SERVICE #3</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12">
                        <span className='serv-title'>UI/UX Design</span>
                      </div>
                      <div className="col-lg-12 ">
                        Design sleek UI/UX with fluidity using intuitive navigation, engaging visuals, responsive layouts, and a seamless blend of aesthetics and functionality.</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-between align-items-center py-2 py-lg-4 ">
                  <div className='ms-3 d-flex flex-wrap gap-3 icons-star'><i class="ri-star-fill fs-6 clr"></i> <i class="ri-star-fill fs-5 clr"></i> <i class="ri-star-fill fs-4 clr"></i> <i class="ri-star-line fs-3 clr"></i> <i class="ri-star-line fs-2 clr"></i></div>
                  <div className="pj-btn text-end animate__animated animate__fadeInDown animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
                </div>
              </div>

            </div>
          </div>

          {/* SLIDE 4 */}
          <div className="serv-slides text-light slide-4">
            <div className="serv-con">
              <div className="row">
                <div className="col-lg-12">
                  <div className='text-light status'><i className="ri-code-line"></i> SERVICE #4</div>
                </div>

                {/* TILES */}
                <div className="col-lg-12 py-4 ">
                  <div className=' box-wrap '>
                    <div className="box row g-2 ">
                      <div className="col-lg-12">
                        <span className='serv-title'>Graphic Design</span>
                      </div>
                      <div className="col-lg-12 ">
                        Elevate graphic design with the latest trends, creating visually stunning and attractive pieces—from posters and logos to banners and social media posts.</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-between align-items-center py-2 py-lg-4 ">
                  <div className='ms-3 d-flex flex-wrap gap-3 icons-star'><i class="ri-star-fill fs-6 clr"></i> <i class="ri-star-fill fs-5 clr"></i> <i class="ri-star-half-line fs-4 clr"></i> <i class="ri-star-line fs-3 clr"></i> <i class="ri-star-line fs-2 clr"></i></div>
                  <div className="pj-btn text-end animate__animated animate__fadeInUp animate__slower animate__infinite"><i className="ri-arrow-down-line"></i></div>
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