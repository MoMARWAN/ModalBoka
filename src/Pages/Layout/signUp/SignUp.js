// import React,{ useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import Password  from "../../../Components/password"; 
import Email  from "../../../Components/email"; 
// import Modal  from "../../../Components/Modal"; 
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

export default  function SignUp() {

  const [currentModal,SetCurrentModal]=useState('');
  
 
    return (
      

      <div>

      {/* <Button show={show} variant="primary" onClick={handleShow}>
        { isOpen && <Modal />  }
      </Button> */}


        <Email isOpen={currentModal=='Email'}   
           onSubmit={(email)=>{
          SetCurrentModal("Password")
          console.log(email);
          console.log(currentModal);
        }} /> 

       <Password  isOpen={currentModal==="Password"} 
        onSubmit={(Password)=>{
          SetCurrentModal("")
          console.log(Password);
        }} 
        />



      
      </div>
    );
  }


