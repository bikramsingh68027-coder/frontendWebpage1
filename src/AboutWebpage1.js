import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderWebpage1 from "./HeaderWebpage1";
import FooterWebpage1 from "./FooterWebpage1";

function AboutWebpage1() {
  return (
    <div className="about-page bg-light">
      <HeaderWebpage1/>
      {/* 1. HERO BANNER SECTION */}
      <div 
        className="text-white text-center d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 33, 71, 0.85), rgba(0, 33, 71, 0.85)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "360px"
        }}
      >
        <Container>
          <h1 className="display-3 fw-bold text-warning mb-3">ABOUT SOFTECH</h1>
          <h3 className="fw-semibold mb-4">
            Shaping Future Software Developers Through Innovation, Excellence & Integrity
          </h3>
          <Button 
            as={Link} 
            to="/courses" 
            variant="warning" 
            size="lg" 
            className="fw-bold px-4 rounded-3 text-dark shadow"
          >
            Explore Programs &rarr;
          </Button>
        </Container>
      </div>

      {/* 2. TOP FEATURES FLOATING BAR */}
      <Container className="position-relative" style={{ marginTop: "-35px", zIndex: "10" }}>
        <Card className="shadow-sm border-0 rounded-4 bg-white p-3">
          <Row className="g-3 text-center text-md-start align-items-center">
            
            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-3 fs-4">
                🎓
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Quality Education</h6>
                <small className="text-muted">Industry-oriented curriculum</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-3 fs-4">
                👨‍🏫
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Experienced Faculty</h6>
                <small className="text-muted">Learn from IT experts</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-3 fs-4">
                🏅
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Excellence</h6>
                <small className="text-muted">Commitment to practical learning</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-3 fs-4">
                🌐
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Global Perspective</h6>
                <small className="text-muted">Preparing future tech leaders</small>
              </div>
            </Col>

          </Row>
        </Card>
      </Container>

      {/* 3. WHO WE ARE / ABOUT SOFTECH SECTION */}
      <div className="py-5 mt-3">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Softech Learning Hub Building"
                  className="img-fluid w-100"
                  style={{ maxHeight: "380px", objectFit: "cover" }}
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="ps-lg-3">
                <span className="text-warning fw-bold text-uppercase tracking-wider">WHO WE ARE</span>
                <h2 className="fw-bold text-dark mb-3 mt-1" style={{ color: "#002147" }}>
                  About Softech Learning Hub
                </h2>
                <p className="text-muted leading-relaxed mb-3 fs-6">
                  Softech Learning Hub is a premier IT training institution committed to providing 
                  world-class technology education through innovation, hands-on practical coding, and 
                  industry-focused learning.
                </p>
                <p className="text-muted leading-relaxed fs-6">
                  Since its establishment, Softech has nurtured thousands of students and professionals 
                  into successful Full-Stack Developers, Data Analysts, and Software Engineers in leading MNCs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. VISION & MISSION SECTION (BLUE CARDS) */}
      <div className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            
            {/* Vision Card */}
            <Col md={6}>
              <div 
                className="p-4 p-lg-5 rounded-4 text-white h-100 shadow-sm d-flex flex-column text-center"
                style={{ backgroundColor: "#0b3b60" }}
              >
                <div className="fs-1 mb-2">🎯</div>
                <h3 className="fw-bold text-warning mb-3">Our Vision</h3>
                <p className="fs-6 leading-relaxed mb-0">
                  To become a globally recognized technical learning institution known for excellence in 
                  software education, modern framework development, and industry-driven career growth.
                </p>
              </div>
            </Col>

            {/* Mission Card */}
            <Col md={6}>
              <div 
                className="p-4 p-lg-5 rounded-4 text-white h-100 shadow-sm d-flex flex-column"
                style={{ backgroundColor: "#0b3b60" }}
              >
                <div className="fs-1 mb-2 text-center">🚀</div>
                <h3 className="fw-bold text-warning mb-3 text-center">Our Mission</h3>
                <ul className="list-unstyled fs-6 mb-0 d-flex flex-column gap-2">
                  <li>✔ Provide high-quality practical tech education.</li>
                  <li>✔ Develop strong coding, problem-solving, and logic building skills.</li>
                  <li>✔ Promote innovation, live project experience, and software development practices.</li>
                  <li>✔ Prepare socially responsible and industry-ready tech professionals.</li>
                </ul>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* 5. WHY CHOOSE SOFTECH SECTION */}
      <div className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#002147" }}>WHY CHOOSE SOFTECH?</h2>
            <div className="bg-warning mx-auto rounded" style={{ height: "3px", width: "70px" }}></div>
          </div>

          <Row className="g-4 text-center">
            
            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">🏆</div>
                <h5 className="fw-bold text-dark">Placement Support</h5>
                <p className="text-muted small mb-0">
                  Dedicated placement cell offering 100% placement assistance, resume building, and mock interviews.
                </p>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">🎓</div>
                <h5 className="fw-bold text-dark">Experienced Faculty</h5>
                <p className="text-muted small mb-0">
                  Learn directly from experienced software developers and industry professionals.
                </p>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">💻</div>
                <h5 className="fw-bold text-dark">Smart Classrooms</h5>
                <p className="text-muted small mb-0">
                  Interactive screens, digital resources, and comfortable modern learning environments.
                </p>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">🪑</div>
                <h5 className="fw-bold text-dark">Modern Computer Labs</h5>
                <p className="text-muted small mb-0">
                  High-speed internet, updated software environments, and dedicated practice workstations.
                </p>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">🤝</div>
                <h5 className="fw-bold text-dark">Industry Collaboration</h5>
                <p className="text-muted small mb-0">
                  Strong tie-ups with leading IT companies and tech startups for direct hiring.
                </p>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="fs-1 mb-2">🌍</div>
                <h5 className="fw-bold text-dark">Global Exposure</h5>
                <p className="text-muted small mb-0">
                  Live international client projects, global skill workshops, and certification programs.
                </p>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>

      {/* 6. DIRECTOR'S MESSAGE SECTION */}
      <div className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={4} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                alt="Director Softech"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: "280px", width: "100%", objectFit: "cover" }}
              />
            </Col>

            <Col md={8}>
              <div className="ps-md-4">
                <span className="fs-1 text-warning font-serif">“</span>
                <p className="fs-5 fst-italic text-dark fw-medium leading-relaxed mt-n3">
                  Education is not merely acquiring knowledge, it is about creating skilled professionals, 
                  building problem solvers, and securing a better tomorrow in the digital era.
                </p>
                <h5 className="fw-bold text-primary mb-0">Dr. Rajesh Sharma</h5>
                <small className="text-muted fw-semibold">Director & Founder, Softech Learning Hub</small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 7. RECOGNITION & ACCREDITATION SECTION */}
      <div className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#002147" }}>RECOGNITION & ACCREDITATION</h2>
            <div className="bg-warning mx-auto rounded" style={{ height: "3px", width: "70px" }}></div>
          </div>

          <Row className="g-4 text-center justify-content-center">
            
            <Col lg={3} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100 justify-content-center">
                <div className="fs-2 mb-2">📜</div>
                <h6 className="fw-bold text-dark mb-1">ISO 9001:2015</h6>
                <small className="text-success fw-semibold">Certified Institute</small>
              </Card>
            </Col>

            <Col lg={3} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100 justify-content-center">
                <div className="fs-2 mb-2">🏛️</div>
                <h6 className="fw-bold text-dark mb-1">Govt. Registered</h6>
                <small className="text-success fw-semibold">Skill Center</small>
              </Card>
            </Col>

            <Col lg={3} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100 justify-content-center">
                <div className="fs-2 mb-2">🎖️</div>
                <h6 className="fw-bold text-dark mb-1">Best IT Hub</h6>
                <small className="text-success fw-semibold">Award Winner</small>
              </Card>
            </Col>

            <Col lg={3} sm={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100 justify-content-center">
                <div className="fs-2 mb-2">🏆</div>
                <h6 className="fw-bold text-dark mb-1">Top Placement</h6>
                <small className="text-success fw-semibold">Excellence Award</small>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
        <FooterWebpage1/>
    </div>
  );
}

export default AboutWebpage1;