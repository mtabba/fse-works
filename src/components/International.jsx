import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import maintenanceImage from '../assets/maintenance.jpg'; 
import commissioningImage from '../assets/comissioning.jpg'; 
import installCommImage from '../assets/intall-commisiion.jpg'; 
import operationsImage from '../assets/operations.jpg'; 
import overhaulingImage from '../assets/overhauling.jpg'; 

const International = () => {
  return (
    <div className="servicesContainer">
      <hr />
      <h1>International Clients</h1>
      <div className="floating-cards">
        <Card className="floating-card">
          <Card.Img variant="top" src={maintenanceImage} />
          <Card.Body>
            <Card.Title>Yaman</Card.Title>
            <Card.Text>
            Yaman SBO14 blowing matrix, labeller rollquttro F35 & air conveyors            
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={commissioningImage} />
          <Card.Body>
            <Card.Title>Pepsi Africa Beverages Company</Card.Title>
            <Card.Text>
            Line speed 40k BPH. Technology Sidel. Complete sidel line dismantle, on loading in shipment, offloading, machine placement, commissioning, installation, dry running, production.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={installCommImage} />
          <Card.Body>
            <Card.Title>Dubai</Card.Title>
            <Card.Text>
            Completed sidel line commissioning, installation & production start-up. 
            Blowing SBO14 universal, filler, capper arol, labeller rollquttro, SMI & pallatizer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={operationsImage} />
          <Card.Body>
            <Card.Title>Saudi-Arabia</Card.Title>
            <Card.Text>
            Completed  3 projects of sacmi & sidel plant overhauling. Blowing, labeller filler & capper.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={overhaulingImage} />
          <Card.Body>
            <Card.Title>Qatar</Card.Title>
            <Card.Text>
            Finalized a project sidel blowing overhauling & FT system installation.
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default International;
