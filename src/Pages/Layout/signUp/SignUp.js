// import React,{ useState } from "react";
import Password  from "../../../Components/password"; 
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
          SetCurrentModal("Password")
          
        
        }} /> 

       <Password  isOpen={currentModal==="Password"} 
        onSubmit={(Password)=>{
          SetCurrentModal("Name")
        
        }} 
        />


        <FirstName
        isOpen={currentModal==="Name"} 
        onSubmit={(Name)=>{
          SetCurrentModal("Verification")
        }} 
        />
        
        <Verification
        isOpen={currentModal==="Verification"} 
        onSubmit={(Name)=>{
          SetCurrentModal("")
        }} 
        />



      
      </div>
    );
  }


