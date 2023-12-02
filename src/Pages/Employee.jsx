import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

function Employee(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const [formData, setFormData] = useState({
  FirstName:'',
  LastName:'',
  email:'',
  password:'',
  User: '',
  Role: '',
  Code:'', 
  Mobile:'',
  Gender:'', 
});
const Navigate =useNavigate();


const handel=(e)=>{
const {name ,value}=e.target;
setFormData({
...formData,
[name]:value,
});
}

const Submit = async(e) => {
  e.preventDefault();
  try{
      // api call
      const response =await axios.post('http://localhost:3001/EmployeeSignup',formData);
      if(response && response.data){
          console.log(response.data);
          Swal.fire({
              icon:'success',
              title:'signup scuuessfully'
          })
          // Navigate(`/Login`)     
      }
      else{
          console.error('invalid response data',response);
      }
  }catch(error){
      console.error('error during signup ',error);
      if(error.response && error.response.data){
          console.error('error details:',error.response.data);
      }else{
          console.error('unspected error')
      }
  }
};

return(
        <div>
            <Header/>
        <Sidebar/>
       
         <div className="main-container">
            <div style={{display:'flex'}}>
            <h2>Users</h2>
            <input className="search-user-emp" type="search" placeholder="Search..."/>
            </div>
            <div>
      <Button variant="primary" onClick={handleShow} className="add-employee-btn">
        Add Empolyee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridEmail">
       First Name*
          <Form.Control type="text" name="FirstName" placeholder="First Name"value={formData.FirstName} onChange={handel} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          Last Name*
          <Form.Control type="text" name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handel} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridEmail">
         Email*
          <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handel} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          Password*
          <Form.Control type="password" name="password" placeholder="Password"value={formData.password} onChange={handel} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState" name='User'value={formData.User} onChange={handel}>
         User Type*
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" name='Role'value={formData.Role} onChange={handel}>
         Manager
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail" name='Code'value={formData.Code} onChange={handel}>
         Country Code
          <Form.Control style={{width:'50px'}} type="text" placeholder="+91" name='Mobile'value={formData.Mobile} onChange={handel} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
         Mobile*
          <Form.Control type="text" placeholder="Enter Contact" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" name='Gender'value={formData.Gender} onChange={handel}>
          Gender*<br/>
          <input type="radio" value="a"/> Male <input type="radio" value="a"/> Female
        </Form.Group>
      </Row>
      <button type="button" onClick={Submit}>
      Employee Sign Up
    </button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
         </div>
         </div>
    )
}
export default Employee;