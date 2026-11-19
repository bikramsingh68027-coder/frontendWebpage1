import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import WelcomeHeaderWebpage1 from "./WelcomeHeaderWebpage1";
import WelcomeSidebarWebpage1 from "./WelcomeSidebarWebpage1";
import WelcomeFooterWebpage1 from "./WelcomeFooterWebpage1";

function CourseListPage() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column m-0 p-0">
      <WelcomeHeaderWebpage1 />

      <div className="container-fluid flex-grow-1 d-flex flex-column p-0">
        <Row className="flex-grow-1 g-0">
          <WelcomeSidebarWebpage1 />

          <Col md={9} lg={10} className="p-4 bg-light d-flex flex-column">
            <Card className="border-0 shadow-sm rounded-4 p-5 bg-white text-center my-auto">
              <h1 className="fw-bold text-primary mb-0">Welcome, this is Course List</h1>
            </Card>
          </Col>
        </Row>
      </div>

      <WelcomeFooterWebpage1 />
    </div>
  );
}

export default CourseListPage;