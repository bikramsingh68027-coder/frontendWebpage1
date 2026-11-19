import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import FooterWebpage1 from "./FooterWebpage1";
import HeaderWebpage1 from "./HeaderWebpage1";
function ContactusWebpage1() {
  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Java Programming",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form reset kar sakte hain
    setFormData({ name: "", email: "", phone: "", course: "Java Programming", message: "" });
    setTimeout(() => setSubmitted(false), 5000); // 5 seconds baad alert gayab ho jayega
  };

  return (
    <div className="contact-page bg-light min-vh-100">
        <HeaderWebpage1/>
      {/* 1. HEADER BANNER */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center rounded-4 mb-5 shadow-sm mx-3 mx-lg-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url('https://images.unsplash.com/photo-1423766824258-7dd415d43542?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "280px"
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-warning mb-2">CONTACT US</h1>
          <p className="lead text-light mb-0" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Have questions about our courses or admissions? Get in touch with our team today and we will gladly assist you.
          </p>
        </Container>
      </div>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <Container className="mb-5">
        <Row className="g-4">
          
          {/* Left Side: Contact Information Cards */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4 h-100">
              
              {/* Info Card 1: Address */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary fs-3 px-3 py-2 rounded-3">
                    📍
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Our Location</h5>
                    <p className="text-muted small mb-0 leading-relaxed">
                      123 Knowledge Park, Education City, Sector 12, Near IT Hub, Chandigarh - 160001
                    </p>
                  </div>
                </div>
              </Card>

              {/* Info Card 2: Phone */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary fs-3 px-3 py-2 rounded-3">
                    📞
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Phone Number</h5>
                    <p className="text-muted small mb-0">
                      +91 98765 43210 <br />
                      +91 91234 56789 (Helpline)
                    </p>
                  </div>
                </div>
              </Card>

              {/* Info Card 3: Email */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary fs-3 px-3 py-2 rounded-3">
                    ✉️
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Email Address</h5>
                    <p className="text-muted small mb-0">
                      info@softechlearning.com <br />
                      support@softechhub.in
                    </p>
                  </div>
                </div>
              </Card>

              {/* Info Card 4: Working Hours */}
              <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary fs-3 px-3 py-2 rounded-3">
                    ⏰
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Working Hours</h5>
                    <p className="text-muted small mb-0">
                      Monday - Saturday: 9:00 AM - 7:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>

            </div>
          </Col>

          {/* Right Side: Enquiry / Contact Form */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm rounded-4 p-4 p-lg-5 bg-white h-100">
              <h3 className="fw-bold mb-2" style={{ color: "#002147" }}>Send Us a Message</h3>
              <p className="text-muted small mb-4">
                Fill out the form below and our counselor will reach out to you within 24 hours.
              </p>

              {submitted && (
                <Alert variant="success" className="rounded-3 py-2">
                  🎉 Thank you! Your message has been successfully sent. We will contact you soon.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-dark">Your Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required 
                        className="rounded-3 py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-dark">Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required 
                        className="rounded-3 py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-dark">Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Enter mobile number" 
                        required 
                        className="rounded-3 py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-dark">Select Course</Form.Label>
                      <Form.Select 
                        name="course" 
                        value={formData.course} 
                        onChange={handleChange} 
                        className="rounded-3 py-2"
                      >
                        <option value="Java Programming">Java Programming</option>
                        <option value="React Development">React Development</option>
                        <option value="Python & Data">Python & Data</option>
                        <option value="Web Technologies">Web Technologies</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold small text-dark">Your Message / Query</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Write your message here..." 
                        required 
                        className="rounded-3 py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button 
                      type="submit" 
                      variant="warning" 
                      size="lg" 
                      className="w-100 rounded-pill fw-bold text-dark shadow-sm py-2"
                    >
                      Send Message
                    </Button>
                  </Col>

                </Row>
              </Form>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* 3. GOOGLE MAPS EMBED SECTION */}
      <Container className="mb-5">
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden p-2 bg-white">
          <iframe 
            title="Softech Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.436341452906!2d76.779417!3d30.7333148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzAwLjAiTiA3NinCsDQ2JzQ2LjAiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: "12px" }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </Card>
      </Container>
            <FooterWebpage1/>
    </div>
  );
}

export default ContactusWebpage1;