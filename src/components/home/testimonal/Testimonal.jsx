import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import ScrollableScreen from '../../common/animation/ScrollableScreen';


const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='' title='Our Successful Mentors' />

          <div className='content grid1'>
            <ScrollableScreen items={testimonal} />
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonal
