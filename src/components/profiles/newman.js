import React from 'react';
import Image1 from './IMG_0125.JPG'
import Image2 from './IMG_0062.JPG'
import './css/newman.css'
import { Link } from 'react-router-dom';
import SkinnyNavbar from '../skinnyNavbar.js';
import Copyright from '../copyright.js'
import {ReactComponent as BackIcon} from '../backIcon.svg';


const Newman = () => {
  return (
  <>
  <div>
    <SkinnyNavbar/>
  </div>
    <div className="profile">
        <Link className="prev"to="/about"><BackIcon/></Link><br/>
      <h1 className="profile-title">Jarahn Newman Esq.</h1>
      <img className="profile-image" src={Image1} alt=""/>
        <p className="profile-description"><em>Defense Lawyer</em>
        <br/>Education: <span className="goldie">Morehouse College, BA</span><span className="goldie">Florida Coastal, JD</span>
        <br/>Contact: <a className="goldie" href = "mailto: newmanlawfirmpa@gmail.com">newmanlawfirmpa@gmail.com</a><a className="goldie" href="tel:9044027499">(904) 402-7499</a></p>
      <p className="profile-description"><strong>
  When I was 9, I vividly remember watching Matlock with my Grandfather. <br/> I was amazed and
  immediately knew my life’s purpose. <br/> To defend the accused. <br/><br/> Hello, my name is Jarahn Newman
  and from 9 to now 44, I am passionate about representing each and every client. From being a
  judicial law clerk, Public defender and almost 18 years in private practice, I am prepared to
  represent you or your love one.</strong>
</p>
<img className="profile-image" id="img2" src={Image2} alt=""/>
</div>
    <div className="bottomBoxGr"><Copyright/></div>
</>
  )
}

export default Newman
