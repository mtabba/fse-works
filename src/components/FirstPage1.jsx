import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import image from '../assets/maintenance.jpg'; 
import image1 from '../assets/comissioning.jpg'; 
import image2 from '../assets/intall-commisiion.jpg'; 
import image3 from '../assets/operations.jpg'; 
import image4 from '../assets/overhauling.jpg'; 

const FirstPage1 = () => {

  return (
    <div className="each-slide-effect">
      <Carousel fade>
      <Carousel.Item 
      style={{'backgroundImage': `url(${image})`}}
      className='Carousal'>
        <Carousel.Caption 
        className='shadowEffect'>
          <h1>MAINTENANCE</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      style={{'backgroundImage': `url(${image1})`}}
      className='Carousal'>
        <Carousel.Caption className='shadowEffect'>
          <h1>COMMISSIONING</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      style={{'backgroundImage': `url(${image2})`}}
      className='Carousal'>
        <Carousel.Caption className='shadowEffect'>
          <h1>INSTALLATION</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      style={{'backgroundImage': `url(${image3})`}}
      className='Carousal'>
        <Carousel.Caption className='shadowEffect'>
          <h1>PLANT OPERATIONS</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      style={{'backgroundImage': `url(${image4})`}}
      className='Carousal'>
        <Carousel.Caption className='shadowEffect'>
          <h1>OVERHAULING</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    // <div className="slideContainer">
    // <Slide>
    //   <div className="each-slide-effect">
    //       <div className='Carousal' style={{ 'backgroundImage': `url(${image})` }}>
    //         <div className='shadowEffect'>
    //           <h1>MAINTENANCE</h1>
    //         </div>
    //         <button> Learn More </button>
    //       </div>
    //   </div>
    //   <div className="each-slide-effect">
    //     <div className='Carousal' style={{ 'backgroundImage': `url(${image1})` }}>
    //     <div className='shadowEffect'>
    //         <h1>COMISSIONING</h1>
    //       </div>
    //       <button> Learn More </button>
    //       </div>
    //   </div>
    //   <div className="each-slide-effect">
    //       <div className='Carousal' style={{ 'backgroundImage': `url(${image2})` }}>
    //       <div className='shadowEffect'>
    //       <h1>INSTALLATION</h1>
    //        </div>
    //        <button> Learn More </button>
    //       </div>
    //   </div>
    //   <div className="each-slide-effect">
    //       <div className='Carousal' style={{ 'backgroundImage': `url(${image3})` }}>
    //       <div className='shadowEffect'>
    //       <h1>PLANT OPERATIONS</h1>
    //        </div>
    //        <button> Learn More </button>
    //       </div>
    //   </div>
    //   <div className="each-slide-effect">
    //       <div className='Carousal' style={{ 'backgroundImage': `url(${image4})` }}>
    //       <div className='shadowEffect'>
    //       <h1>OVAERHAULING</h1>
    //        </div>
    //        <button> Learn More </button>
    //       </div>
    //   </div>
    //   </Slide>
    //   </div>
)}

export default FirstPage1