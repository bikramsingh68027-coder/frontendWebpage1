import React, { useState }from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";

function HeaderWebpage1() {
    const navigate = useNavigate()
    const [flag, setFlag] = useState(true)
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm m-0 p-0">
         
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img 
                        src="https://www.windowanddoor.com/sites/wd/files/inline-images/Soft_Tech_Colour_Logo_CMYK.png"
                        alt="Softech Logo"
                        height="40"
                        width="100"
                        className="d-inline-block align-top
                        3+ rounded"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="modern-navbar-nav" className="border-0 shadow-none text-warning" />

                <Navbar.Collapse id="modern-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center gap-lg-3 my-2 my-lg-0">
                        <Nav.Link as={Link} to="/" className="text-light px-3 py-2">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-light px-3 py-2">About</Nav.Link>
                        <Nav.Link as={Link} to="/courses" className="text-light px-3 py-2">Our Courses</Nav.Link>
                        <Nav.Link as={Link} to="/news" className="text-light px-3 py-2">News & Events</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-light px-3 py-2">Contact Us</Nav.Link>
                    
                    <div className="ms-lg-3">
                        <button 
                        onClick={() => navigate("/login")} 
                        className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill shadow-sm w-100"
                        >
                            Login
                        </button>
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderWebpage1;