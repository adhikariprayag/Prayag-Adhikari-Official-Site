import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import '../scss/Contact.scss'

function Contact() {
    return (
        <>
            <Card />
            <Navbar />
            <div className="contact animate__animated animate__slideInUp">
                <div className="container-contact">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='text-light status'><i className="ri-chat-3-line"></i> CONTACT</div>
                        </div>
                        <div className="col-lg-12 title">
                            Let's Talk
                        </div>
                        <div className="col-lg-12 py-4">
                            <form name="contact" action='post' data-netlify='true' id='Contact-Form' netlify>
                                <p>
                                    <input type="text" name="name" placeholder='Name*' required/>
                                </p>
                                
                                <p>
                                    <input type="email" name="email" placeholder='Email*' required/>
                                </p>

                                <p>
                                    <input type="text" name="subject" placeholder='Your Subject*' required/>
                                </p>
                                
                                <p>
                                    <textarea type="text" name="message" placeholder='Your Message*' required/>
                                </p>
                                <p>
                                    <div data-netlify-recaptcha='true'></div>
                                </p>

                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}

export default Contact