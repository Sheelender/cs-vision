import React from "react"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { certificates } from "../../dummydata"

const Certificates = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='' title='We are certified By' show="false" />
          <div className='content gridtwo'>
            {certificates.map((val) => (
              <div className='box'>
                {/* <div className='img'> */}
                <img src={val.cover} style={{ width: "200px", height: "200px" }}/>
                 {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Certificates
