import React from 'react';
import Image1 from '../../img/gallery/IMG_0121.JPG'
import './css/ksn.css'
import { Link } from 'react-router-dom';
import SkinnyNavbar from '../skinnyNavbar.js';
import Copyright from '../copyright.js'
import {ReactComponent as BackIcon} from '../backIcon.svg';


const Kaleb = () => {
  return (
  <>
  <div>
    <SkinnyNavbar/>
  </div>
    <div className="profileK">
      <Link className="prev"to="/about"><BackIcon/></Link><br/>
      <h1 className="profile-titleK">Kaleb Slater Newman</h1>
      <img className="profile-imageK" src={Image1} alt=""/>
      <p className="profile-descriptionK"><em>Web Developer</em>
      <br/>Education: <span className="goldie"> Brown University</span>
      <br/>Contact: <a className="goldie" href = "mailto: kalebnewman2.international@gmail.com">kalebnewman2.international@gmail.com</a></p>
      <p className="profile-descriptionKBIG"> <strong>Kaleb joined Newman Law Firm in the summer of 2020 to develop this website.
        He is now a first year at Brown University who is majoring in Physics and Computer Science.
        Kaleb continues to keep the website running, actively updates the site, and provides IT services.</strong></p>

    </div>
    <div className="bottomBoxGr"><Copyright/></div>

</>
  )
}

export default Kaleb
