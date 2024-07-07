import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../assets/maintenance.jpg'; 
import image1 from '../assets/comissioning.jpg'; 
import image2 from '../assets/intall-commisiion.jpg'; 
import image3 from '../assets/operations.jpg'; 
import image4 from '../assets/overhauling.jpg'; 

const FirstPage1 = () => {

  return (
    <Slide>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image})` }}>
            <div className='shadowEffect'>
              <h1>MAINTENANCE</h1>
            </div>
            <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
        <div className='Carousal' style={{ 'backgroundImage': `url(${image1})` }}>
        <div className='shadowEffect'>
            <h1>COMISSIONING</h1>
          </div>
          <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image2})` }}>
          <div className='shadowEffect'>
          <h1>INSTALLATION</h1>
           </div>
           <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image3})` }}>
          <div className='shadowEffect'>
          <h1>PLANT OPERATIONS</h1>
           </div>
           <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image4})` }}>
          <div className='shadowEffect'>
          <h1>OVAERHAULING</h1>
           </div>
           <button> Learn More </button>
          </div>
      </div>

   </Slide>
  
)}

export default FirstPage1