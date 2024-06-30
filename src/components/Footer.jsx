import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
import FooterLogo from '../assets/Navlogo.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';
import LinkedInIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer bg-footer">
      <Container>
        <Row className="align-items-center footer-top">
          <Col md={4} className="footer-logo-text">
            <img src={FooterLogo} alt="Logo" className="footer-logo" />
            <span className="footer-brand">GiovanniDev</span>
          </Col>
          <Col md={4} className="footer-nav-links">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">About Me</a>
            <a href="#">Contact</a>
            <a href="#">Testimonials</a>
          </Col>
          <Col md={4} className="footer-social-links text-end">
            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="footer-bottom align-items-center">
          <Col md={6} className="footer-bottom-left">
            <span>Made with </span>
            <span className="footer-brand">by Airdekan</span>
          </Col>
          <Col md={6} className="text-end footer-bottom-right">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
