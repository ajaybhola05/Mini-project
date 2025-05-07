import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  Settings, 
  Download, 
  FileEdit, 
  Truck, 
  ShieldCheck, 
  CalendarClock
} from 'lucide-react';

interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  
  const services: ServiceType[] = [
    {
      id: 1,
      title: "Spare Parts Sales",
      description: "High-quality genuine and compatible spare parts for various devices.",
      icon: <ShoppingBag size={48} className="text-primary mb-3" />,
      details: "Our extensive inventory includes parts for computers, laptops, smartphones, tablets, and other electronic devices. We source directly from manufacturers and trusted suppliers to ensure quality and compatibility. Our knowledgeable staff can help you find exactly what you need for your specific model and requirements."
    },
    {
      id: 2,
      title: "Diagnostic Services",
      description: "Comprehensive assessment to identify issues with your devices.",
      icon: <Search size={48} className="text-primary mb-3" />,
      details: "Our diagnostic process involves thorough hardware and software testing to pinpoint the exact cause of your device's issues. We use advanced diagnostic tools and techniques to accurately identify problems with computers, laptops, smartphones, and tablets. After diagnosis, we provide a detailed report of our findings along with recommended solutions and cost estimates."
    },
    {
      id: 3,
      title: "Repair & Maintenance",
      description: "Expert repair services for all types of technical devices.",
      icon: <Settings size={48} className="text-primary mb-3" />,
      details: "Our certified technicians can repair a wide range of issues, from screen replacements and battery swaps to motherboard repairs and data recovery. We also offer regular maintenance services to keep your devices running smoothly, including cleaning, software updates, and performance optimization. All repairs come with a warranty on both parts and labor."
    },
    {
      id: 4,
      title: "Installation Support",
      description: "Professional installation of hardware, software, and systems.",
      icon: <Download size={48} className="text-primary mb-3" />,
      details: "We provide expert installation services for hardware components, operating systems, software applications, and networking equipment. Our technicians ensure proper setup and configuration for optimal performance and compatibility. We can assist with both on-site and remote installations, and provide training on how to use newly installed systems."
    },
    {
      id: 5,
      title: "Custom Orders",
      description: "Specialized parts and services tailored to your specific needs.",
      icon: <FileEdit size={48} className="text-primary mb-3" />,
      details: "We can source and supply specialized or hard-to-find parts for unique or older device models. If you have specific requirements, our team can work with you to develop custom solutions, from building custom PCs to creating specialized repair approaches for unique devices. We pride ourselves on finding solutions for challenging technical problems."
    },
    {
      id: 6,
      title: "Pickup & Delivery",
      description: "Convenient collection and return of your devices.",
      icon: <Truck size={48} className="text-primary mb-3" />,
      details: "Our pickup and delivery service makes getting your devices repaired hassle-free. Schedule a pickup online or by phone, and we'll collect your device from your home or office. Once repairs are complete, we'll deliver it back to you in perfect working condition. This service is available within a 20-mile radius of our workshop."
    },
    {
      id: 7,
      title: "Warranty & Support",
      description: "Ongoing assistance and warranty coverage for all services.",
      icon: <ShieldCheck size={48} className="text-primary mb-3" />,
      details: "All our repairs and parts come with a standard 90-day warranty, with options to extend coverage up to one year. Our support team is available via phone, email, or in-person to assist with any issues or questions after service. We stand behind our work and are committed to ensuring your complete satisfaction with all our services."
    },
    {
      id: 8,
      title: "Annual Maintenance Contracts",
      description: "Regular maintenance plans for businesses and individuals.",
      icon: <CalendarClock size={48} className="text-primary mb-3" />,
      details: "Our Annual Maintenance Contracts (AMC) provide regular scheduled maintenance for your devices, helping prevent issues before they occur. Plans include priority service, discounted repair rates, and regular check-ups. AMCs are available for both business and individual customers, with customizable plans to suit your specific needs and budget."
    }
  ];

  return (
    <div className="page-transition pt-5 mt-5">
      {/* Header Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="fw-bold mb-4">Our Services</h1>
              <p className="lead mb-0">
                Comprehensive tech solutions for all your needs - from spare parts to repairs and maintenance.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Cards Section */}
      <section className="py-5">
        <Container>
          <Row>
            {services.map((service) => (
              <Col lg={3} md={6} className="mb-4" key={service.id}>
                <Card className="h-100 border-0 shadow-sm service-card">
                  <Card.Body className="text-center p-4">
                    {service.icon}
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text className="mb-4">
                      {service.description}
                    </Card.Text>
                    <div className="mt-auto">
                      <Button 
                        variant="primary" 
                        className="me-2"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn More
                      </Button>
                      <Button 
                        as={Link} 
                        to="/contact" 
                        variant="outline-primary"
                      >
                        Book Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Accordion Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="fw-bold text-center mb-5">Detailed Service Information</h2>
              <Accordion defaultActiveKey="0">
                {services.map((service, index) => (
                  <Accordion.Item eventKey={index.toString()} key={service.id}>
                    <Accordion.Header className="d-flex align-items-center">
                      <span className="me-3">{service.icon}</span>
                      <span className="fw-bold">{service.title}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{service.details}</p>
                      <Button 
                        as={Link} 
                        to="/contact" 
                        variant="primary"
                      >
                        Book This Service
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  {selectedService.icon}
                  <span className="ms-2">{selectedService.title}</span>
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedService(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedService.details}</p>
              </div>
              <div className="modal-footer">
                <Button 
                  variant="secondary" 
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary"
                  onClick={() => setSelectedService(null)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show" onClick={() => setSelectedService(null)}></div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="fw-bold mb-4">Need a Custom Solution?</h2>
              <p className="lead mb-4">
                Contact us to discuss your specific requirements. We offer tailored solutions for unique technical challenges.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="light" 
                size="lg" 
                className="text-primary fw-bold"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;