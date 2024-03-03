import "./App.css"
import React from 'react';
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
function App() {
  return (
    <>
      {/* <div style={{ width: "145%" }}> */}
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutCard />} />
          <Route exact path='/courses' element={<HAbout />} />
          <Route exact path='/team' element={<Testimonal />} />
          <Route exact path='/pricing' element={<HAbout />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      {/* </div> */}
    </>
  )
}

export default App
