import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Password({isOpen , onSubmit}) {
  const [show, setShow] = useState(false);
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function isValidEmail(Password) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Password);
  }

  const handleChange = event => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(Password);
    console.log("test");
    setError(null);

    if (isValidEmail(Password)) {
      console.log('The Password is valid');
    } else {
      setError('Email is invalid');
    }
  };

  return (
    <Fragment>
   
   <Button variant="primary" onClick={handleShow}>
   Password
</Button>



     <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
               value={Password}
               onChange={handleChange}
                type="Password"
                placeholder="Enter your Password or phone"
                autoFocus
              />
            </Form.Group>
        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
          Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
