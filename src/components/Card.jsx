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
            <h5 className='fs-5 fw-light py-2'>Based in Bloomfield, NJ</h5>
            <div className='socials'>
              <ul>
                <li><a href="https://www.linkedin.com/in/adhikariprayag/" target='_blank' rel="noopener noreferrer" title="LinkedIn"><i className="ri-linkedin-line"></i></a></li>
                <li><a href="https://github.com/adhikariprayag" target='_blank' rel="noopener noreferrer" title="GitHub"><i className="ri-github-line"></i></a></li>
                <li>
                  <a href="https://devpost.com/adhikariprayag1" target='_blank' rel="noopener noreferrer" title="Devpost">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginTop: '-4px' }}>
                      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853Z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className='btn-out py-4'><Link to="/contact" className='button'>Let's Talk</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
