import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterWebpage1 from "./FooterWebpage1";
import HeaderWebpage1 from "./HeaderWebpage1";

function CoursesWebpage1() {
  // Course List Data
  const courseList = [
    {
      title: "Java Programming",
      desc: "Learn Core & Advanced Java, Object-Oriented Programming, Swing GUI, and JDBC database connectivity.",
      duration: "3 Months",
      level: "Beginner to Advanced",
      badge: "Most Popular"
    },
    {
      title: "React Development",
      desc: "Build modern, responsive, and dynamic web apps using React.js, React Bootstrap, and state management hooks.",
      duration: "2 Months",
      level: "Intermediate",
      badge: "Trending"
    },
    {
      title: "Python & Data",
      desc: "Master Python programming, automated scripting, file handling, and database operations efficiently.",
      duration: "3 Months",
      level: "Beginner",
      badge: "High Demand"
    },
    {
      title: "Web Technologies",
      desc: "Master HTML5, CSS3, JavaScript, and SQL fundamentals to kickstart your web design journey.",
      duration: "2 Months",
      level: "Beginner",
      badge: "Foundation"
    },
    {
      title: "Full Stack Development",
      desc: "Become a complete developer by learning front-end, back-end, database integration, and live projects.",
      duration: "6 Months",
      level: "Advanced",
      badge: "Job Guarantee"
    },
    {
      title: "Database Management (SQL)",
      desc: "Learn relational databases, complex queries, joins, store procedures, and MySQL integration.",
      duration: "1.5 Months",
      level: "Intermediate",
      badge: "Essential"
    }
  ];

  return (
    <div className="courses-page bg-light min-vh-100 m-0 p-0">
      <HeaderWebpage1/>
      {/* 1. COURSES HEADER BANNER */}
      <div 
        className="text-white text-center d-flex align-items-center justify-content-center rounded-4 mb-5 shadow-sm mx-3 mx-lg-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "280px"
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-warning mb-2">OUR PROFESSIONAL COURSES</h1>
          <p className="lead text-light mb-0" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Upskill yourself with industry-certified training programs designed for real-world software careers.
          </p>
        </Container>
      </div>

      {/* 2. COURSES CARDS GRID SECTION */}
      <Container className="mb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#002147" }}>Explore All Programs</h2>
          <div className="bg-warning mx-auto rounded mt-2" style={{ height: "3px", width: "70px" }}></div>
        </div>

        <Row className="g-4">
          {courseList.map((course, idx) => (
            <Col key={idx} md={4} sm={6} xs={12}>
              <Card className="h-100 shadow-sm border-0 rounded-4 p-3 bg-white d-flex flex-column position-relative">
                
                {/* Top Badge */}
                <div className="mb-2">
                  <span className="badge bg-primary bg-opacity-15 text-primary px-3 py-2 rounded-pill fw-semibold small">
                    {course.badge}
                  </span>
                </div>

                <Card.Body className="d-flex flex-column px-0 pb-0">
                  <Card.Title className="fw-bold text-dark fs-4 mb-3">{course.title}</Card.Title>
                  <Card.Text className="text-muted small mb-4 flex-grow-1 leading-relaxed">
                    {course.desc}
                  </Card.Text>

                  {/* Course Details Info */}
                  <div className="d-flex justify-content-between text-muted border-top border-bottom py-2 my-2 small">
                    <span>⏱ {course.duration}</span>
                    <span>📊 {course.level}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-3 pt-2">
                    <Button 
                      as={Link} 
                      to="/contact" 
                      variant="outline-primary" 
                      size="sm" 
                      className="w-50 rounded-pill fw-semibold"
                    >
                      Enquire Now
                    </Button>
                    <Button 
                      as={Link} 
                      to="/contact" 
                      variant="warning" 
                      size="sm" 
                      className="w-50 rounded-pill fw-bold text-dark"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 3. CALL TO ACTION SECTION */}
      <Container className="mb-5">
        <div 
          className="p-5 rounded-4 text-white text-center shadow"
          style={{ backgroundColor: "#002147" }}
        >
          <h3 className="fw-bold text-warning mb-3">Confused Which Course to Choose?</h3>
          <p className="text-light mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Get free career guidance and counseling from our expert mentors to select the best path for your future.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="warning" 
            size="lg" 
            className="rounded-pill px-5 fw-bold text-dark shadow"
          >
            Talk to Our Expert
          </Button>
        </div>
      </Container>
          <FooterWebpage1/>
    </div>
  );
}

export default CoursesWebpage1;