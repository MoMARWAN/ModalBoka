import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Pages/Layout/signUp/SignUp.css';



export default function ModalBoka(

  {
    show,
    handleClose,
    Title = "",
    Welcome = "",
    ModalFooter = "",
    children
  }
) {






  return (
    <>


      <Modal className='Create-account' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='Create-accounth1'>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p className="Welcome">{Welcome}</p>

          <div>


        {children}
          </div>

        </Modal.Body>
        <div>
          {ModalFooter}
        </div>

      </Modal>

    </>
  );
}




