import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header style={{zIndex:"2"}}>
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
              <Link to='https://forms.gle/rNZsVBxUdHkmHPng8' target="_blank">Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <Link to='https://forms.gle/K8HsU9yKhFF8NAsB8' target="_blank" style={{ color: "#fff" }}>

              <div className='button' style={{ color: "#fff" }}>ENROLL NOW <i className='fa fa-long-arrow-alt-right'></i></div>
              </Link>
            {/* <div className='button'>ENROLL NOW <i className='fa fa-long-arrow-alt-right'></i></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
