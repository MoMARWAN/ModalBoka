import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function FirstName({isOpen , onSubmit}) {
  const [show, setShow] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LasttName, setLasttName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 



  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(FirstName);
    console.log("FirstName");
    

  };

  return (
    <Fragment>
   
   <Button  onClick={handleShow}>
   FirstName
</Button>

     <Modal className='Create-account'  show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter your name</Modal.Title>
        </Modal.Header>
        <p className='Welcome'>Welcome to Boka! Enter your email or Phone to get started.</p>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-floating mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="email-phone mb-5">First Name *</Form.Label>
              <Form.Control
              
              
                type="text"
                placeholder="Enter your Password or phone"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="form-floating mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="email-phone mb-5">Last Name *</Form.Label>
              <Form.Control
             
              
                type="text"
                placeholder="Enter your Password or phone"
                autoFocus
              />
            </Form.Group>
        
          </Form>
        </Modal.Body>
        <Modal.Footer>
    
          <Button  className={"btn-disabled"}
             type="submit"
             id="button-input" 
             onClick={handleSubmit}>
          Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
