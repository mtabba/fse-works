import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import maintenanceImage from '../assets/maintenance.jpg'; 
import commissioningImage from '../assets/comissioning.jpg'; 
import installCommImage from '../assets/intall-commisiion.jpg'; 
import operationsImage from '../assets/operations.jpg'; 
import overhaulingImage from '../assets/overhauling.jpg'; 

const Local = () => {
  return (
    <div className="servicesContainer">
      <hr />
      <h1>Pakistani Clients</h1>
      <div className="floating-cards">
        <Card className="floating-card">
          <Card.Img variant="top" src={maintenanceImage} />
          <Card.Body>
            <Card.Title>Gourmet Beverage Faisalabad</Card.Title>
            <Card.Text>
            Complete line commissioning, installation & start-up with krones team
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={commissioningImage} />
          <Card.Body>
            <Card.Title>Pepsi Peshawar</Card.Title>
            <Card.Text>
            Pepsi Peshawar NBL-Sidel Plant 54k 500ml, 345ml ,300mlBPH l/45k BPH 1500ml super combi 06-01-2023 to 15-10-2023. 
            matrix blowing SBO24 11927292 filler, arol capper, labeller evo deco, ocmi packer, Pal kombi. 
            Shipment, offloading, all machine placement, commissioning, installation,production start-up
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={installCommImage} />
          <Card.Body>
            <Card.Title>Tricon Beverage Faisalabad</Card.Title>
            <Card.Text>
            2 used line installation, commissioning, production start-up.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={operationsImage} />
          <Card.Body>
            <Card.Title>Pepsi Punjab Beverages</Card.Title>
            <Card.Text>
            3 blowing & 3 labeller machine overhauling. Blowing Sbo16, Sbo12, SBO 8. labeller kronos contiroll HS, rollquttro,
            Lahore Six B krones blowmold S10, krones labeller contiroll labeller installation,  commissioning and production start-up
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="floating-card">
          <Card.Img variant="top" src={overhaulingImage} />
          <Card.Body>
            <Card.Title>Coca Cola Lahore</Card.Title>
            <Card.Text>
            Plant overhauling of sidel rollquattro F14 & sidel blowing overhauling.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Local;
