import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';
import  Apple from '../assets/images/svg/apple.svg'
import  Google from '../assets/images/svg/google.svg'
import  Facebook from '../assets/images/svg/facebook.svg'
import ButtonSubmit from './Buttons'


export default function Modal(
  { TitleModal , PTitle }
 


 
){
            

  return (
    <Fragment>



        <Modal className='Create-account' show={Show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='Create-accounth1'>{TitleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="Welcome">{PTitle}</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-floating mb-3" >
              <Form.Label  htmlFor="floatingInput" className="email-phone mb-5">Email/Phone</Form.Label>
              <Form.Control
             className='input-emil'
             onKeyUp={handleKeyUp}
             onChange={handleChange}
             value={email}
                type="text"
                placeholder="Enter your email or phone"
                
              />
            </Form.Group>
           <ButtonSubmit  />
           
          </Form>

          <div className="or">
      <span></span>
      <p>Or</p>
      <span></span>
      </div>

          <div className="Continuewith">
      <button  type="button" className="btn btn-light bbl"> <img src={Google} alt="" /> <div> Continue with  Google </div></button>
      <button  type="button" className="btn btn-light bbl"> <img src={Apple} alt="" /> <div> Continue with  Google </div></button>
      <button  type="button" className="btn btn-light bbl"><img src={Facebook} alt="" /> <div> Continue with  Google </div></button>
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
