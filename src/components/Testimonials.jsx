import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css';
import testimonialImage from '../assets/Dubai.jpg'; // Add a relevant testimonial image

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            text: "MIND TECH SERVICES provided exceptional support during our commissioning.",
            img: testimonialImage,
        },
        {
            name: 'Jane Smith',
            text: "Their team is knowledgeable and reliable, always delivering on time.",
            img: testimonialImage,
        },
        {
            name: 'Ali Khan',
            text: "Great service and excellent communication throughout the project.",
            img: testimonialImage,
        },
        {
            name: 'Sara Ali',
            text: "A fantastic experience from start to finish. Highly recommend!",
            img: testimonialImage,
        },
        {
            name: 'Imran Shah',
            text: "Professional and dedicated team, they exceeded our expectations.",
            img: testimonialImage,
        },
        {
            name: 'Fatima Noor',
            text: "Outstanding service and commitment to quality. Truly impressed!",
            img: testimonialImage,
        },
    ];

    return (
        <div className="servicesContainer">
            <hr />
            <h1>What Our Clients Say</h1>
            <Carousel controls={false} indicators={true} interval={3000}>
                {testimonials.reduce((acc, testimonial, index) => {
                    if (index % 3 === 0) acc.push([]);
                    acc[acc.length - 1].push(testimonial);
                    return acc;
                }, []).map((group, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="card-container">
                            {group.map((testimonial) => (
                                <Card className="floating-card" key={testimonial.name}>
                                    <Card.Img variant="top" src={testimonial.img} />
                                    <Card.Body>
                                        <Card.Title>{testimonial.name}</Card.Title>
                                        <Card.Text>{testimonial.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
