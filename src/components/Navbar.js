import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const Capitalize = (word) =>{
    let caps = word.toLowerCase()
    return caps.charAt(0).toUpperCase()+caps.slice(1)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
            <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>

            <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Enable {Capitalize(props.mode==="dark"?'light':'dark') +" Mode"}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { 
                     title: PropTypes.string,
                     about: PropTypes.string ,
                     home: PropTypes.string ,
                  };

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
  home: "Home",
};
