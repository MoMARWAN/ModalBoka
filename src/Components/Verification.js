import React, { useState, Fragment } from 'react';
import OtpInput from 'react18-input-otp';
import '../Pages/Layout/signUp/SignUp.css'
import ModalBoka from './ModalBoka';
import ButtonSubmit from './ButtonSubmit';





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

<ModalBoka
         
        Title="Verification"
        Welcome="We sent an email (rebecca.oys@gmail.com) to verify your account please verify your self"
        FormGroup={
            <div>
          <OtpInput  className='otp-st' value={otp} onChange={handleChange} numInputs={6} separator={<span></span>} />

          <ButtonSubmit Title='Verify Now'  
          />
          </div>
        }      
      />
    </Fragment>
  );
}
