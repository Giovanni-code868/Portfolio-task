import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import '../styles/portfolio.css';
import githubLogo from '../assets/github.svg';
import arrowIcon from '../assets/arrow-up-right.svg';
import project1 from '../assets/portfolio1.svg';
import project2 from '../assets/portfolio2.svg';
import project3 from '../assets/portfolio3.svg';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const portfolioData = [
    { title: 'Abuse', image: project1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: '#' },
    { title: 'App Dashboard', image: project2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: '#' },
    { title: 'Easy Rent', image: project3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: '#' },
  ];

  useEffect(() => {
    const handleImageLoad = (src) => {
      setImagesLoaded((prev) => ({ ...prev, [src]: true }));
    };

    portfolioData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => handleImageLoad(item.image);
    });

    // Check if all images are loaded
    if (Object.keys(imagesLoaded).length === portfolioData.length) {
      setLoading(false);
    }
  }, [imagesLoaded, portfolioData]);

  return (
    <section className="portfolio-section" id='portfolio'>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <p className="portfolio-small-text">Recent Projects</p>
            <h2 className="portfolio-main-heading">My Portfolio</h2>
          </Col>
          <Col md={6} className="text-md-end text-sm-start">
            <Button variant="primary" className="github-button">
              <img src={githubLogo} alt="Github Logo" className="me-2 github-logo" />
              Visit My Github
            </Button>
          </Col>
        </Row>
        <Row>
          {portfolioData.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="portfolio-card h-100">
                {loading ? (
                  <Spinner animation="border" role="status" className="m-auto">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <Card.Img variant="top" src={item.image} className="card-image" />
                )}
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-description">{item.description}</Card.Text>
                  <div className="link-section">
                    <a href={item.link} className="visit-link">
                      Visit Website
                    </a>
                    <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
                  </div>
                </Card.Body>
                <hr className="card-divider" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
