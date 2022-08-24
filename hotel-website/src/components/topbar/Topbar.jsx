import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import Logo from "../img/villa.jpg";

function Topbar() {
  return (
    <React.Fragment>
      <div className="top-wrapper">
          <nav class="header">
              <ul class="list">
                  <li className='item'>
                      <Link to="/Intro" style={{color: 'black', textDecoration: 'none'}}>STAY</Link>
                  </li>
                  <li className='item'>
                      <Link to="/Contact" style={{color: 'black', textDecoration: 'none'}}>THE VILLAS</Link>
                  </li>
                  <li className='item'>
                      <Link to="/Contact" style={{color: 'black', textDecoration: 'none'}}>OFFERS</Link>
                  </li>
                  <li className='item-logo'><img src={Logo} alt="" className="img-logo"/>
                      <Link to="/About" style={{color: 'black', textDecoration: 'none'}}></Link>
                  </li>
                  <li className='item'>
                      <Link to="/Contact" style={{color: 'black', textDecoration: 'none'}}>GALLERY</Link>
                  </li>
                  <li className='item'>
                      <Link to="/Contact" style={{color: 'black', textDecoration: 'none'}}>LOCATION</Link>
                  </li>
                  <li className='item'>
                      <Link to="/Contact" style={{color: 'black', textDecoration: 'none'}}>CONTACT US</Link>
                  </li>
              </ul>
          </nav>
      </div>
    <div className="new-cont"></div>
    </React.Fragment>
  );
}

export default Topbar;
      