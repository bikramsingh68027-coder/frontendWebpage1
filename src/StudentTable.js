import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import WelcomeHeaderWebpage1 from "./WelcomeHeaderWebpage1";
import WelcomeSidebarWebpage1 from "./WelcomeSidebarWebpage1";
import WelcomeFooterWebpage1 from "./WelcomeFooterWebpage1";


function StudentTable(props) {

    return(
        <>
        {props.data.map((item,index) => (
            <tr key={item.index}>
                      <td className="fw-semibold text-secondary">{index + 1}</td>
                      <td className="fw-bold text-dark text-start">{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.mobile}</td>
                      <td>
                        <Badge bg="info" text="dark" className="px-3 py-2 rounded-pill">
                            {item.course}
                          </Badge>
                      </td>
                      <td className="text-secondary text-start">{item.email}</td>
                      <td>
                        <Button 
                        variant="warning" 
                        size="sm" 
                        className="me-2 px-3 rounded-pill fw-semibold shadow-sm text-dark" 
                        onClick={() => props.onupdateClick(item)}
                        >
                         Edit
                        </Button>
                        <Button 
                        variant="danger" 
                            size="sm" 
                            className="px-3 rounded-pill fw-semibold shadow-sm" 
                            onClick={() => props.ondeletClick(item)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>

        ))}
        </>
    )
}
export default StudentTable;