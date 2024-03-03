import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"
import YoutubeEmbed from "../../common/youtubeVideo/YoutubeEmbed"

const Hero = () => {


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO CS Vision' title='Unlock the Power of Code: Where Learning Knows No Age Limit!' />
            <p>If You Are Waiting For The Right Time, It's Now.</p>
            {/* <div className='button' style={{ zIndex: '2000', position: "relative" }}>
              <Link to='https://forms.gle/K8HsU9yKhFF8NAsB8' target="_blank">
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'> </i>
                </button></Link>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <div className='margin'><YoutubeEmbed></YoutubeEmbed></div>
    </>
  )
}

export default Hero
