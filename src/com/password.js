import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Formik,Field} from 'formik';

import * as Yup from 'yup';
export default function password({isOpen , onSubmit}) {
 

  
  const [show, setShow] = useState(false);
  const [password, setpassword] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

const SignUpSchema = Yup.object().shape(
    {
       password: Yup.string()
      .required("password is required")
      .min(6, "password is too short - should be 6 chars minimum"),    }
);

const handleSubmit = () => {
  
  onSubmit(password);
  handleClose()


};

  

  return (
    <Fragment>
   


     <Modal className='Create-account'  show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose your password</Modal.Title>
        </Modal.Header>
        <p className='Welcome'>Welcome to Boka! Enter your password or Phone to get started.</p>
        <Modal.Body>
        <Formik
            initialValues = {
                {
                  password:''
                }
            }
            validationSchema = {SignUpSchema}
            onSubmit = {values => {
                
            }}
            >
            { ({errors,touched,values}) => (
               <Form onSubmit={(e)=>{
                e.preventDefault()

                if(Object.keys(errors).length===0){
                  handleSubmit(values);
                }
                
                }}>
            <Form.Group className="form-floating mb-3" >
              <Form.Label   htmlFor="floatingInput" className="email-phone mb-5">Email/Phone</Form.Label>
              
              <Field  name="password" 
           
             className='input-emil form-control'
            //  onKeyUp={handleKeyUp}
          
             type="password"
            
                
              />
                {
                     errors.password && touched.password ? (<div>{errors.password}</div>) : null
                 }
            </Form.Group>
           
            <Button
                                
             className="btn-disabled"
             type="submit"
             id="button-input"
           >
             Continue
          </Button>
          </Form>
         
       
)}
            </Formik>
        </Modal.Body>
       
      </Modal>
    </Fragment>
  );
}
