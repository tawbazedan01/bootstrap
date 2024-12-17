import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className='p-5'>
                <div className='container'>
                    <div className='row d-flex justify-content-between text-center'>
                        <div className='col-4 justify-content-center align-items-center'>
                            <h2>Location</h2>
                            <p className='pt-3' >2215 John Daniel Drive
                                Clark, MO 65243</p>
                        </div>
                        <div className='col-4 justify-content-center align-items-center'>
                            <h2>Around the Web</h2>
                            <div className='social-media pt-3 d-flex justify-content-center gap-4'>
                                <a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-brands fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-4 justify-content-center align-items-center'>
                            <h2>About Freelancer</h2>
                            <p className='pt-3'> Freelance is a free to use, MIT licensed Bootstrap theme created by <a className='link' href='https://startbootstrap.com/'>Start Bootstrap </a>. </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copy-right d-flex justify-content-center align-items-center pt-4 pb-3'>
                <p>Copyright © Your Website 2023</p>
            </div>
        </div>
    )
}
