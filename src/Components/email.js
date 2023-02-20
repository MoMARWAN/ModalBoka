import React, { useState, Fragment } from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form1 from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';
import  Apple from '../assets/images/svg/apple.svg'
import  Google from '../assets/images/svg/google.svg'
import  Facebook from '../assets/images/svg/facebook.svg'


export default function Email({isOpen , onSubmit  }) {

  const [Show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  // const [isEnable, setEnable] = useState(true);
  // const [isclass, setClass] = useState('bth-Submit');
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

const SignUpSchema = Yup.object().shape(
    {
       
        email:Yup.string()
        .email('invalid email address')
        .required('Required')
    }
);


  // const handleKeyUp = () => {
  //   if (email.length > 0 ) {setEnable(false);
  //     setClass('bth-Submit')
  //   }else {
  //     setEnable(true);
  //     setClass('btn-disabled')

  //   }
  // };


  const handleSubmit = (value) => {
    value.preventDefault();
    onSubmit(email);
    handleClose()
   
  };

  return (
    <Fragment>
   
   <Button  onClick={handleShow}>
SignUp
</Button>


 <Modal className='Create-account' show={Show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='Create-accounth1'>Create account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="Welcome">Welcome to Boka! Enter your email or Phone to get started.</p>
           
        <Formik
            initialValues = {
                {
                email:''
                }
            }
            validationSchema = {SignUpSchema}
            onSubmit = {values => {
                alert(values);
            }}
            >
            { ({errors,touched}) => (
           <Form1 onSubmit={handleSubmit}>
            <Form>
            <Form1.Group className="form-floating mb-3" controlId="exampleForm.ControlInput1">
              <Form1.Label   for="floatingInput" className="email-phone mb-5">Email/Phone</Form1.Label>
              
              <Field  name="email" validate={validateEmail}
             id="email"
             className='input-emil form-control'
            //  onKeyUp={handleKeyUp}
             value={email}
             type="email"
            
                
              />
                {
                     errors.email && touched.email ? (<div>{errors.email}</div>) : null
                 }
            </Form1.Group>
           
            <Button
                                
             className="btn-disabled"
             type="submit"
             id="button-input"
              onClick={handleSubmit}
           >
             Continue
          </Button>
          </Form>
          </Form1>
       
)}
  </Formik>
          <div className="or">
      <span></span>
      <p>Or</p>
      <span></span>
      </div>

          <div className="Continuewith">
      <button  type="button" class="btn btn-light bbl"> <img src={Google} alt="" /> <div> Continue with  Google </div></button>
      <button  type="button" class="btn btn-light bbl"> <img src={Apple} alt="" /> <div> Continue with  Google </div></button>
      <button  type="button" class="btn btn-light bbl"><img src={Facebook} alt="" /> <div> Continue with  Google </div></button>
     
      </div>

        </Modal.Body>
        <Modal.Footer>
      
      

      <div className='have'>
        <p className="have-an">Have an account?</p>
        <a href='#'>Sign In</a>
      </div>
        
        </Modal.Footer>
      </Modal>
    
    </Fragment>
  );
}



