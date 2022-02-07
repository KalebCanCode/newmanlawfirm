import React, {useState, useEffect} from 'react';
import '../compCSS/gall-carousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../img/gallery/IMG_0086.JPG'
import image2 from '../img/gallery/IMG_0053.JPG'
import image3 from '../img/gallery/IMG_0022.JPG'
import image4 from '../img/gallery/IMG_0067.JPG'
import image5 from '../img/gallery/IMG_0069.JPG'
import image6 from '../img/gallery/IMG_0073.JPG'
import image7 from '../img/gallery/IMG_0103.JPG'
import image8 from '../img/gallery/IMG_0181.JPG'
import image9 from '../img/gallery/IMG_0206.JPG'
import image10 from '../img/gallery/IMG_0190.JPG'
import image11 from '../img/gallery/IMG_0126.JPG'
import image12 from '../img/gallery/IMG_0014.JPG'
import image13 from '../img/gallery/IMG_0121.JPG'
import image14 from '../img/gallery/IMG_0013.JPG'



const GalleryCarousel = () => {
  return(
<div className="carousel">
  <AliceCarousel
     autoPlay
     infinite
     disableButtonsControls
     autoPlayInterval="5000">
  <img src={image1} className="gallery-image" />
  <img src={image2} className="gallery-image" />
  <img src={image3} className="gallery-image" />
  <img src={image4} className="gallery-image" />
  <img src={image5} className="gallery-image" />
  <img src={image6} className="gallery-image" />
  <img src={image7} className="gallery-image" />
  <img src={image8} className="gallery-image" />
  <img src={image9} className="gallery-image" />
  <img src={image10} className="gallery-image" />
  <img src={image11} className="gallery-image" />
  <img src={image12} className="gallery-image" />
  <img src={image13} className="gallery-image" />
  <img src={image14} className="gallery-image" />




</AliceCarousel>
</div>
  )
}

export default GalleryCarousel
