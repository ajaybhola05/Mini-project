import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { PenTool as Tool } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg={isScrolled ? 'dark' : 'transparent'}
      variant={isScrolled ? 'dark' : (location.pathname === '/' ? 'dark' : 'light')}
      className={`transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Tool size={24} className="me-2" />
          <span className="fw-bold">TechSpare Workshop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active' : ''}>
              Login
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/register" 
              className={`${location.pathname === '/register' ? 'active' : ''} ms-lg-2 btn btn-primary text-white`}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;