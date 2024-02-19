import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import '../scss/Contact.scss'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {

    const form = useRef()
    const [verified, setVerified] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v0qc69z', 'template_nps635a', form.current, {
                publicKey: 'xcdBj7bj7kVYRUx4_',
            })
            .then(
                () => {
                    alert('Message Sent Successfully!');
                },
                (error) => {
                    alert('Message Not Sent!');
                },
            );
        e.target.reset()
        grecaptcha.reset();
    };

    const handleClick = event => {
        
        setVerified(current => !current);
      };

    // CAPTCHA FUNCTION
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }
    return (
        <>
            <Card />
            <Navbar />
            <div className="contact animate__animated animate__fadeIn">
                <div className="container-contact">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='text-light status'><i className="ri-chat-3-line"></i> CONTACT</div>
                        </div>
                        <div className="col-lg-12 title">
                            Let's Talk
                        </div>
                        <div className="col-lg-12 py-3">
                            <form ref={form} onSubmit={sendEmail}>
                                <p>
                                    <input type="text" name="name" placeholder='Name*' required />
                                </p>

                                <p>
                                    <input type="email" name="email" placeholder='Email*' required />
                                </p>

                                <p>
                                    <input type="text" name="subject" placeholder='Your Subject*' required />
                                </p>

                                <p>
                                    <textarea type="text" name="message" placeholder='Your Message*' required />
                                </p>
                                <p>
                                    <div data-netlify-recaptcha='true'></div>
                                </p>

                                <p>
                                    <ReCAPTCHA
                                        sitekey="6LcdQXgpAAAAABbmJffptZFjldoKN-3xhlBsNmoY"
                                        onChange={onChange}
                                    />
                                </p>


                                <p>
                                    <button className={!verified ? 'bg-salmon' : ''} onClick={handleClick} type="submit" disabled={!verified}>Send</button>
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