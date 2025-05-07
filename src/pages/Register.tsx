import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserPlus, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };
    
    setFormData(newFormData);
    
    // Check password match when either password or confirmPassword change
    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'password') {
        setPasswordMatch(value === formData.confirmPassword || formData.confirmPassword === '');
      } else {
        setPasswordMatch(value === formData.password);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    // First check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      event.stopPropagation();
      return;
    }
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Simulate successful registration (in a real app, this would call an API)
      setRegisterSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
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
                      <UserPlus size={30} />
                    </div>
                    <h2 className="fw-bold">Create an Account</h2>
                    <p className="text-muted">Join TechSpare Workshop</p>
                  </div>

                  {registerSuccess ? (
                    <Alert variant="success" className="mb-4 fade-in d-flex align-items-center">
                      <CheckCircle size={24} className="me-2" />
                      <div>
                        <Alert.Heading>Registration Successful!</Alert.Heading>
                        <p className="mb-0">
                          Your account has been created. Please <Link to="/login" className="alert-link">login</Link> to continue.
                        </p>
                      </div>
                    </Alert>
                  ) : (
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter your full name"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your full name.
                        </Form.Control.Feedback>
                      </Form.Group>

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

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Create a password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          minLength={8}
                          isInvalid={validated && (!formData.password || formData.password.length < 8 || !passwordMatch)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {!passwordMatch ? "Passwords don't match!" : "Password must be at least 8 characters."}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Confirm your password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          isInvalid={validated && (!passwordMatch || !formData.confirmPassword)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {!passwordMatch ? "Passwords don't match!" : "Please confirm your password."}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="agreeTerms">
                        <Form.Check
                          required
                          type="checkbox"
                          label="I agree to the Terms of Service and Privacy Policy"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group>

                      <Button type="submit" variant="primary" className="w-100 mb-4 d-flex align-items-center justify-content-center">
                        <UserPlus size={18} className="me-2" /> Create Account
                      </Button>

                      <p className="text-center mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-decoration-none fw-bold">
                          Login
                        </Link>
                      </p>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;