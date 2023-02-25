import React, { useState } from "react";



export default  function Forgotpassword({ onSubmit,children }) {


    return (

     
      <div>


    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal6">
    Forgotpassword
        </button>

        <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModal6Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal6Label">Forgot password?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <p>We’ll send you a link to reset your password.</p>
              <div className="">
                {children}
  
              <div className="form-floating mb-3">
       
       <input    
         type="text"
         id="floatingInput"
         placeholder="Enter your email or phone"
         className="form-control"
         value=""
         onKeyUp=""
       //   onChange={(event) => setUsername(event.target.value)}
       />
        <label htmlFor="floatingInput" className="email-phone">Email/Phone</label>
</div>

        <button
        className="bth-Submit2"
          type="submit"
          id="button-input"
          // disabled={isEnable}
          // onClick={() => onSubmit()}
        >
          Reset Password
        </button>
        <p className="have-an">Don’t have an account?</p>
        <a href='#'>Create account</a>

              </div>
              
            </div>
          </div>
        </div>

      

      
      </div>
    );
  }


 