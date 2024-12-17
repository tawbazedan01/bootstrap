import React from 'react'
import img from '../assets/images/boots1.svg';

export default function Header() {
  return (
    <div className='head'>
      <div className='container'>
        <header className=''>
          <div className='d-flex flex-column gap-3 justify-content-center align-items-center pt-5 pb-3 '>
            <img src={img} width="250px" />
            <h1 className='pt-2'>Start Bootstrap</h1>
            <div className='icons'>
              <div className="divider-custom-line"></div>
              <i className="fas fa-star pb-1"></i>
              <div className="divider-custom-line"> </div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>

          </div>
        </header>
      </div>
    </div>

  )
}

