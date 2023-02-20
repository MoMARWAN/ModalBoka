import React, { useState, Fragment } from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form1 from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Name({isOpen , onSubmit}) {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const SignUpSchema = Yup.object().shape(
    {
      FirstName: Yup.string()
        .min(5,'Should be 5 character long')
        .max(15,'should not exceed 15 characters')
        .required('Required'),

        LasttName: Yup.string()
        .min(5,'Should be 5 character long')
        .max(15,'should not exceed 15 characters')
        .required('Required'),

       
    }
);


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(Name);
    console.log("Name");
    

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
        <Formik
            initialValues = {
                {
                  Firstname:'',
                  LasttName:'',
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
              <Form1.Label className="email-phone mb-5">firstname</Form1.Label>
              <Field name="firstname" />
                 {
                     errors.Firstname && touched.Firstname ? (<div>{errors.Firstname}</div>) : null
                 }
            </Form1.Group>

            <Form1.Group className="form-floating mb-3" controlId="exampleForm.ControlInput2">
              <Form1.Label className="email-phone mb-5">lastname</Form1.Label>
              <Field name="lastname" />
                 {
                     errors.Lastname && touched.Lastname ? (<div>{errors.Lastname}</div>) : null
                 }
            </Form1.Group>




            {/* <Field name="lastname" />
                 {
                     errors.lastname && touched.lastname ? (<div>{errors.lastname}</div>) : null
                 }
           */}
          </Form>
          </Form1>
          )}
  </Formik>


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
