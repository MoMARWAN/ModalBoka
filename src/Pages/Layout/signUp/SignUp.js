// import React,{ useState } from "react";
import Password  from "../../../Components/password"; 
import Email  from "../../../Components/email"; 
import FirstName  from "../../../Components/FirstName"; 
// import Verification  from "../../../Components/Verification"; 
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



export default  function SignUp(isOpen) {

  const [currentModal,SetCurrentModal]=useState('');
  // const [Show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
 
    return (
      


      <div>

      {/* <Button  onClick={handleShow}>
        SignUp
      </Button> */}

        <Email isOpen={currentModal=='Email'}   
           onSubmit={(email)=>{
          SetCurrentModal("password")
          
        
        }} /> 

       <Password  isOpen={currentModal==="password"} 
        onSubmit={(password)=>{
          SetCurrentModal("Name")
        
        }} 
        />

         <FirstName
        isOpen={currentModal==="Name"} 
        onSubmit={(firstName)=>{
          SetCurrentModal("Verification")
        }} 
        />
        {/*
        <Verification
        isOpen={currentModal==="Verification"} 
        onSubmit={(Name)=>{
          SetCurrentModal("Email")
        }} 
        /> */}



      
      </div>
    );
  }


