import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../assets/fseworks-technicians.jpg'; 
import image1 from '../assets/commissioning.jpg'; 
import image2 from '../assets/installation.jpg'; 

const FirstPage1 = () => {

  return (
    <Slide>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image})` }}>
            <div>
              <h1>MAINTENANCE</h1>
            </div>
            <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
        <div className='Carousal' style={{ 'backgroundImage': `url(${image1})` }}>
          <div>
            <h1>COMISSIONING</h1>
          </div>
          <button> Learn More </button>
          </div>
      </div>
      <div className="each-slide-effect">
          <div className='Carousal' style={{ 'backgroundImage': `url(${image2})` }}>
            <div>
              <h1>INSTALLATION</h1>
           </div>
           <button> Learn More </button>
          </div>
      </div>
   </Slide>
  
)}

export default FirstPage1