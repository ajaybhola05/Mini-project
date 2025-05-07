import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LogIn, LockKeyhole } from 'lucide-react';

const Login: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setLoginError(true);
      setLoginSuccess(false);
    } else {
      // Simulate successful login (in a real app, this would call an API)
      setLoginSuccess(true);
      setLoginError(false);
      
      // Reset form after successful submission
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      });
      setValidated(false);
      return;
    }

    setValidated(true);
  };

  return (
    <div className="page-transition pt-5 mt-5">
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                      <LockKeyhole size={30} />
                    </div>
                    <h2 className="fw-bold">Login to Your Account</h2>
                    <p className="text-muted">Access your TechSpare Workshop account</p>
                  </div>

                  {loginSuccess && (
                    <Alert variant="success" className="mb-4 fade-in">
                      Login successful! Redirecting to dashboard...
                    </Alert>
                  )}

                  {loginError && (
                    <Alert variant="danger" className="mb-4 fade-in">
                      Please check your credentials and try again.
                    </Alert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
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

                    <Form.Group className="mb-4" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        minLength={6}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your password (minimum 6 characters).
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-between mb-4">
                      <Form.Check
                        type="checkbox"
                        id="rememberMe"
                        label="Remember me"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <Link to="#" className="text-decoration-none small">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" variant="primary" className="w-100 mb-4 d-flex align-items-center justify-content-center">
                      <LogIn size={18} className="me-2" /> Login to Account
                    </Button>

                    <p className="text-center mb-0">
                      Don't have an account?{' '}
                      <Link to="/register" className="text-decoration-none fw-bold">
                        Register now
                      </Link>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;