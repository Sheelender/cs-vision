import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import comingSoon from '../assets/comingsoon.gif'

const AboutCard = () => {
  console.log("Inside About card")
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      {val.id === 2 &&
                        <img src={comingSoon}
                          style={{
                            width: "64%",
                            height: "39%",
                            marginLeft: "155%",
                            marginTop: "5%",
                            position: "relative"
                          }}
                          // "width": "7%", "height": "7%", marginLeft: "65%", marginTop: "-6%" }}
                          alt="comingSoon"
                        />}
                    </div>

                    <div className='text'>
                      <h2>{val.title}</h2>

                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
