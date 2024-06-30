import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import '../styles/Feedback.css';
import avatar1 from '../assets/avatar1.svg'; 
import avatar2 from '../assets/avatar2.svg'; 
import avatar3 from '../assets/avatar3.svg'; 
import star from '../assets/star.svg'; 

const Feedback = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const feedbackData = [
    {
      stars: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      avatar: avatar1,
      name: 'Dianne Russell',
      company: 'Starbucks'
    },
    {
      stars: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      avatar: avatar2,
      name: 'Kristin Watson',
      company: 'Louis Vuitton'
    },
    {
      stars: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
      avatar: avatar3,
      name: 'Kathryn Murphy',
      company: 'McDonald\'s'
    }
  ];

  useEffect(() => {
    const handleImageLoad = (src) => {
      setImagesLoaded((prev) => ({ ...prev, [src]: true }));
    };

    feedbackData.forEach((item) => {
      const img = new Image();
      img.src = item.avatar;
      img.onload = () => handleImageLoad(item.avatar);
    });

    // Check if all images are loaded
    if (Object.keys(imagesLoaded).length === feedbackData.length) {
      setLoading(false);
    }
  }, [imagesLoaded, feedbackData]);

  return (
    <section className="feedback-section" id='testimonials'>
      <Container>
        <div className="feedback-header">
          <p className="feedback-small-text">Client Feedback</p>
          <h2 className="feedback-main-heading">Customer Testimonials</h2>
        </div>
        <Row>
          {feedbackData.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="feedback-card h-100">
                <Card.Body>
                  <div className="stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <img key={i} src={star} alt="star" className="star-icon" />
                    ))}
                  </div>
                  <Card.Text className="feedback-text">{item.text}</Card.Text>
                  <div className="feedback-footer">
                    {loading ? (
                      <Spinner animation="border" role="status" className="m-auto">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      <img src={item.avatar} alt={item.name} className="avatar" />
                    )}
                    <div>
                      <p className="feedback-name">{item.name}</p>
                      <p className="feedback-company">{item.company}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
