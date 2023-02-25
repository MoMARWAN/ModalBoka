// import React,{ useState } from "react";
// import Password  from "../../../Components/Password"; 
import Email  from "../../../Components/email"; 
import FirstName  from "../../../Components/FirstName"; 
import Verification  from "../../../Components/Verification"; 
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default  function SignUp(isOpen) {

  const [currentModal,SetCurrentModal]=useState('');
  // const [Show, setShow] = useState(false);
  
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
    return (
      

      <div>

      {/* <Button  onClick={isOpen("Email")}>
      signUp
      </Button> */}


        <Email isOpen={currentModal=='Email'}   
           onSubmit={(email)=>{
          SetCurrentModal("Name")
          
        
        }} /> 

       {/* <Password  isOpen={currentModal==="password"} 
        onSubmit={(password)=>{
          SetCurrentModal("Name")
        
        }} 
        /> */}

        <FirstName
        isOpen={currentModal==="Name"} 
        onSubmit={(firstName)=>{
          SetCurrentModal("Verification")
        }} 
        />
        
        <Verification
        isOpen={currentModal==="Verification"} 
        onSubmit={(Name)=>{
          SetCurrentModal("Email")
        }} 
        />



      
      </div>
    );
  }


