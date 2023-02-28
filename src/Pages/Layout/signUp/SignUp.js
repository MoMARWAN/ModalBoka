// import React,{ useState } from "react";
import Password  from "../../../Components/password"; 
import Email  from "../../../Components/email"; 
import FirstName  from "../../../Components/Name"; 
import Verification  from "../../../Components/Verification"; 
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalBoka from "../../../Components/ModalBoka";



export default  function SignUp(isOpen) {

  const [currentModal,SetCurrentModal]=useState('');
   const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 
    return (
      


      <div>
        <ModalBoka 
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        Welcome="hi im kamel"
        Title="kaeml"
        >
          <Email isOpen={currentModal=='Email'}   
           onSubmit={(email)=>{
          SetCurrentModal("Password")
          
        
        }} /> 
      
        </ModalBoka>
      <Button className='SignUp' onClick={handleShow}>
          Sign Up
        </Button>


        {/* <Email isOpen={currentModal=='Email'}   
           onSubmit={(email)=>{
          SetCurrentModal("Password")
          
        
        }} />  */}

       <Password  isOpen={currentModal==="Password"} 
        onSubmit={(Password)=>{
          SetCurrentModal("Name")
        
        }} 
        />

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


