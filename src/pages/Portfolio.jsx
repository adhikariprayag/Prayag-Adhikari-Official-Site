import React from 'react'
import '../scss/Portfolio.scss'
import Navbar from '../components/Navbar'
import Nepsop from '../images/images.avif'
import Bstrapdemo from '../images/images2.avif'
import ecotrand from '../images/ecotrand.png'
import deaxautt from '../images/deaxautt.avif'
import grofarweb from '../images/image1.avif'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function Portfolio() {
  

  $(document).ready(function () {
    $('.owl-carousel').owlCarousel(
      {
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
      }
    );
  });

  return (
    <>
      <Navbar />
      <section className='portfolio animate__animated animate__slideInUp'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='text-light status'><i className="ri-tv-2-line"></i> PORTFOLIO</div>
            </div>

            <div className="col-lg-12 py-4 text-light ">
              <div className="owl-carousel">
                <div className='img-box d-flex  justify-content-center  '>
                  <img className='w-50 ' src={Nepsop} alt="" />
                  <div>
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 1/5</p>
                    <a href="https://nepsopdemo.netlify.app/" target='_blank'>Nepsop <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A simple shopping site which showcases the use of pulling API.</p>

                    <div className='tools-con '>
                      <span className='tools'>React Js</span>
                      <span className='tools'>SCSS</span>
                      <span className='tools'>JavaScript</span>
                      <span className='tools'>Animate.css</span>
                      <span className='tools'>Bootstrap</span>
                    </div>
                  </div>
                </div>

                <div className='img-box d-flex  justify-content-center  '>
                  <img className='w-50 ' src={Bstrapdemo} alt="" />
                  <div>
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 2/5</p>
                    <a href="https://bstrapdemo.netlify.app/" target='_blank'>Bstrapdemo <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A simple shopping site which showcases the use of pulling API.</p>

                    <div className='tools-con '>
                      <span className='tools'>Html</span>
                      <span className='tools'>SCSS</span>
                      <span className='tools'>Bootstrap</span>
                    </div>
                  </div>
                </div>

                <div className='img-box d-flex  justify-content-center '>
                  <img className='w-50 ' src={ecotrand} alt="" />
                  <div>
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 3/5</p>
                    <a href="https://ecotrand.vercel.app/" target='_blank'>Ecotrand <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A NGO demo site.</p>

                    <div className='tools-con'>
                      <span className='tools'>Next Js</span>
                      <span className='tools'>SCSS</span>
                      <span className='tools'>Tailwind Css</span>
                      <span className='tools'>Swiper Js</span>
                      <span className='tools'>Animate.css</span>
                    </div>
                  </div>
                </div>

                <div className='img-box d-flex  justify-content-center '>
                  <img className='w-50 ' src={deaxautt} alt="" />
                  <div>
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 4/5</p>
                    <a href="https://deaxaut.netlify.app/" target='_blank'>Deaxautt <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A marketing agency demo site.</p>

                    <div className='tools-con'>
                      <span className='tools'>React Js</span>
                      <span className='tools'>Tailwind Css</span>
                      <span className='tools'>Swiper Js</span>
                      <span className='tools'>Scss</span>
                      <span className='tools'>Animate.css</span>
                    </div>
                  </div>
                </div>

                <div className='img-box d-flex  justify-content-center '>
                  <img className='w-50 ' src={grofarweb} alt="" />
                  <div>
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 5/5</p>
                    <a href="https://grofarweb.netlify.app/" target='_blank'>Grofarweb <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A grocery shopping website.</p>

                    <div className='tools-con'>
                      <span className='tools'>React Js</span>
                      <span className='tools'>Bootstrap</span>
                      <span className='tools'>Slick Js</span>
                      <span className='tools'>Scss</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio