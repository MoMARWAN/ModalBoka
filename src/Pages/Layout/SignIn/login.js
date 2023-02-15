import React,{ useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import Authentication from '../../../Components/authentication'
import Forgotpassword from '../../../Components/ForgotPassword'
import Forgotpassword2 from '../../../Components/ForgotPassword2'
import Resetpassword from '../../../Components/Resetpassword'
// import Email  from "../../../Components/email"; 
// import Password  from "../../../Components/password"; 
// import FirstName from '../../../Components/FirstName'
// import Verification from '../../../Components/Verification'




export default  function Login() {
 



    return (
      
      <div>
      
      <Authentication />
      <Forgotpassword />
      <Forgotpassword2 />
      <Resetpassword />






      
      </div>
    );
  }


