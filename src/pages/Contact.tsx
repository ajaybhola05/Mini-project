import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // In a real application, this is where you would send the form data to your backend
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setValidated(false);
      return;
    }

    setValidated(true);
  };

  return (
    <div className="page-transition pt-5 mt-5">
      {/* Header Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-0">
                Have questions or need assistance? We're here to help. Reach out to our team.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              {formSubmitted && (
                <Alert variant="success" className="mb-4 fade-in">
                  <Alert.Heading>Thank you for contacting us!</Alert.Heading>
                  <p className="mb-0">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                </Alert>
              )}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="name">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="subject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="What is this regarding?"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="message" className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={5}
                    placeholder="How can we help you?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your message.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary" className="d-flex align-items-center">
                  Send Message <Send size={16} className="ms-2" />
                </Button>
              </Form>
            </Col>
            <Col lg={5}>
              <div className="ps-lg-5">
                <h2 className="fw-bold mb-4">Contact Information</h2>
                <div className="d-flex mb-4">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-flex">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold">Our Location</h5>
                    <p className="mb-0">123 Tech Street, Silicon Valley, CA 94043</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-flex">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold">Phone Number</h5>
                    <p className="mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-flex">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold">Email Address</h5>
                    <p className="mb-0">info@techspareworkshop.com</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-flex">
                      <Clock size={24} />
                    </div>
                  </div>
                  <div>
                    <h5 className="fw-bold">Business Hours</h5>
                    <p className="mb-0">Monday - Friday: 9AM - 6PM</p>
                    <p className="mb-0">Saturday: 10AM - 4PM</p>
                    <p className="mb-0">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="ratio ratio-21x9 shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101410.12402350649!2d-122.1370103534585!3d37.414505080197515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1652276457700!5m2!1sen!2sin" 
                  title="TechSpare Workshop Location" 
                  className="border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;