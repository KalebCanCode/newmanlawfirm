import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Home from './Home.js';
import Newman from './components/profiles/newman.js'
import Zanders from './components/profiles/zanders.js'
import Kaleb from './components/profiles/ksn.js'
import PracticeArea from './components/practice-areas.js'
import Criminal from './components/areas/criminal.js'
import Family from './components/areas/family.js'
import Gallery from './components/gallery.js'
import Contact from './components/contact.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const App = () => {


  return(
 <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/about/jarahn-newman" element={<Newman/>}></Route>
          <Route exact path="/about/marvin-zanders" element={<Zanders/>}></Route>
          <Route exact path="/about/kaleb-newman" element={<Kaleb/>}></Route>
          <Route exact path="/practice-areas"element={<PracticeArea/>}></Route>
          <Route exact path="/practice-areas/criminal-law"element={<Criminal/>}></Route>
          <Route exact path="/practice-areas/family-law"element={<Family/>}></Route>
          <Route exact path="/gallery"element={<Gallery/>}></Route>
          <Route exact path="/contact"element={<Contact/>}></Route>
        </Routes>
    </Router>
    </>
  )
}


export default App
