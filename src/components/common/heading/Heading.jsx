import React from "react"
import comingSoon from '../../assets/comingsoon.gif'
const Heading = ({ subtitle, title, show }) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
        {show &&
          <img src={comingSoon}
            style={{ "width": "7%", "height": "7%", marginLeft: "65%", marginTop: "-6%" }}
            alt="comingSoon" />
        }
      </div>
    </>
  )
}

export default Heading
