import React from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo}
                style={{
                  height: "91%",
                  width: "18%",
                  marginLeft: "-81px",
                  marginBottom: "-15%"
                }}
                alt="logo"></img>
            </Link>

            <h1>CS Vision</h1>
            <span>DON'T LEARN WITHOUT US</span>
          </div>

          <div className="social">
            <Link
              to="https://www.facebook.com/profile.php?id=61557848445064"
              target="_blank"
            >
              <i className="fab fa-facebook-f icon" title="Facebook"></i>
            </Link>

            <Link
              to="https://www.instagram.com/csvision.us/"
              target="_blank"
            >
              <i className="fab fa-instagram icon" title="Instagram"></i>
            </Link>

            <Link
              to="https://www.linkedin.com/in/cs-vision-4721b8302/"
              target="_blank"
            >
              <i className="fab fa-linkedin icon" title="LinkedIn"></i>
            </Link>

            <Link
              to="https://www.youtube.com/channel/UCas6cFjAa4BLWRAw0QMVFug"
              target="_blank"
            >
              <i className="fab fa-youtube icon" title="YouTube"></i>
            </Link>

            <Link
              to="https://play.google.com/store/apps/details?id=co.alexis.dandm"
              target="_blank"
            >
              <i className="fab fa-android icon" title="Android App"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
