import "./App.css"
import React, { Fragment } from 'react';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Testimonal from "./components/home/testimonal/Testimonal";
import HAbout from "./components/home/HAbout";
import AboutCard from "./components/about/AboutCard";
import FetchCSVData from "./components/fetchData/FetchCSVData";
import WhatsAppButton from "./components/common/whatsapp/WhatsAppButton";
function App() {
  // FetchCSVData
  return (
    <Fragment>
      {/* <div style={{ width: "145%" }}> */}
      <Router>
        {/* <FetchCSVData></FetchCSVData> */}
        {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaI6UysUnR2XE9hx5skJJX-lMCn_n2lukKDWz8-CFxUOM1tT3c9jICaSEZO_skTx-trpib5kqIAKE_/pubhtml?widget=true&amp;headers=false"></iframe> */}
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutCard />} />
          <Route exact path='/courses' element={<HAbout />} />
          <Route exact path='/team' element={<Testimonal />} />
          <Route exact path='/pricing' element={<HAbout />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer />
      </Router>
      {/* </div> */}
      <WhatsAppButton />
    </Fragment>
  )
}

export default App
