import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link,useNavigate  } from "react-router-dom";
import HeaderWebpage1 from "./HeaderWebpage1";
import FooterWebpage1 from "./FooterWebpage1";

function HomeWebpage1()
{

  const navigate = useNavigate();

    const testimonials = [
    {
      name: "Rohit Kumar",
      role: "Full Stack Developer at TCS",
      quote: "Softech ke Java aur React courses ne meri coding skills ko poori tarah badal diya. Practical training ki wajah se mujhe TCS me job mil gayi.",
      img: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name: "Simran Kaur",
      role: "Web Developer at Wipro",
      quote: "Yahan ke mentors kaafi supportive hain. Web technologies aur live projects par kaam karne ka jo anubhav mila, usne mera confidence boost kiya.",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Deepak Sharma",
      role: "Python Developer at Infosys",
      quote: "Best learning platform! Python aur database management ki classes ne mujhe industry-ready banane me bohot madad ki.",
      img: "https://randomuser.me/api/portraits/men/68.jpg"
    }
  ];

  const recruiters = ["Google", "Microsoft", "Amazon", "Accenture", "Capgemini", "Deloitte", "IBM", "TCS", "Wipro"];
    function gotocourses()
    {
      navigate("/courses");
    }

    return(
    <div className="home-page bg-light m-0 p-0">
        <HeaderWebpage1/>
        <div className="hero-section mt-0 pt-0">
            <Carousel fade interval={4000} controls={true} indicators={true}>
                <Carousel.Item style={{height: "480px"}}>
                    <img 
                    className="d-block w-100 h-100"
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1400&q=80"
                    alt="Campus View"
                    style={{ objectFit:"cover",filter:"brightness(0.4)"}}
                    />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 pb-5">
                        <h1 className="display-4 fw-bold text-white mb-2">Welcome to Softech Learning Hub</h1>
                        <h4 className="fw-semibold text-warning mb-3">
                            Master Modern Web & Software Development
                        </h4>
                        <p className="lead text-light text-center mb-4" style={{ maxWidth: "750px" }}>
                            Empowering your technical skills with professional courses, practical training, 
                            and comprehensive learning resources designed to shape professional careers.
                        </p>
                        <Button onClick={gotocourses} variant="warning" size="jg" className="rounded-pill px-4 fw-bold shadow text-dark">Explore Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "480px" }}>
                    <img
                    className="d-block w-100 h-100"
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                    alt="Students Studying"
                    style={{ objectFit: "cover", filter: "brightness(0.4)" }}
                    />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 pb-5">
                    <h1 className="display-4 fw-bold text-white mb-2">Kickstart Your Tech Career</h1>
                    <p className="lead text-light mb-4 text-center" style={{ maxWidth: "700px" }}>
                        Learn Java, React, Python, and build real-world industry projects with expert guidance.
                    </p>
                    <Button as={Link} to="/contact" variant="warning" size="lg" className="rounded-pill px-4 fw-bold shadow text-dark">
                        Contact Us Today
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        {/* 2. HIGHLIGHTS FLOATING BAR DIV */}
      <Container className="position-relative" style={{ marginTop: "-40px", zIndex: "10" }}>
        <Card className="shadow-sm border-0 rounded-4 bg-white p-3">
          <Row className="g-3 text-center text-md-start">
            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-circle fs-5">
                📚
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Quality Education</h6>
                <small className="text-muted">Industry-oriented curriculum</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-circle fs-5">
                🎓
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">High Placements</h6>
                <small className="text-muted">95% placement rate with top MNCs</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-circle fs-5">
                🔬
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Modern Infrastructure</h6>
                <small className="text-muted">State-of-the-art labs & classes</small>
              </div>
            </Col>

            <Col md={3} sm={6} className="d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-circle fs-5">
                🌍
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-dark">Global Exposure</h6>
                <small className="text-muted">International collaborations</small>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* 3. ABOUT & STATS DIV */}
      <div className="py-5 mt-4">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Softech Students"
                  className="img-fluid w-100"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
            </Col>

            <Col lg={6}>
              <Row className="g-4 text-center">
                <Col sm={6}>
                  <Card className="border-0 shadow-sm p-3 rounded-4 bg-white">
                    <h2 className="fw-bold text-primary mb-0">5200+</h2>
                    <p className="text-muted small mb-0">Students Trained</p>
                  </Card>
                </Col>

                <Col sm={6}>
                  <Card className="border-0 shadow-sm p-3 rounded-4 bg-white">
                    <h2 className="fw-bold text-primary mb-0">250+</h2>
                    <p className="text-muted small mb-0">Expert Mentors</p>
                  </Card>
                </Col>

                <Col sm={6}>
                  <Card className="border-0 shadow-sm p-3 rounded-4 bg-white">
                    <h2 className="fw-bold text-primary mb-0">30+</h2>
                    <p className="text-muted small mb-0">Professional Courses</p>
                  </Card>
                </Col>

                <Col sm={6}>
                  <Card className="border-0 shadow-sm p-3 rounded-4 bg-white">
                    <h2 className="fw-bold text-primary mb-0">95%</h2>
                    <p className="text-muted small mb-0">Success Rate</p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. OUR TOP RECRUITERS DIV */}
      <div className="py-5" style={{ backgroundColor: "#002147" }}>
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-white">Our Top Recruiters</h2>
            <div className="bg-warning mx-auto rounded" style={{ height: "3px", width: "60px" }}></div>
          </div>

          <Row className="g-3 justify-content-center">
            {recruiters.map((company, idx) => (
              <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                <Card className="border-0 rounded-3 shadow-sm py-3 text-center bg-white h-100 justify-content-center">
                  <h5 className="fw-bold text-primary mb-0">{company}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 5. STUDENT TESTIMONIALS DIV */}
      <div className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Student Testimonials</h2>
            <div className="bg-warning mx-auto rounded" style={{ height: "3px", width: "60px" }}></div>
          </div>

          <Row className="g-4">
            {testimonials.map((item, idx) => (
              <Col key={idx} md={4}>
                <Card className="h-100 border-0 shadow-sm rounded-4 p-4 text-center position-relative bg-light">
                  <Card.Text className="text-muted italic mb-4">
                    "{item.quote}"
                  </Card.Text>
                  
                  <div className="mt-auto d-flex align-items-center justify-content-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-circle shadow-sm"
                      width="50"
                      height="50"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-0">{item.name}</h6>
                      <small className="text-primary fw-semibold">{item.role}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
            <FooterWebpage1/>
    </div>

    )
}

export default HomeWebpage1