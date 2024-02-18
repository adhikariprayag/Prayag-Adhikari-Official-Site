import React from 'react'

function Contact() {
    return (
        <>
            <div className="container">
                <div classname="contact text-light">
                    <form name="contact" method="POST" data-netlify="true">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Name *</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ram Nepal" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Phone</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Your Concern</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} required/>
                        </div>
                        <div>
                        <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Contact