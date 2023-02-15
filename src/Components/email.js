import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Email({isOpen , onSubmit}) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function isValidEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
    handleClose()
    console.log("test");
    setError(null);

    if (isValidEmail(email)) {
      console.log('The email is valid');
    } else {
      setError('Email is invalid');
    }
  };

  return (
    <Fragment>
   
   <Button variant="primary" onClick={handleShow}>
SignUp
</Button>


 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               value={email}
               onChange={handleChange}
                type="text"
                placeholder="Enter your email or phone"
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
