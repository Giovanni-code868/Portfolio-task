import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "../styles/Prowess.css";
import responsiveimg from "../assets/responsiveimg.svg";
import frontendimg from "../assets/frontendimg.svg";
import testingimg from "../assets/testingimg.svg";
import cloudimg from "../assets/cloudimg.svg";

const Prowess = () => {
  const [loadingImages, setLoadingImages] = useState(true);
  const expertiseData = [
    {
      title: "Responsive Design",
      icon: responsiveimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
    },
    {
      title: "Front-End Frameworks",
      icon: frontendimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
    },
    {
      title: "Testing and Debugging",
      icon: testingimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
    },
    {
      title: "Cloud Services",
      icon: cloudimg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..",
    },
  ];

  useEffect(() => {
    const imagesLoaded = expertiseData.map((item) => {
      const img = new Image();
      img.src = item.icon;
      return new Promise((resolve) => {
        img.onload = () => resolve(true);
      });
    });

    Promise.all(imagesLoaded).then(() => {
      setLoadingImages(false);
    });
  }, [expertiseData]);

  return (
    <section className="expertise-section" id="prowess">
      <Container>
        <div className="expertise-header">
          <p className="prowess-small-text">My Skills</p>
          <h2 className="prowess-main-heading">My Expertise</h2>
        </div>
        <Row>
          {expertiseData.map((item, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="expertise-card h-100">
                {loadingImages ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <div className="card-image-container">
                    <Card.Img
                      variant="top"
                      src={item.icon}
                      className="card-icon"
                    />
                  </div>
                )}
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Prowess;
