import React, { Component } from 'react'
import {useRef} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const transparent = {
    zindex: 2,
    color : 'red',
}
const cstmbtn = {
    minWidth : 100
}
let direction = 'right'
const navbargrad = {backgroundImage: "linear-gradient( #030114, #060414)" }
const font = {color: 'white'}
const whitecolor = 'white';
function Navbar() {
    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };



    return (
    <nav className="navbar navbar-expand-lg bg-* text-white" style={navbargrad}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={whitecolor} className="bi bi-camera-reels-fill" viewBox="0 0 20 20">
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
        </svg>

        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                
            <div className="nav-link active" aria-current="page" href="#" style={font}>
                <Link to="/">
                    <h5>
                        Home    
                    </h5>
                </Link>
            </div>
            </li>
            <li className="nav-item">
            <div className="nav-link" href="#" style={font}>
                <Link to='/Community'>
                    <h5>
                        Community    
                    </h5>
                    </Link></div>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="#" style={font} onClick={handleClick}>Random</a>
            </li> */}

       
        </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Enter Mail" aria-label="Search"/>
                <button className="btn btn-outline-info" type="submit" style={cstmbtn}>Sign Up</button>
            </form>
            
        </div>
    </div>
    </nav>
    )
  }


export default Navbar
