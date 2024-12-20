import React from 'react'


export default function Navbar() {
  return (
   <div>
  <nav className="navbar navbar-expand-lg p-4">
    <div className="container">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">About</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active" href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}