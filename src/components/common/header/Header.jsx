import React, { useState } from "react"
import { Link } from "react-router-dom"
import EnrollmentForm from '../../enroll/EnrollmentForm';
import Head from "./Head"
import "./header.css"
import { useLocation } from "react-router-dom";



const Header = ({ name }) => {
  const [click, setClick] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const location = useLocation();

  const openPopup = () => {
    console.log("openPopup method called")
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log("closePopup method called")
    setIsPopupOpen(false);
  };

  return (

    <div
      className={name}
      style={{
        backgroundColor: location.pathname !== "/" ? "#A8C9CF" : "transparent",
      }}
    >
      <Head />
      <header style={{ zIndex: "2" }}>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='https://aalexis.page.link/wuaU' target="_blank">Contact</Link>
            </li>
            {/* <li>
              <Link to='/test'>Take your Test</Link>
            </li> */}
            {/* <li>
              <Link to='/blog'>Blog</Link>
            </li> */}

          </ul>
          <div className='start'>
            <Link to='https://www.csvision.in/' target="_blank" style={{ color: "#fff" }}>
              <div className='button' style={{ color: "#fff" }}>ENQUIRE NOW <i className='fa fa-long-arrow-alt-right'></i></div>
              {/* <div className='button' style={{ color: "#fff" }} onClick={() => openPopup()}>ENQUIRE NOW <i className='fa fa-long-arrow-alt-right'></i></div> */}
            </Link>
            {/* <div className='button'>ENROLL NOW <i className='fa fa-long-arrow-alt-right'></i></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      {
        isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content" style={{ width: "60% !important" }}>
              <EnrollmentForm closePopup={closePopup}></EnrollmentForm>
              {/* <button onClick={closePopup}>Close</button> */}
            </div>
          </div>
        )
      }
    </div >
  )
}

export default Header
