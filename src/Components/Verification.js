import React, { useState } from "react";



export default  function Verification({ onSubmit }) {


    return (

     
      <div>


    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
    Verification
        </button>

        <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModal4Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal4Label">Verification</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <p>We sent an email (rebecca.oys@gmail.com) to verify your account please verify your self</p>
              <div className="">
  
{/* <div>
  <input  value={password}
          onKeyUp={handleKeyUp}
          onChange={(event) => setPassword(event.target.value)} type="password" name="password" autoComplete="current-password" required id="id_password" />
  <i className="far fa-eye" id="togglePassword" style={{marginLeft: '-30px', cursor: 'pointer'}} />
</div> */}

        <button
        className="bth-Submit2"
          type="submit"
          id="button-input"
          // disabled={isEnable}
          // onClick={() => onSubmit()}
        >
          Verify Now
        </button>
    

              </div>
              
            </div>
          </div>
        </div>

      

      
      </div>
    );
  }


 