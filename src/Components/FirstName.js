import React, { useState, Fragment } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';



export default function Name({ isOpen, onSubmit }) {


  const [show, setShow] = useState(false);
  const [firstName, setfirstName] = useState('');

  const handleClose = () => setShow(false);
 



  const SignUpSchema = Yup.object().shape(
    {
      firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
  
    // lastName: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Lastname is required"),


    }
  );


  const handleSubmit = () => {
    onSubmit(firstName);
    handleClose()


  };

  return (
    <Fragment>

      <Modal className='Create-account' show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter your name</Modal.Title>
        </Modal.Header>
        <p className='Welcome'>Welcome to Boka! Enter your email or Phone to get started.</p>
        <Modal.Body>
          <Formik
            initialValues={
              {
                firstName: ''
              
              }
            }
            validationSchema={SignUpSchema}
            onSubmit={values => {
              // same shape as initial values
              handleSubmit();
            }}
          >
            {({ errors, touched, values }) => (
              <Form onSubmit={(e) => {
                e.preventDefault()

                if (Object.keys(errors).length === 0) {
                  handleSubmit(values);
                }

              }}>

                <Form.Group className="form-floating mb-3" >
                  <Form.Label className="email-phone mb-5">firstname</Form.Label>
                  <Field
                    name="firstname"
                    className='input-emil form-control'
                    type='text'
                  />
                  {
                    errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null
                  }
                </Form.Group>

                {/* <Form.Group className="form-floating mb-3" >
                  <Form.Label className="email-phone mb-5">lastname</Form.Label>
                  <Field
                    name="lastname"
                    className='input-emil form-control'
                    type='text'
                  />
                  {
                    errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null
                  }
                </Form.Group> */}

              </Form>
            )}
          </Formik>


        </Modal.Body>
        <Modal.Footer>

          <Button 
          className={"btn-disabled"}
            type="submit"
            id="button-input"

          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
