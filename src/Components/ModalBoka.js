import React, { useState, Fragment } from 'react';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';



export default function ModalBoka(
 
  {
   
    Title, 
    Welcome,
    FormGroup,
    ModalFooter,

  }
) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 



    return (
      <Fragment>
        <Button onClick={handleShow}>
          SignUp
        </Button>

        <Modal className='Create-account' show={show} onHide={handleClose}  animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className='Create-accounth1'>{Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p className="Welcome">{Welcome}</p>

            <Form.Group className="form-floating mb-3" >
           
            {FormGroup}

            </Form.Group>

          </Modal.Body>

           <div>
          {ModalFooter}
          </div>

        </Modal>

      </Fragment>
    );
  }




