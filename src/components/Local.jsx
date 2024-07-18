import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css';
import maintenanceImage from '../assets/maintenance.jpg'; 
import commissioningImage from '../assets/comissioning.jpg'; 
import installCommImage from '../assets/intall-commisiion.jpg'; 
import operationsImage from '../assets/operations.jpg'; 
import overhaulingImage from '../assets/overhauling.jpg'; 

const Local = () => {
  const cards = [
    {
      title: 'Gourmet Beverage Faisalabad',
      text: 'Complete line commissioning, installation & start-up with krones team',
      img: maintenanceImage,
    },
    {
      title: 'Pepsi Peshawar',
      text: 'Pepsi Peshawar NBL-Sidel Plant 54k 500ml, 345ml, 300ml BPH l/45k BPH 1500ml super combi. Shipment, offloading, all machine placement, commissioning, installation, production start-up.',
      img: commissioningImage,
    },
    {
      title: 'Tricon Beverage Faisalabad',
      text: '2 used line installation, commissioning, production start-up.',
      img: installCommImage,
    },
    {
      title: 'Pepsi Punjab Beverages',
      text: '3 blowing & 3 labeller machine overhauling. Installation and production start-up.',
      img: operationsImage,
    },
    {
      title: 'Coca Cola Lahore',
      text: 'Plant overhauling of sidel rollquattro F14 & sidel blowing overhauling.',
      img: overhaulingImage,
    },
  ];

  return (
    <div className="servicesContainer">
      <hr />
      <h1>Pakistani Clients</h1>
      <Carousel controls={false} indicators={true} interval={3000}>
        {cards.reduce((acc, card, index) => {
          if (index % 3 === 0) acc.push([]);
          acc[acc.length - 1].push(card);
          return acc;
        }, []).map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="card-container">
              {group.map((card) => (
                <Card className="floating-card" key={card.title}>
                  <Card.Img variant="top" src={card.img} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Local;
