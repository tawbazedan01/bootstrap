import React from 'react'
import img1 from '../assets/images/portfolio-imgs/img-1.png';
import img2 from '../assets/images/portfolio-imgs/img-2.png';
import img3 from '../assets/images/portfolio-imgs/img-3.png';
import img4 from '../assets/images/portfolio-imgs/img-4.png';
import img5 from '../assets/images/portfolio-imgs/img-5.png';
import img6 from '../assets/images/portfolio-imgs/img-6.png';


export default function Portfolio() {
    return (
        <div>
            <section className='portfolio p-5'>
                <div className="container">
                    <div className="row">
                        <div className='title col-12'>
                            <h2>Portfolio</h2>
                            <div className='icons'>
                                <div className="divider-custom-line"></div>
                                <i className="fas fa-star pb-1"></i>
                                <div className="divider-custom-line"> </div>
                            </div>
                        </div>
                        <div className="imgs col-12 pt-5">
                            <div className="row d-flex flex-wrap ">
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img1} width="100%" alt="Portfolio Image 1" />
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img2} width="100%" alt="Portfolio Image 2" />
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img3} width="100%" alt="Portfolio Image 3" />
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img4} width="100%" alt="Portfolio Image 4" />
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img5} width="100%" alt="Portfolio Image 5" />
                                    </div>
                                </div>
                                <div className="col-4 mb-4">
                                    <div>
                                        <img src={img6} width="100%" alt="Portfolio Image 6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
