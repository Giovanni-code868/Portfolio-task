import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-header">
          <p className="contact-small-text">Get in Touch</p>
          <h2 className="contact-main-heading">Contact Me</h2>
          <p className="contact-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Form className="contact-form">
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control type="email" className="form-control" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label className="form-label">Phone Number</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Label className="form-label">Message</Form.Label>
            <Form.Control as="textarea" className="form-control message-box" placeholder="Type your message..." />
          </Form.Group>
          <Form.Group controlId="formTerms">
            <Form.Check type="checkbox" label="I accept the terms" className="form-check" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="submit-button">Submit</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
