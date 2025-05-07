import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-transition pt-5 mt-5">
      {/* Header Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="fw-bold mb-4">About TechSpare Workshop</h1>
              <p className="lead mb-0">
                Learn about our mission, history, and the passionate team behind our services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.pexels.com/photos/2598290/pexels-photo-2598290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team at work" 
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p className="mb-3">
                Founded in 2010, TechSpare Workshop began with a simple mission: to provide reliable, high-quality tech repair services and spare parts to individuals and businesses alike.
              </p>
              <p className="mb-3">
                What started as a small repair shop has grown into a comprehensive tech workshop serving customers throughout the region. Our growth has been fueled by our unwavering commitment to quality, integrity, and customer satisfaction.
              </p>
              <p>
                Today, we're proud to be a trusted name in the industry, known for our expertise, reliability, and dedication to helping our customers keep their technology running smoothly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 border-0 shadow-sm service-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <TrendingUp size={32} className="text-primary me-3" />
                    <h3 className="fw-bold mb-0">Our Mission</h3>
                  </div>
                  <p className="mb-0">
                    Our mission is to provide exceptional tech repair services and high-quality spare parts, empowering our customers to get the most out of their technology. We're committed to delivering reliable solutions with transparency, integrity, and technical excellence.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm service-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <Heart size={32} className="text-primary me-3" />
                    <h3 className="fw-bold mb-0">Our Vision</h3>
                  </div>
                  <p className="mb-0">
                    We envision being the leading tech workshop in the region, recognized for our technical expertise, customer-centric approach, and commitment to sustainability. We aim to build lasting relationships with our customers by consistently exceeding expectations and adapting to evolving technological needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-4">Our Core Values</h2>
              <p className="lead">The principles that guide everything we do</p>
            </Col>
          </Row>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center service-card">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary">
                    <Award size={48} />
                  </div>
                  <Card.Title className="fw-bold">Excellence</Card.Title>
                  <Card.Text>
                    We strive for excellence in every repair, part, and customer interaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center service-card">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary">
                    <Users size={48} />
                  </div>
                  <Card.Title className="fw-bold">Integrity</Card.Title>
                  <Card.Text>
                    We operate with honesty, transparency, and ethical business practices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center service-card">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary">
                    <TrendingUp size={48} />
                  </div>
                  <Card.Title className="fw-bold">Innovation</Card.Title>
                  <Card.Text>
                    We embrace new technologies and continuously improve our services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center service-card">
                <Card.Body className="p-4">
                  <div className="mb-3 text-primary">
                    <Heart size={48} />
                  </div>
                  <Card.Title className="fw-bold">Customer Focus</Card.Title>
                  <Card.Text>
                    We put our customers' needs first in everything we do.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-4">Our Expert Team</h2>
              <p className="lead">Meet the professionals behind our quality service</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="border-0 shadow-sm service-card">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1545732870-5dced7323d26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Ashok Mechanic</Card.Title>
                  <p className="text-muted">Bike Specialis</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="border-0 shadow-sm service-card">
                <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1675032313797-e5b0334f047b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Jonny liver</Card.Title>
                  <p className="text-muted">Lead Technician</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="border-0 shadow-sm service-card">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1610259998914-d1b9afe0dc55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Amit</Card.Title>
                  <p className="text-muted">Parts Specialist</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="border-0 shadow-sm service-card">
                <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1682147848371-c27b0726a84f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Avnish Jagir</Card.Title>
                  <p className="text-muted">Customer Service Manager</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;