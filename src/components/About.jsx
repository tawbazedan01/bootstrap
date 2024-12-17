import React from 'react'

export default function About() {
    return (
        <div className=''>
            <section className='about p-5'>
                <div className="container">
                <div className='title pt-5 d-flex flex-column justify-content-center align-items-center'>
                    <h2>About</h2>
                    <div className='icons'>
                        <div className="divider-custom-line"></div>
                        <i className="fas fa-star pb-1"></i>
                        <div className="divider-custom-line"> </div>
                    </div>
                </div>
                <div className='row pt-3 justify-content-center ' >
                    <div className='col-4'>
                        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='col-4'>
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
                <div className='d-flex pt-3 justify-content-center align-items-center'>
                    <a className='link d-flex align-items-center gap-2' href="#"> <i class="fa-solid fa-download"></i> Free Download! </a>
                </div>
                </div>
            </section>
        </div>
    )
}
