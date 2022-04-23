import React from 'react'
import { Link } from 'react-router-dom'
import './styling/Navbar.css'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg border-info nav-${props.navMode} bg-${props.navMode}`}>
          <div className="container-fluid">
            <Link className={`navbar-brand text-${props.navMode==='light'?'dark':'light'}`} to="/">Text Utility</Link>
            <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className= {`navbar-nav mx-auto mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
              </ul>
            <div className={`form-check form-switch text-${props.navMode==='light'?'dark':'light'} justify-content-end`}>
                <input className="form-check-input" onClick={props.toggle} type="checkbox" id="switch"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Myswitch}</label>
            </div>
            </div>
          </div>
        </nav>
    </div>
  )
}


// setting check on props
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     home: PropTypes.string,
//     services: PropTypes.string
// }

// // setting default props
// Navbar.defaultProps ={
//     title:"BrandName",
//     home: "NavHOME",
//     services: "NavServices"
// }