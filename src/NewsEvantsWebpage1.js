import React, { useState } from "react";
import { Container, Row, Col, Card, Tabs, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderWebpage1 from "./HeaderWebpage1";
import FooterWebpage1 from "./FooterWebpage1";

function NewsEvantsWebpage1() {
  const [activeTab, setActiveTab] = useState("all");

  // News and Events List Data
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
    },
    {
      category: "Technology",
      date: "November 10, 2026",
      title: "Global Tech Summit & Web Ecosystem Workshop",
      desc: "Join our special guest seminar featuring industry experts discussing cloud infrastructure, modern React frameworks, and career growth.",
      badge: "Seminar"
    },
    {
      category: "Events",
      date: "November 15, 2026",
      title: "Direct MNC Placement Drive at Softech Campus",
      desc: "Top IT companies are visiting our campus for direct recruitment drives for Java and React full-stack developer roles.",
      badge: "Placement"
    },
    {
      category: "Announcements",
      date: "November 20, 2026",
      title: "Scholarship Test for Deserving Tech Students",
      desc: "Softech is organizing a state-level scholarship assessment test offering up to 50% fee waivers on professional IT courses.",
      badge: "Scholarship"
    }
  ];

  return (

    <div className="news-events-page bg-light min-vh-100">
      <HeaderWebpage1/>
      {/* 1. HEADER BANNER */}
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

      {/* 2. IMPORTANT NOTICES MARQUEE TICKER */}
      <Container className="mb-5">
        <div className="bg-white p-3 rounded-4 shadow-sm border d-flex align-items-center gap-3">
          <span className="badge bg-danger px-3 py-2 fw-bold text-uppercase">Latest Alert</span>
          <div className="overflow-hidden w-100">
            <marquee direction="left" scrollamount="4" className="text-dark fw-semibold mb-0">
              🔥 Registrations are now open for the Annual React & Full Stack Hackathon 2026 | 🚀 New Python & Java batches starting next Monday | 🏆 Inter-batch cricket finals scheduled for this weekend!
            </marquee>
          </div>
        </div>
      </Container>

      {/* 3. TABS & CARDS SECTION */}
      <Container className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#002147" }}>Recent Updates & Activities</h2>
          <div className="bg-warning mx-auto rounded mt-2" style={{ height: "3px", width: "70px" }}></div>
        </div>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <div className="d-flex gap-2 flex-wrap justify-content-center bg-white p-2 rounded-pill shadow-sm border">
            <Button 
              variant={activeTab === "all" ? "primary" : "light"} 
              className="rounded-pill px-4 fw-semibold"
              onClick={() => setActiveTab("all")}
            >
              All Updates
            </Button>
            <Button 
              variant={activeTab === "Events" ? "primary" : "light"} 
              className="rounded-pill px-4 fw-semibold"
              onClick={() => setActiveTab("Events")}
            >
              Events
            </Button>
            <Button 
              variant={activeTab === "Sports" ? "primary" : "light"} 
              className="rounded-pill px-4 fw-semibold"
              onClick={() => setActiveTab("Sports")}
            >
              Sports
            </Button>
            <Button 
              variant={activeTab === "Announcements" ? "primary" : "light"} 
              className="rounded-pill px-4 fw-semibold"
              onClick={() => setActiveTab("Announcements")}
            >
              Announcements
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <Row className="g-4">
          {newsList
            .filter(item => activeTab === "all" || item.category === activeTab)
            .map((item, idx) => (
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
                    <Card.Text className="text-muted small mb-4 flex-grow-1 leading-relaxed">
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

      {/* 4. NEWSLETTER SUBSCRIPTION SECTION */}
      <Container className="mb-5">
        <div 
          className="p-5 rounded-4 text-white text-center shadow"
          style={{ backgroundColor: "#002147" }}
        >
          <h3 className="fw-bold text-warning mb-3">Never Miss an Update!</h3>
          <p className="text-light mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Subscribe to our newsletter to receive direct notifications regarding new courses, hackathons, and placement drives.
          </p>
          <div className="d-flex justify-content-center gap-2" style={{ maxWidth: "450px", margin: "0 auto" }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="form-control rounded-pill px-4 py-2 border-0 shadow-sm" 
            />
            <Button variant="warning" className="rounded-pill px-4 fw-bold text-dark shadow-sm">
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
        <FooterWebpage1/>
    </div>
  );
}

export default NewsEvantsWebpage1;