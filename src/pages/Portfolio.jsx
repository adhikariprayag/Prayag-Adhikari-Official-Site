import React from 'react'
import '../scss/Portfolio.scss'
import Navbar from '../components/Navbar'
import Nepsop from '../images/images.avif'
import Bstrapdemo from '../images/images2.avif'
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
      <section className='portfolio animate__animated animate__fadeInUp'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='text-light status'><i className="ri-tv-2-line"></i> PORTFOLIO</div>
            </div>
            <div className="col-lg-12 py-5 text-light">
              <div className="owl-carousel">
                <div className='img-box '>
                  <img className='w-50 ' src={Nepsop} alt="" />
                  <div>
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 1/2</p>
                    <a href="https://nepsopdemo.netlify.app/" target='_blank'>Nepsop <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A simple shopping site which showcases the use of pulling API.</p>

                    <div className='tools-con'>
                      <span className='tools'>Html</span>
                      <span className='tools'>CSS</span>
                      <span className='tools'>React</span>
                      <span className='tools'>JavaScript</span>
                      <span className='tools'>Animate.css</span>
                      <span className='tools'>Bootstrap</span>
                    </div>
                  </div>
                </div>

                <div className='img-box '>
                  <img className='w-50 ' src={Bstrapdemo} alt="" />
                  <div>
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 2/2</p>
                    <a href="https://bstrapdemo.netlify.app/" target='_blank'>Bstrapdemo <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A simple site which integrates Bootstrap features.</p>

                    <div className='tools-con'>
                      <span className='tools'>Html</span>
                      <span className='tools'>CSS</span>
                      <span className='tools'>JavScript</span>
                      <span className='tools'>Bootstrap</span>
                      <span className='tools'>FancyBox</span>
                      <span className='tools'>OwlCarousel</span>
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