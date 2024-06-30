import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/Navbar.css';
import Navlogo from '../assets/Navlogo.svg';

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={Navlogo} alt="Logo" className="navbar-logo" />
          <span className="navbar-brand">GiovanniDev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#about" className="nav-link">About Me</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </Nav>
          <a href="#contact" className="contact-button">Contact Me</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
