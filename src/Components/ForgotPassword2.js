import React, { useState } from "react";



export default  function Forgotpassword({ onSubmit }) {


    return (

     
      <div>


    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal7">
    Forgotpassword2****
        </button>

        <div className="modal fade" id="exampleModal7" tabIndex={-1} aria-labelledby="exampleModal7Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal7Label">Forgot password?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <p>We sent an email (rebecca.oys@gmail.com) to verify your account please reset password </p>
              <div className="">
  
         
        <button
        className="bth-Submit2"
          type="submit"
          id="button-input"
          // disabled={isEnable}
          // onClick={() => onSubmit()}
        >
          Open your emil
        </button>
      
              </div>
              
            </div>
          </div>
        </div>

      

      
      </div>
    );
  }


 