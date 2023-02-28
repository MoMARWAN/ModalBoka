import React, { useState, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import ButtonSubmit from './ButtonSubmit'
import FieldLabel from './FieldLabel'
import ModalBoka from './ModalBoka';
import * as Yup from 'yup';






export default function Password({ onSubmit }) {



  const [password, setPassword] = useState("");
  const handleClose = () => setPassword(false);

  const SignUpSchema = Yup.object().shape(
    {
      password: Yup.string()
        .required("password is required")
        .min(6, "password is too short - should be 6 chars"),
    }
  );

  const handleSubmit = () => {

    onSubmit(password);
    handleClose()


  };



  return (
    <Fragment>

      <ModalBoka
        Title="Choose your password"
        Welcome="Welcome to Boka! Enter your password or Phone to get started."
        FormGroup={
          <Formik
            initialValues={
              {
                password: ''
              }
            }
            validationSchema={SignUpSchema}
            onSubmit={values => {

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
                  <Form.Label htmlFor="floatingInput" className="email-phone mb-5">password</Form.Label>
                  <FieldLabel

                    name="password"
                    type="password"
                    placeholder='Enter your password'

                  />
                  {
                    errors.password && touched.password ? (<div className='errors'>{errors.password}</div>) : null
                  }
                </Form.Group>


                <ButtonSubmit Title='Continue' />

              </Form>


            )}
          </Formik>
        }
/>


    </Fragment>
  );
}
