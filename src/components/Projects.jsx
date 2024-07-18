import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Ensure your CSS file is imported
import projectImage from '../assets/engineering.svg'; 
import projectImage1 from '../assets/add_task.svg'; 
import projectImage2 from '../assets/editor_choice.svg'; 
import projectImage3 from '../assets/globe_asia.svg'; 

const Projects = () => {
    const projectData = [
        {
            title: '+50',
            text: 'Specialized Technicians',
            img: projectImage,
        },
        {
            title: '+300',
            text: 'Completed Projects',
            img: projectImage1,
        },
        {
            title: '+50',
            text: 'Years of on-site Experience',
            img: projectImage2,
        },
        {
            title: '+20',
            text: 'Countries Served',
            img: projectImage3,
        },
    ];

    return (
        <Container className="py-4">
            <Row className="gx-5 justify-content-center">
                {projectData.map((project, index) => (
                    <Col xs={6} md={2} key={index} className="mb-4">
                        <Card className="shadow text-center project-card">
                            <Card.Img variant="top" src={project.img} className="img-warning" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
