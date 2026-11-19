import React, { useState } from "react";
import { Container, Card, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginWebpage1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // 🔹 Modal ko control karne ke liye state
  
  const navigate = useNavigate();

  // Aapka Users ka Array
  const users = [
    { id: 1, username: "rahul", password: "rahul123" },
    { id: 2, username: "priya", password: "priya123" },
    { id: 3, username: "amit", password: "amit123" },
    { id: 4, username: "neha", password: "neha123" },
    { id: 5, username: "bikram", password: "@1234" },
  ];

  function handleLogin(e) {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username.toLowerCase() === username.trim().toLowerCase() && 
        users[i].password === password.trim()
      ) {

        localStorage.setItem("loggedInUser", JSON.stringify(users[i]));
        navigate("/welcome");
        return; 
      }
    }

    setShowModal(true);
  }

  function handleGoBack() {
    navigate("/courses"); 
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Container style={{ maxWidth: "400px" }}>
        
        {/* Back Button */}
        <div className="mb-3">
          <Button 
            variant="outline-secondary" 
            size="sm" 
            onClick={handleGoBack} 
            className="rounded-pill px-3 fw-semibold shadow-sm"
          >
            ← Back
          </Button>
        </div>

        <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
          <h3 className="fw-bold text-center text-dark mb-1">Student Login</h3>
          <p className="text-muted text-center small mb-4">Enter your credentials</p>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., rahul, priya, bikram"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="small fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 rounded-pill fw-bold py-2">
              Sign In
            </Button>
          </Form>
        </Card>
      </Container>

      {/* 🔹 ERROR MODAL (Jab galat login details dali jayengi tab ye popup aayega) */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-danger fs-5">⚠️ Access Denied</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="fs-1 mb-2">❌</div>
          <h5 className="fw-bold text-dark mb-2">Invalid Username or Password</h5>
          <p className="text-muted small mb-0">
            Please check your credentials and try again.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center pb-4">
          <Button 
            variant="danger" 
            className="rounded-pill px-4 fw-bold" 
            onClick={() => setShowModal(false)}
          >
            Try Again
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default LoginWebpage1;