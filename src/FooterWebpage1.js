import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterWebpage1() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-secondary">
      <Container>
        <Row className="g-4 mb-4">
          
          {/* Logo & About Info */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <img 
                src="https://www.windowanddoor.com/sites/wd/files/inline-images/Soft_Tech_Colour_Logo_CMYK.png"
                alt="Softech Logo"
                height="35"
                width="90"
                className="rounded bg-white p-1 me-2"
              />
              <h5 className="fw-bold text-warning mb-0">Softech Learning Hub</h5>
            </div>
            <p className="text-white-50 small leading-relaxed mb-3">
              Empowering your technical skills with professional courses, live practical training, and 
              industry-standard resources to shape successful software careers.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-2 py-1">ISO Certified</span>
              <span className="badge bg-success px-2 py-1">100% Placement Support</span>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} xs={6}>
            <h6 className="fw-bold text-warning mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-white-50 text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white-50 text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-white-50 text-decoration-none">Our Courses</Link>
              </li>
              <li>
                <Link to="/news" className="text-white-50 text-decoration-none">News & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white-50 text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>

          {/* Popular Courses */}
          <Col lg={3} md={6} xs={6}>
            <h6 className="fw-bold text-warning mb-3 text-uppercase">Popular Courses</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Java Programming</Link></li>
              <li><Link to="/courses" className="text-white-50 text-decoration-none">React Development</Link></li>
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Python & Data Science</Link></li>
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Web Technologies</Link></li>
              <li><Link to="/courses" className="text-white-50 text-decoration-none">Full Stack Development</Link></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold text-warning mb-3 text-uppercase">Contact Info</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li>📍 123 Knowledge Park, Sector 12, Chandigarh - 160001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@softechlearning.com</li>
              <li>⏰ Mon - Sat: 9:00 AM - 7:00 PM</li>
            </ul>
          </Col>

        </Row>

        {/* Bottom Copyright Bar */}
        <hr className="border-secondary" />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="small text-white-50 mb-0">
              &copy; {new Date().getFullYear()} Softech Learning Hub. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
            <span className="small text-white-50">
              Designed & Developed with ❤️ for Software Careers
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterWebpage1;