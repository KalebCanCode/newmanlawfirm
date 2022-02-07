import React from 'react'
import '../compCSS/gallery.css'
import { Link } from 'react-router-dom';
import GalleryNavbar from './gallerynavbar.js';
import GalleryCarousel from './gallery-carousel.js'
import ContactForm from './contactForm.js'
import Copyright from './greyCopyright.js'

const Gallery = () => {
  return (
    <>
    <div className="gallery-page">
    <GalleryNavbar/>
      <h1 className="gallery-title">The Gallery</h1>
      <p className="gallery-description">Along with our practice, at Newman Law Firm we love capturing the beauty of each moment. <br/>
        We take pride in being present. But each photo allows us to sometimes escape this, and look back on the rich experiences we have had. The gallery below is a contantly updated stream of some of our favorite pictures!</p>
    <div className="gallery-carousel">
      <GalleryCarousel/>
    </div>
    <div className="contax-containerG">
      <ContactForm/>
      </div>
      <div className="bottomBoxxG"><Copyright/></div>
    </div>
    </>
  )
}

export default Gallery
