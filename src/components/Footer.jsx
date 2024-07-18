// Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="py-4">
                <p>© 2023 MIND TECH SERVICES. All rights reserved.</p>
                <p>Follow us on social media!</p>
                <ul className="footer-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </Container>
        </footer>
    );
};

export default Footer;
