import React, { useState } from "react";
import '../Pages/Layout/signUp/SignUp.css'





export default  function Name({ onSubmit }) {

  // switch (namea) {
  //   case 'username':
  //       if(value.length <= 4){
  //           // we will set the error state

  //           setErrors({
  //               ...errors,
  //               username:'Username atleast have 5 letters'
  //           })
  //       }else{
  //           // set the error state empty or remove the error for username input

  //           //omit function removes/omits the value from given object and returns a new object
  //           let newObj = omit(errors, "username");
  //           setErrors(newObj);
            
  //       }
  //       break;



    //  const [Name, setName] = useState("");
    // const [isEnable, setEnable] = useState(true);
    // const [isclass, setClass] = useState('bth-Submit');
    // const handleKeyUp = () => {
    //   if (Name.length > 5 ) {setEnable(false);
    //     setClass('bth-Submit2')
    //   }else {
    //     setEnable(true);
    //     setClass('bth-Submit')
    //
    //   }
    // };
    return (

     
      <div>


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
Name
        </button>

        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModal2Labe2" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-4 Create-account">
              <div className="d-flex justify-content-between ">
                <h1 className="modal-title fs-5" id="exampleModal2Label">Please enter your name</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <p>Welcome to Boka! Enter your email or Phone to get started.</p>
              <div className="">
  
<div>
<form className="mb-3">
<div className="form-floating">

  <input type="text" class="form-control" id="floatingInputValue01" placeholder="Enter your first name" />
  <label for="floatingInputValue01">First Name *</label>
  </div>
<br/>
<div className="form-floating">
<input type="text" class="form-control" id="floatingInputValue02" placeholder="Enter your last name" />
  <label for="floatingInputValue02">Last Name *</label>
  </div>
</form>
</div>

        <button
          className="bth-Submit2"
          type="submit"
          id="button-input"
         
          // onClick={() => onSubmit(Name)}
        >
          Continue
        </button>
    

              </div>
              
            </div>
          </div>
        </div>

      

      
      </div>
    );
  }


 