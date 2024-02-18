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
                <li><a href="https://www.instagram.com/adhikariprayag/" target='_blank'><i className="ri-instagram-line"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adhikariprayag/" target='_blank'><i className="ri-linkedin-line"></i></a></li>
                <li><a href="https://github.com/adhikariprayag" target='_blank'><i className="ri-github-line"></i></a></li>
              </ul>
            </div>
            <p className='py-5 fw-lighter '>© a Y<i className="ri-eye-line"></i>GA creation</p>
            <div className='btn-out'><Link to="/contact" className='button'>Let's Talk</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card