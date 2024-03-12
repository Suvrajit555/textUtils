import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default function Navbar(props) {
    let name = "lipu"

    return (
        <>
            <h1>App Devlop By {name} using REACT</h1>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/textform">Textform<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/color">color</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.on} </label>
                    </div>
                </div>
            </nav>
        </>
    )
}
// ITS CALLED PROPTYPES I MEAN WE CAN CHAN GE THE VALUEW OF NAVBAR EACH AND EVERY TIME USING PROPS IN OUT APP.JS
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};
{/* Navbar.propTypes={
     title:PropTypes.string.isRequired,
     about: PropTypes.string.isRequired
} */}
// THE BELOW CODE IS THE DEFAULT VALUE OF NAVBAR IF WE DONT USE PROPS IN NAVBAR THEN ONLY THE DEFAULT WILL BE WORK 
Navbar.defaultProps = {
    title: "home",
    about: "about"
};
