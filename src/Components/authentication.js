import React, { useState } from "react";

import  Apple from '../assets/images/svg/apple.svg'
import  Google from '../assets/images/svg/google.svg'
import  Facebook from '../assets/images/svg/facebook.svg'





export default  function Authentication() {
  
    return (

      <div>
        <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModal5Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal5Label">Log in</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              
              <div className="">
                
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
         <label for="floatingInput" className="email-phone">Email/Phone</label>
</div>

<div class="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  
          onKeyUp=""
          onChange={(event) => (event.target.value)}  name="password" autoComplete="current-password" required  />
  <i className="far fa-eye" id="togglePassword" />
  <label for="floatingPassword">Password</label>
  
</div>

<div className="d-flex justify-content-between">
 
<div class="checkbox">
      <label className="rememberMe"><input className="remember" type="checkbox" name="remember"/> Remember me</label>
    </div>
    <a href="#">Forgot password?</a>
    </div>


        <button
        className="bth-Submit2 btn-default"
          type="submit"
          id="button-input"
        //   disabled=""
        //   onClick={() => onSubmit(username)}
        >
          Log in
        </button>



        <div className="or">
      <span></span>
      <p>Or</p>
      <span></span>
      </div>

      <div>

      <button type="button" class="btn btn-light">
         <img src={Apple} alt="horse" />
         <span>Continue with Apple</span>
          </button>
      <button type="button" class="btn btn-light"> <img src={Google} alt="horse" /> Continue with  Google</button>
      <button type="button" class="btn btn-light"><img src={Facebook} alt="horse" />Continue with Facebook</button>

      </div>


        <p className="have-an">Don’t have an account?</p>
        <a href='#'>Create account</a>
              </div>
              
            </div>
          </div>
        </div>



      
      </div>
    );
  }




