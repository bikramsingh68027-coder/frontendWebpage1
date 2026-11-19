import React from "react";
import { Col, Nav, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function WelcomeSidebarWebpage1() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Col md={3} lg={2} className="bg-white border-end p-3 d-flex flex-column shadow-sm">
      <Nav className="flex-column gap-2">
        <Nav.Link 
          onClick={() => navigate("/dashboard")} 
          className={`fw-semibold p-2 rounded ${location.pathname === "/dashboard" ? "bg-primary text-white" : "text-secondary bg-light"}`}
          style={{ cursor: "pointer" }}
        >
          📊 Dashboard
        </Nav.Link>
        <Nav.Link 
          onClick={() => navigate("/studentlist")} 
          className={`fw-semibold p-2 rounded ${location.pathname === "/studentlist" ? "bg-primary text-white" : "text-secondary bg-light"}`}
          style={{ cursor: "pointer" }}
        >
          👥 Student List
        </Nav.Link>
        <Nav.Link 
          onClick={() => navigate("/courselist")} 
          className={`fw-semibold p-2 rounded ${location.pathname === "/courselist" ? "bg-primary text-white" : "text-secondary bg-light"}`}
          style={{ cursor: "pointer" }}
        >
          📚 Course List
        </Nav.Link>
        <Nav.Link 
          onClick={() => navigate("/teacherlist")} 
          className={`fw-semibold p-2 rounded ${location.pathname === "/teacherlist" ? "bg-primary text-white" : "text-secondary bg-light"}`}
          style={{ cursor: "pointer" }}
        >
          👨‍🏫 Teacher List
        </Nav.Link>
      </Nav>

      <div className="mt-auto pt-4 border-top">
        <Button 
          variant="outline-danger" 
          size="sm" 
          onClick={handleLogout} 
          className="fw-semibold rounded-pill w-100"
        >
          Logout
        </Button>
      </div>
    </Col>
  );
}

export default WelcomeSidebarWebpage1;