import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css';
import maintenanceImage from '../assets/maintenance.jpg'; 
import commissioningImage from '../assets/comissioning.jpg'; 
import installCommImage from '../assets/intall-commisiion.jpg'; 
import operationsImage from '../assets/operations.jpg'; 
import overhaulingImage from '../assets/overhauling.jpg'; 

const International = () => {
  const cards = [
    {
      title: 'Yaman',
      text: 'Yaman SBO14 blowing matrix, labeller rollquttro F35 & air conveyors',
      img: maintenanceImage,
    },
    {
      title: 'Pepsi Africa Beverages Company',
      text: 'Line speed 40k BPH. Technology Sidel. Complete sidel line dismantle, on loading in shipment, offloading, machine placement, commissioning, installation, dry running, production.',
      img: commissioningImage,
    },
    {
      title: 'Dubai',
      text: 'Completed sidel line commissioning, installation & production start-up. Blowing SBO14 universal, filler, capper arol, labeller rollquttro, SMI & pallatizer',
      img: installCommImage,
    },
    {
      title: 'Saudi-Arabia',
      text: 'Completed 3 projects of sacmi & sidel plant overhauling. Blowing, labeller filler & capper.',
      img: operationsImage,
    },
    {
      title: 'Qatar',
      text: 'Finalized a project sidel blowing overhauling & FT system installation.',
      img: overhaulingImage,
    },
  ];

  return (
    <div className="servicesContainer">
      <hr />
      <h1>International Clients</h1>
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

export default International;
