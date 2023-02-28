import React, { useState, Fragment } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';
import ModalBoka from './ModalBoka';
import ButtonSubmit from './ButtonSubmit'
import FieldLabel from './FieldLabel'


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

<ModalBoka
        show={isOpen}
        onHide={handleClose}
        Title="Please enter your name"
        Welcome="Welcome to Boka! Enter your email or Phone to get started."
      
        FormGroup={
          <Formik
          initialValues={
            {
              firstName: ''
            }
          }
          validationSchema={SignUpSchema}
          onSubmit={values => {
            console.log('onsmbit');
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


              <Form.Label className="email-phone mb-5">firstname</Form.Label>
                <FieldLabel
                 
                 name="firstname"
                  type="text"
                  placeholder='Enter your email or phone'
                />
                {
                  errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null
                }           

              <ButtonSubmit Title='Continue'   className='btn-submit' />

            </Form>


          )}
        </Formik>
        }

   />
    </Fragment>
  );
}
