import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-5 bg-dark text-white">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">TechSpare Workshop</h5>
            <p>
              Your trusted partner for tech spare parts, diagnostics, repair, and maintenance services.
              We provide quality solutions for all your technical needs.
            </p>
            <div className="d-flex mt-4">
              <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h5 className="text-uppercase mb-4">Contact Info</h5>
            <div className="d-flex mb-3">
              <MapPin className="me-2" size={20} />
              <p className="mb-0">123 Tech Street, Silicon Valley, CA 94043</p>
            </div>
            <div className="d-flex mb-3">
              <Phone className="me-2" size={20} />
              <p className="mb-0">+1 (555) 123-4567</p>
            </div>
            <div className="d-flex">
              <Mail className="me-2" size={20} />
              <p className="mb-0">info@techspareworkshop.com</p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} TechSpare Workshop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;