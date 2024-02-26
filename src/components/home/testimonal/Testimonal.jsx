import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import { Link } from "react-router-dom"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='' title='Our Successful Mentors' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <Link to={val.linkdin} target="_blank">
                <div className='items shadow'>
                  <div className='box flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa fa-quote-left icon'></i>
                    </div>
                    <div className='name'>
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
