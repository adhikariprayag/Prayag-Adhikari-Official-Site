import React from 'react'
import '../scss/Card.scss'
import Pfp from '../images/Pa.jpg'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
      <div className="card ">
        <div className='card-con'>
          <div className='text-light text-center '>
            <h4 className='fw-bold '>Prayag Adhikari</h4>
            <div className='py-2  '><img src={Pfp} alt="Profile pic" /></div>
            <h5 className='fs-5 fw-light py-2'>Based in Katmandu, Nepal</h5>
            <div className='socials'>
              <ul>
                <li><a href="https://www.facebook.com/adhikariprayag" target='_blank'><i className="ri-facebook-line"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adhikariprayag/" target='_blank'><i className="ri-linkedin-line"></i></a></li>
                <li><a href="https://github.com/adhikariprayag" target='_blank'><i className="ri-github-line"></i></a></li>
              </ul>
            </div>
            <div className='py-3'>
            <a href="mailto:adhikariprayag0@gmail.com" className='text-decoration-none text-secondary'><p className='fw-normal  py-2  m-0 fs-6 '><i className="ri-mail-send-line fw-lighter "></i> adhikariprayag0@gmail.com</p></a>
            <p className='fw-normal p-0 m-0 text-secondary '>© a Y<i className="ri-eye-line"></i>GA creation</p>
            </div>
            
            <div className='btn-out py-2 '><Link to="/contact" className='button'>Let's Talk</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
