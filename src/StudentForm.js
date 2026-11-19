import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function StudentForm(props){
return(
<>
    {props.showForm && (
            <Card className="border-0 rounded-4 shadow-sm mb-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
                <h4 className="fw-bold text-primary m-0">{props.isedit ? "Update Student Record":"Add Student Records" }</h4>
                <Button 
                 variant="close" 
                  aria-label="Close" 
                  onClick={() => props.handleCancel()}
                ></Button>
              </div>
              
              <Row className="g-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-secondary small">Name</Form.Label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={props.name} 
                    onChange={(e) => props.setName(e.target.value)} 
                    placeholder="Enter Name" 
                  />
                  </Form.Group>
                </Col>
                
                <Col md={2}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-secondary small">Age</Form.Label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={props.age} 
                    onChange={(e) => props.setAge(e.target.value)} 
                    placeholder="Age" 
                  />
                  </Form.Group>
                </Col>

                <Col md={2}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-secondary small">Mobile</Form.Label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={props.mobile} 
                    onChange={(e) => props.setMobile(e.target.value)} 
                    placeholder="Enter Mobile" 
                  />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-secondary small">Course</Form.Label>
                    <Form.Select 
                      className="bg-light border-0 py-2" 
                      value={props.course} 
                      onChange={(e) => props.setCourse(e.target.value)}
                    >
                      <option value="">Select Course</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="BBA">BBA</option>
                      <option value="MBA">MBA</option>
                      <option value="B.tech">B.tech</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-semibold text-secondary small">Email</Form.Label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={props.email} 
                    onChange={(e) => props.setEmail(e.target.value)} 
                    placeholder="Enter Email" 
                  />
                  </Form.Group>
                </Col>
              </Row>
              

              <div className="buttons mt-4 d-flex gap-2">
                <Button variant="success" className="px-4 rounded-pill fw-semibold shadow-sm" onClick={props.isedit ? props.handleUpdateData : props.handleSave}>
                  {props.isedit ? "Update" : "Save"}
                </Button>
                <Button variant="secondary" className="px-4 rounded-pill fw-semibold" onClick={() => props.handleCancel}>
                  Cancel
                </Button>
              </div>
            </Card>
          )}
</>
)

}
export default StudentForm;