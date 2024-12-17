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
                            <form style={{ width: '100%' }} action="https://example.com/submit" method="POST">

                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control pb-3"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        required
                                        minlength="3"
                                        maxlength="50"
                                        title="Name must be between 3 and 50 characters."
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control pb-3"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control pb-3"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        required
                                        pattern="^[0-9]{10}$"
                                        title="Phone number must be exactly 10 digits."
                                    />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control pb-3"
                                        id="message"
                                        name="message"
                                        rows={3}
                                        placeholder="Write your message here"
                                        required
                                        minlength="10"
                                        maxlength="500"
                                        title="Message must be between 10 and 500 characters."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        className='send'
                                        type="submit">
                                        Send
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
