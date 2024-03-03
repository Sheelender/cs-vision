import React from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logo}
              style={{
                height: "91%",
                width: "18%",
                marginLeft: "-81px",
                marginBottom: "-15%"
              }}
              alt="logo"></img>
            <h1>CS Vision</h1>
            <span>DON'T LEARN WITHOUT US</span>
          </div>

          <div className='social'>
            {/* <Link to='https://www.youtube.com/channel/UCas6cFjAa4BLWRAw0QMVFug' target="_blank">
              <i className='fab fa-facebook-f icon'></i></Link> */}
            <Link to='https://www.instagram.com/csvision.us/' target="_blank">
              <i className='fab fa-instagram icon'></i></Link>
            <Link to='https://twitter.com/CsvisionCs' target="_blank">
              <i className='fab fa-twitter icon'></i></Link>
            <Link to='https://www.youtube.com/channel/UCas6cFjAa4BLWRAw0QMVFug' target="_blank">
              <i className='fab fa-youtube icon'></i></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
