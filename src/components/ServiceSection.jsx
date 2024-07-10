import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import productionImg from '../assets/maintenance.jpg';
import maintenanceImg from '../assets/maintenance.jpg';
import projectImg from '../assets/maintenance.jpg';
import automationImg from '../assets/maintenance.jpg';
import mechanicalImg from '../assets/maintenance.jpg';
import machineryImg from '../assets/maintenance.jpg';
import '../App.css'; // Import your custom CSS for additional styling


const ServiceSection = () => {
  return (
    <div className="Service_section">
      <Container>
        <h1>Global Excellence in Field Services</h1>
        <p>
        We proudly stand as a world-class service provider in the manufacturing industry, 
        leveraging a team of over 100 skilled engineers and technicians. 
        Our commitment extends across more than 20 countries, 
        where we deliver tailored engineering solutions to production plants and equipment manufacturers. 
        Our experts travel globally to assess and execute industrial projects, ensuring quality, 
        safety, and cost-effectiveness are upheld to the highest standards
        </p>

        <Row>
          <Col xl={4} sm={6}>
            <div className="Service_a Service-list">
                <div className="Service_content">
                  <h3>PET & Beverage line</h3>
                  <img src={productionImg} alt="Production Line" />
                  <p>Production line services of all type of Blowmold, Filler, Capper, Labbeller, Packer, Palletizer, Robo-Pack, Laser Jet</p>
                </div>
            </div>
          </Col>
          <Col xl={4} sm={6}>
            <div className="Service_b Service-list">
                <div className="Service_content">
                  <h3>Maintenance Services</h3>
                  <img src={maintenanceImg} alt="Maintenance Contract" />
                  <p>Our maintenance Services helps keep your machines working at their full capacity without losing value.</p>
                </div>
            </div>
          </Col>
          <Col xl={4} sm={6}>
            <div className="Service_c Service-list">
                <div className="Service_content">
                  <h3>Commissioning & Startup</h3>
                  <img src={projectImg} alt="Project Management" />
                  <p>We take responsibility from scratch to End which includes designing and implementation of top-quality engineering solutions, ensuring your success.</p>
                </div>
            </div>
          </Col>
          <Col xl={4} sm={6}>
            <div className="Service_d Service-list">
                <div className="Service_content">
                  <h3>Automation and Control</h3>
                  <img src={automationImg} alt="Automation" />
                  <p>Our programmers which are certified professionals have complete command over instrumentation, electrical wiring, and automation.</p>
                </div>
            </div>
          </Col>
          <Col xl={4} sm={6}>
            <div className="Service_e Service-list">
                <div className="Service_content">
                  <h3>Mechanical & Electrical</h3>
                  <img src={mechanicalImg} alt="Mechanical & Electrical" />
                  <p>We have a team of specialized technicians for particular machines, We prioritize the customers need and provide results.</p>
                </div>
            </div>
          </Col>
          <Col xl={4} sm={6}>
            <div className="Service_f Service-list">
                <div className="Service_content">
                  <h3>Machinery Services</h3>
                  <img src={machineryImg} alt="Machinery Services" />
                  <p>We provide full trading services, including Dismantling, Modification, Customization, Rebuilding, and more.</p>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
