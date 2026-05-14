import React, { useState } from 'react'
import '../scss/Portfolio.scss'
import Navbar from '../components/Navbar'
import aifun from '../images/aifun.png'
import Nepsop from '../images/images.avif'
import Bstrapdemo from '../images/images2.avif'
import ecotrand from '../images/ecotrand.png'
import deaxautt from '../images/deaxautt.avif'
import grofarweb from '../images/image1.avif'

// Posters from mansory folder
import poster1 from '../images/mansory/Winners Flyer Final.png'
import poster2 from '../images/mansory/A s k.png'
import poster3 from '../images/mansory/Colors.png'
import poster4 from '../images/mansory/Design 3 - Event Flyer.png'
import poster5 from '../images/mansory/Design 1 Greeting Card.png'
import poster6 from '../images/mansory/NASA Hackathon Team Poster.png'
import poster7 from '../images/mansory/GDG March 2 Flyer (1).png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function Portfolio() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const posters = [
    { src: poster1, name: "HTML Coding Challenge Winners" },
    { src: poster2, name: "Ask GDG Caldwell Q&A" },
    { src: poster3, name: "Effort 365 Meteor Madness" },
    { src: poster4, name: "Canva Workshop" },
    { src: poster5, name: "Merry Christmas" },
    { src: poster6, name: "NASA Hackathon Team Poster" },
    { src: poster7, name: "GDG March 2 Flyer" }
  ];

  React.useEffect(() => {
    let $carousel = null;
    if (window.$) {
      $carousel = window.$('.owl-carousel');
      $carousel.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        nav: true,
        navText: [
          '<i class="ri-arrow-left-line"></i>',
          '<i class="ri-arrow-right-line"></i>'
        ]
      });
    }
    return () => {
      if ($carousel) {
        $carousel.trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className='portfolio animate__animated animate__slideInUp'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-start gap-4 mb-3">
              <div className='text-light status mb-0'><i className="ri-tv-2-line"></i> PORTFOLIO</div>
              <ul className="nav nav-tabs custom-pills border-0 align-items-center gap-2" id="portfolioTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="webdev-tab" data-bs-toggle="tab" data-bs-target="#webdev-tab-pane" type="button" role="tab" aria-controls="webdev-tab-pane" aria-selected="true">Web Development</button>
                </li>
                <li className='clr fs-3 d-none d-md-block mx-1' >
                  |
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="posters-tab" data-bs-toggle="tab" data-bs-target="#posters-tab-pane" type="button" role="tab" aria-controls="posters-tab-pane" aria-selected="false">Posters / Design</button>
                </li>
              </ul>
            </div>

            <div className="col-lg-12 py-2 text-light ">
              <div className="tab-content" id="portfolioTabsContent">
                <div className="tab-pane fade show active" id="webdev-tab-pane" role="tabpanel" aria-labelledby="webdev-tab" tabIndex="0">
              <div className="owl-carousel">
                <div className='img-box d-flex  justify-content-center  '>
                  <img className='w-50 ' src={aifun} alt="AI Portfolio Site" />
                  <div>
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 1/6</p>
                    <a href="https://paport777.vercel.app/" target='_blank'>AI Portfolio Site <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> An AI-powered fun portfolio site integrating AI for various interactive purposes.</p>

                    <div className='tools-con '>
                      <span className='tools'>React</span>
                      <span className='tools'>Three.js</span>
                      <span className='tools'>Cerebras API</span>
                      <span className='tools'>Anam AI</span>
                      <span className='tools'>Vercel</span>
                    </div>
                  </div>
                </div>

                <div className='img-box d-flex  justify-content-center  '>
                  <img className='w-50 ' src={Nepsop} alt="" />
                  <div>
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 2/6</p>
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
                    <p className='fw-lighter fs-6 p-0 m-0  '>PROJECT: 3/6</p>
                    <a href="https://bstrapdemo.netlify.app/" target='_blank'>Bstrapdemo <i className="ri-arrow-right-up-line"></i></a>
                    <p className=''> A site made purely using Bootstrap.</p>

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
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 4/6</p>
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
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 5/6</p>
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
                  <p className='fw-lighter fs-6 p-0 m-0 '>PROJECT: 6/6</p>
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

                {/* POSTERS TAB */}
                <div className="tab-pane fade" id="posters-tab-pane" role="tabpanel" aria-labelledby="posters-tab" tabIndex="0">
                  <div className="masonry-grid">
                    {posters.map((poster, index) => (
                      <div className="masonry-item animate__animated animate__fadeInUp" key={index} onClick={() => setSelectedPoster(poster)}>
                        <img src={poster.src} alt={poster.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* POSTER MODAL */}
      {selectedPoster && (
        <div className="poster-modal" onClick={() => setSelectedPoster(null)}>
          <div className="modal-content-img animate__animated animate__zoomIn animate__faster" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedPoster(null)}><i className="ri-close-line"></i></span>
            <img src={selectedPoster.src} alt={selectedPoster.name} />
            <p className="poster-name text-center mb-0">{selectedPoster.name}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
