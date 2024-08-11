import React from "react"
// import { useLocation } from "react-router-dom"

const Back = ({ title, create, setCreate }) => {
  // const location = useLocation()



  return (
    <>
      <section className='back'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        {create === "no" && <button style={{ zIndex: "100000" }} type="button" onClick={() => setCreate("yes")}>Post Your Blog</button>}
        {create === "yes" && <button type="button" onClick={() => setCreate("no")}>See what others are Posting</button>}
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
