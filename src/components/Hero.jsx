import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import '../styles/Hero.css';
import Heroimg from '../assets/Heroimg.png'; 
import useWindowWidth from '../hooks/useWindowWidth';

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true); // State for image loading
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoadingImage(false);
    img.src = Heroimg; 
  }, []);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const isMobile = windowWidth <= 768;

  return (
    <section className="hero" id="hero"> 
      <Container>
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6} className="hero-text">
            <p className="hero-small-text">Hey, I am John</p>
            <h1 className="hero-heading">
              I develop dynamic and User-Centred Web Applications
            </h1>
            <p className="small-text2">
              {isMobile && !showMore
                ? 'My expertise spans both front-end and back-end development...'
                : 'My expertise spans both front-end and back-end development enabling me to build comprehensive solutions that meet diverse client needs.'}
              {isMobile && (
                <Button
                  variant="link"
                  onClick={handleReadMore}
                  className="read-more-btn"
                >
                  {showMore ? 'Read Less' : 'Read More'}
                </Button>
              )}
            </p>
            <a href="#contact" className="cta-button">Get In Touch</a>
          </Col>
          <Col md={6} className="hero-image">
            {loadingImage ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <img src={Heroimg} alt="John" className="img-fluid" />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
