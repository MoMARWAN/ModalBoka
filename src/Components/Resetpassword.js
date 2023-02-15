import React, { useState } from "react";



export default  function Resetpassword({ onSubmit }) {


    return (

     
      <div>


    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal8">
    Reset password
        </button>

        <div className="modal fade" id="exampleModal8" tabIndex={-1} aria-labelledby="exampleModal8Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal8Label">Reset password</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <p>Welcome to Boka! Enter your email or Phone to get started.</p>
              <div className="">
              <div class="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  
        //   onKeyUp={handleKeyUp}
          onChange={(event) => (event.target.value)}  name="password" autoComplete="current-password" required  />
  <i className="far fa-eye" id="togglePassword" />
  <label for="floatingPassword">Password</label>
  
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
       
              </div>
              
            </div>
          </div>
        </div>

      

      
      </div>
    );
  }


 