import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import companyLogo from '../assets/companylogo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'; // Import your custom styles for Header

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
      <Navbar expand="lg" bg="warning" className="headerMain">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src={companyLogo} alt="logo" className="logo" />
            <div className="headerName ms-3">
              <span>MIND TECH SERVICES</span>
              <div>Field Services and Consultation</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
