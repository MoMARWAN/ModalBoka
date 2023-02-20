import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form1 from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';
export default function Password({isOpen , onSubmit}) {
 

  
  const [show, setShow] = useState(false);
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if ( /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/.test(value)) {
      error = 'Must Contain 8 Characterss';
    }
    return error;
  }

const SignUpSchema = Yup.object().shape(
    {
       
      Password:Yup.string()
        .Password('invalid Password address')
        .required('Required')
    }
);

  const handleChange = event => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(Password);
    console.log("test");
    setError(null);

  
  };

  return (
    <Fragment>
   


     <Modal className='Create-account'  show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose your password</Modal.Title>
        </Modal.Header>
        <p className='Welcome'>Welcome to Boka! Enter your Password or Phone to get started.</p>
        <Modal.Body>
        <Formik
            initialValues = {
                {
                Password:''
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
              <Form1.Label   for="floatingInput" className="Password-phone mb-5">Email/Phone</Form1.Label>
              
              <Field  name="Password" validate={validateEmail}
             id="Password"
             className='input-emil form-control'
            //  onKeyUp={handleKeyUp}
             value={Password}
             type="Password"
            
                
              />
                {
                     errors.Password && touched.Password ? (<div>{errors.Password}</div>) : null
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
        </Modal.Body>
       
      </Modal>
    </Fragment>
  );
}
