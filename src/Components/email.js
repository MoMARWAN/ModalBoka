import React, { useState, Fragment } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import ModalBoka from './ModalBoka';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';
import Apple from '../assets/images/svg/apple.svg'
import Google from '../assets/images/svg/google.svg'
import Facebook from '../assets/images/svg/facebook.svg'
import ButtonSubmit from './ButtonSubmit'
import FieldLabel from './FieldLabel'
import classNames from 'classnames';


export default function Email({ isOpen, onSubmit }) {

  const [email, setEmail] = useState('');
  const handleClose = () => setEmail(false);


  const SignUpSchema = Yup.object().shape(
    {

      email: Yup.string().email('invalid email address').required('Required')
    }
  );


  const handleSubmit = () => {

    onSubmit(email);
    handleClose()


  };

  return (
    <Fragment>



      <ModalBoka
         show={isOpen}
        Title="Create account"
        Welcome="Welcome to Boka! Enter your email or Phone to get started."
        FormGroup={
          <Formik
            initialValues={
              {
                email: ''
              }
            }
            validationSchema={SignUpSchema}
            onSubmit={values => {
              console.log('on smbit');
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

                  <Form.Label htmlFor="floatingInput" className="email-phone mb-5">Email/Phone</Form.Label>
                  <FieldLabel
                   
                    name="email"
                    type="text"
                    placeholder='Enter your email or phone'
                    id='emaillength'
                  />
                  {errors.email && touched.email ? (<div className='errors'>{errors.email}</div>) : null}
                </Form.Group>

                <ButtonSubmit Title='Continue' 
                
                className={classNames('btn-submit',{
                      'btn-disabled': email.length > 1
                     
                   })} />
              </Form>


            )}
          </Formik>
        }


        ModalFooter={
          <div>
            <div className="or">
              <span></span>
              <p>Or</p>
              <span></span>
            </div>

            <div className="Continuewith">
              <button type="button" className="btn btn-light bbl"> <img src={Google} alt="" /> <div> Continue with  Google </div></button>
              <button type="button" className="btn btn-light bbl"> <img src={Apple} alt="" /> <div> Continue with  Google </div></button>
              <button type="button" className="btn btn-light bbl"><img src={Facebook} alt="" /> <div> Continue with  Google </div></button>
            </div>
            <Modal.Footer>
              <div className='have'>
                <p className="have-an">Have an account?</p>
                <a href='#'>Sign In</a>
              </div>
            </Modal.Footer>
          </div>
        }
      />



    </Fragment>
  );
}



