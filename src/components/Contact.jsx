import React from 'react';

export default function Contact() {
    return (
        <div>
            <section className='contact p-5'>
                <div className="container">
                    <div className="row">
                        <div className='title col-12'>
                            <h2>Contact Me</h2>
                            <div className='icons d-flex justify-content-center align-items-center'>
                                <div className="divider-custom-line"></div>
                                <i className="fas fa-star pb-1 mx-2"></i>
                                <div className="divider-custom-line"></div>
                            </div>
                        </div>
                        <div className='form col-12 col-md-7 mx-auto'>
                            <form style={{ width: '100%' }}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control pb-3" id="fullName" placeholder="Enter your full name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control pb-3" id="email" placeholder="Enter your email address" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control pb-3" id="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control pb-3" id="message" rows={3} placeholder="Write your message here" required></textarea>
                                </div>
                                <div>
                                    <button className='send' type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
