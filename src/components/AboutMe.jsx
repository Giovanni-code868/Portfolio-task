import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import '../styles/AboutMe.css';
import aboutImg from '../assets/About Me.svg';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMore, setShowMore] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = aboutImg;
    img.onload = () => setLoadingImage(false);
  }, []);

  return (
    <section className="about-me-section" id='about'>
      <Container>
        <Row className="align-items-center">
          {isMobile ? (
            <>
              <Col xs={12} className="mb-3">
                <h2 className="about-me-heading">About Me</h2>
              </Col>
              <Col xs={12} className="mb-3">
                {loadingImage ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <img src={aboutImg} alt="About Me" className="img-fluid about-me-image" />
                )}
              </Col>
              <Col xs={12}>
                <p className="about-me-text">
                  {showMore 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r."
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis."
                  }
                </p>
                <Button onClick={() => setShowMore(!showMore)} className="read-more-button">
                  {showMore ? 'Read Less' : 'Read More'}
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col md={6}>
                {loadingImage ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <img src={aboutImg} alt="About Me" className="img-fluid about-me-image" />
                )}
              </Col>
              <Col md={6}>
                <p className="small-about-text">About</p>
                <h2 className="about-me-heading">About Me</h2>
                <p className="about-me-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                </p>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
