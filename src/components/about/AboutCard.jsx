import React, { useEffect } from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import comingSoon from '../assets/comingsoon.gif'
import image from '../assets/about.png'

const AboutCard = ({ setName }) => {

  useEffect(() => {
    setName('');
  })

  console.log("Inside About card")
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={image} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>&#160; {val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
