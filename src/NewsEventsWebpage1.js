import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderWebpage1 from "./HeaderWebpage1";
import FooterWebpage1 from "./FooterWebpage1";

function NewsEventsWebpage1() {
  const [activeTab, setActiveTab] = useState("all");

  const newsList = [
    {
      category: "Events",
      date: "October 25, 2026",
      title: "Annual React & Full Stack Hackathon 2026",
      desc: "Participate in our upcoming 24-hour coding hackathon. Build innovative web applications and win exciting prizes and internship opportunities.",
      badge: "Upcoming"
    },
    {
      category: "Sports",
      date: "October 28, 2026",
      title: "Softech Inter-Batch Cricket Tournament Finals",
      desc: "The much-awaited cricket tournament finals are scheduled for this weekend. All registered teams must report to the ground by 9:00 AM.",
      badge: "Sports"
    },
    {
      category: "Announcements",
      date: "November 02, 2026",
      title: "New Advanced AI & Python Certification Batches",
      desc: "Registrations are now open for new specialized batches in Python automation, machine learning fundamentals, and data science.",
      badge: "New Batch"
    }
  ];

  return (
    <div className="news-events-page bg-light min-vh-100">
      <HeaderWebpage1 />
      <div 
        className="text-white text-center d-flex align-items-center justify-content-center rounded-4 mb-5 shadow-sm mx-3 mx-lg-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "280px"
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-warning mb-2">NEWS & EVENTS</h1>
          <p className="lead text-light mb-0" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Stay updated with the latest happenings, hackathons, sports tournaments, and placement announcements at Softech.
          </p>
        </Container>
      </div>

      <Container className="mb-5">
        <Row className="g-4">
          {newsList.map((item, idx) => (
            <Col key={idx} md={4} sm={6} xs={12}>
              <Card className="h-100 shadow-sm border-0 rounded-4 p-3 bg-white d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-primary bg-opacity-15 text-primary px-3 py-2 rounded-pill fw-semibold small">
                    {item.badge}
                  </span>
                  <small className="text-muted fw-semibold">{item.date}</small>
                </div>
                <Card.Body className="d-flex flex-column px-0 pb-0">
                  <Card.Title className="fw-bold text-dark fs-5 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted small mb-4 flex-grow-1">
                    {item.desc}
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-primary" 
                    size="sm" 
                    className="rounded-pill fw-semibold w-100 mt-auto"
                  >
                    Read More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <FooterWebpage1 />
    </div>
  );
}

export default NewsEventsWebpage1;