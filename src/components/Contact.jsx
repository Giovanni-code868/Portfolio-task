import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    termsAccepted: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must accept the terms";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form or handle API call here
      alert("Form submitted successfully!");
      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        termsAccepted: false,
      });
      setFormErrors({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        termsAccepted: "",
      });
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-header">
          <p className="contact-small-text">Get in Touch</p>
          <h2 className="contact-main-heading">Contact Me</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <Form.Text className="text-danger">
                    {formErrors.firstName}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <Form.Text className="text-danger">
                    {formErrors.lastName}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <Form.Text className="text-danger">
                    {formErrors.email}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label className="form-label">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {formErrors.phoneNumber && (
                  <Form.Text className="text-danger">
                    {formErrors.phoneNumber}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Label className="form-label">Message</Form.Label>
            <Form.Control
              as="textarea"
              className="form-control message-box"
              placeholder="Type your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <Form.Text className="text-danger">
                {formErrors.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formTerms">
            <Form.Check
              type="checkbox"
              label="I accept the terms"
              className="form-check"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            {formErrors.termsAccepted && (
              <Form.Text className="text-danger">
                {formErrors.termsAccepted}
              </Form.Text>
            )}
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
