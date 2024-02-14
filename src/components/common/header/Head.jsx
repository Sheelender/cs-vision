import React from "react"
import logo from "../../assets/logo.png"

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
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
