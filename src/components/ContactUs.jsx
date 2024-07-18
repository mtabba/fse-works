// src/components/ContactUs.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../App.css';

const ContactUs = () => {
    return (
        <Container className="contact-container py-4">
            <h1>Contact Us</h1>
            <Row>
                <Col md={6} className="mb-4">
                    <h4>Get in Touch</h4>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h4>Our Location</h4>
                    <p>1234 Street Name, City, Country</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
