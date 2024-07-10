import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import teamMember1 from '../assets/CEO.png'; 

const AboutUs = () => {
    return (
        <Container className="py-5">
            <h1>About Us</h1>
            <Row className="gx-4">
            <Col md={8}>
                    <div className="mb-4 paragraph">
                        <h6 className="py-5">We have completed numerous projects with Krones, Sidel, KHS, Secmi, and SMI. Our expertise includes new and used machines/lines Installation and Commissioning, Maintenance, Overhauling of CSD, water, and beverage sector. We have received blowmold and labeller machine trainings from Krones, Sidel, and KHS KD Academy in Germany. Additionally, we have undergone training for blowmold, labeller, and kister machines with KHS Engineers.</h6>
                        <h6>We offer services for PET plants in the water and beverages sector, operating in countries including the USA, UAE, KSA, Qatar, Afghanistan, Yemen, Iraq, and others. Our services aim to enhance plant efficiency, improve raw material yield, and ensure breakdown control. We have a team of over 100 engineers dedicated to our mission. Moreover, we extend our services to pharmaceutical companies in the water and beverage sectors.</h6>
                    </div>
                </Col>
                <Col md={4}>
                    <Card className="shadow">
                        <Card.Img variant="top" src={teamMember1} />
                        <Card.Body>
                            <Card.Title>Asad Randhawa</Card.Title>
                            <Card.Text>
                                CEO/ Project Manager
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
