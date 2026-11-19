import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import WelcomeHeaderWebpage1 from "./WelcomeHeaderWebpage1";
import WelcomeSidebarWebpage1 from "./WelcomeSidebarWebpage1";
import WelcomeFooterWebpage1 from "./WelcomeFooterWebpage1";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

function StudentListPage() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [showForm, setShowForm] = useState(false);
  const[isedit,setEdit]=useState(false)
  const[oldname,setIsname] = useState("");


  async function getdata() {
    const takeresponse = await fetch("https://mymeeshoweb.onrender.com/getdatastudent");
    const takedata = await takeresponse.json();
    setStudent(takedata);
  }

  useEffect(() => {
    getdata();
  }, []);

  const handleSave = async () => {
    if (!name || !age || !mobile || !course || !email) {
      alert("Please Fill all the fields");
      return;
    }

    const newRecord = { name, age, mobile, course, email };

    console.log(JSON.stringify(newRecord));

    const optionapi = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecord)
    };

    const response = await fetch("https://mymeeshoweb.onrender.com/insertdatastudent", optionapi);
    const result = await response.json();
    
    if (result.statuscode === 200) {
      getdata();
      alert("data inserted");
      handleCancel(); // Form clear karke close karne ke liye
    } else {
      alert("data not inserted");
    }
  };

  const handleCancel = () => {
    setName("");
    setMobile("");
    setEmail("");
    setCourse("");
    setAge("");
    setShowForm(false);
  };

  const handleAddClick = () => {
    setName("");
    setAge("");
    setMobile("");
    setCourse("");
    setEmail("");
    setEdit(false);
    setIsname("");
    setShowForm(true);
  };

  const handleDelet = async(item) => {
    console.log(item,"Deleted"); 
    
    const optionapi = {
      "method": "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body:""
    };

    const response = await fetch(`https://mymeeshoweb.onrender.com/deletedatastudent/${item.name}`, optionapi);
    const result = await response.json();
    
    if (result.data.deletedCount>0) {
      getdata();
      alert("data deleted");
     // handleCancel(); // Form clear karke close karne ke liye
    } else {
      alert("data not deleted");
    }
  } 

  const handleUpdate = (item) => {
    console.log(item)
    setName(item.name);
    setAge(item.age);
    setCourse(item.course);
    setMobile(item.mobile);
    setEmail(item.email);
    setIsname(item.name);
    setShowForm(true);
    setEdit(true)
  }

  const handleUpdateData = async() => {
    if(!name || !age || !mobile || !course || !email){
      alert("Please fill all the Fields");
      return;
    } 
    
    const reqbody = {name, age, mobile, course, email};
    console.log(JSON.stringify(reqbody));

    const optionapi = {
      "method": "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqbody)
    };
  console.log(oldname)
    const response = await fetch(`https://mymeeshoweb.onrender.com/putdatastudent?name=${oldname}`, optionapi);
    const result = await response.json();

    console.log(result);
    
    if (result.data?.modifiedCount>0 ) {
      getdata();
      alert("data Updated");
     handleCancel();
    } else {
      alert("data not Updated");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <WelcomeHeaderWebpage1 />

      <div style={{ display: "flex", flex: 1 }}>              
        <WelcomeSidebarWebpage1 />

        <div style={{ padding: "30px", flex: 1, backgroundColor: "#f8f9fa" }}>
          
          {/* Header & Add Student Button */}
          <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-4 rounded-4 shadow-sm border">
            <h2 className="fw-bold text-dark m-0">Welcome to Student List</h2>
            <Button 
              variant="primary" 
              className="px-4 py-2 rounded-pill fw-semibold shadow-sm"
              onClick={() => handleAddClick()}
            >
              + Add Student
            </Button>
          </div>
      <StudentForm 
        showForm={showForm} 
        name={name} setName={setName} 
        age={age} setAge={setAge}
        mobile={mobile} setMobile={setMobile}
        email={email} setEmail={setEmail}
        course={course} setCourse={setCourse}
        handleSave={handleSave}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
        handleUpdateData={handleUpdateData}
        isedit={isedit}
      />
          
          
          {/* Table Container */}
          <Card className="border-0 rounded-4 shadow-sm overflow-hidden bg-white">
          <div className="table-responsive m-0">
              <Table hover align="middle" className="mb-0 text-center">
                <thead className="table-light text-uppercase small text-muted">
                <tr>
                  <th className="py-3">Sr. no</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Age</th>
                  <th className="py-3">Mobile</th>
                  <th className="py-3">Course</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <StudentTable data={student} onupdateClick={handleUpdate} ondeletClick={handleDelet} />              </tbody>
            
            </Table>
          </div>
        </Card>
        </div>
      </div>

      <WelcomeFooterWebpage1 />
    </div>
  );
}

export default StudentListPage;