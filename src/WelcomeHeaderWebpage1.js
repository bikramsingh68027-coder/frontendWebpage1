import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function WelcomeHeaderWebpage1() {
  const navigate = useNavigate();

  // 🔹 useState ke andar hi function likh kar seedha localStorage se naam nikal liya
  const [userName] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.username) {
        return parsedUser.username.charAt(0).toUpperCase() + parsedUser.username.slice(1);
      }
    }
    return "Student"; // Agar data na mile toh default "Student" rahega
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm m-0 p-0">
      <Container>
        <Navbar.Brand as={Link} to="/welcome" className="d-flex align-items-center">
          <img 
            src="https://www.windowanddoor.com/sites/wd/files/inline-images/Soft_Tech_Colour_Logo_CMYK.png"
            alt="Softech Logo"
            height="40"
            width="100"
            className="d-inline-block align-top rounded"
          />
        </Navbar.Brand>

        <div className="d-flex flex-column align-items-end">
          <span className="fw-bold text-light text-capitalize" style={{ fontSize: "0.9rem" }}>
            Welcome, {userName}
          </span>
          <Button 
            variant="link" 
            onClick={handleLogout} 
            className="text-danger p-0 text-decoration-none fw-semibold" 
            style={{ fontSize: "0.8rem", lineHeight: "1.1" }}
          >
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default WelcomeHeaderWebpage1;