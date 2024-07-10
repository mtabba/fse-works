import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
      // style={{'backgroundImage': `url(${image})`}}
      className='Carousal'>
        <img src={image} alt="" />
        <Carousel.Caption 
        className='shadowEffect'>
          <h1>MAINTENANCE</h1>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      // style={{'backgroundImage': `url(${image1})`}}
      className='Carousal'>
        <img src={image1} alt="" />
        <Carousel.Caption className='shadowEffect'>
          <h1>COMMISSIONING</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      // style={{'backgroundImage': `url(${image2})`}}
      className='Carousal'>
       <img src={image2} alt="" />
        <Carousel.Caption className='shadowEffect'>
          <h1>INSTALLATION</h1>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      // style={{'backgroundImage': `url(${image3})`}}
      className='Carousal'>
        <img src={image3} alt="" />
          <Carousel.Caption className='shadowEffect'>
          <h1>PLANT OPERATIONS</h1>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      // style={{'backgroundImage': `url(${image4})`}}
      className='Carousal'>
       <img src={image4} alt="" />
        <Carousel.Caption className='shadowEffect'>
          <h1>OVERHAULING</h1>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          <button> Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

)}

export default FirstPage1