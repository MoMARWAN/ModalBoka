import React, { useState, Fragment } from 'react';
import OtpInput from 'react18-input-otp';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css'






export default function Verification({isOpen , onSubmit}) {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(Verification);
    console.log("test");
   

   
  };

  return (
    <Fragment>
   <Button  onClick={handleShow}>
   Verification
</Button>







     <Modal className='Create-account'  show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <p className='Welcome'>We sent an email (rebecca.oys@gmail.com) to verify your account please verify your self</p>
        <Modal.Body>
          
        <OtpInput  className='otp-st' value={otp} onChange={handleChange} numInputs={6} separator={<span></span>} />

             

        </Modal.Body>
        <Modal.Footer>
    
          <Button   className={"btn-disabled"}
             type="submit"
             id="button-input" 
             onClick={handleSubmit}>
           Verify Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
