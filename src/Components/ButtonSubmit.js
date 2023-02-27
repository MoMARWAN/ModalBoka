import '../Pages/Layout/signUp/SignUp.css';


export default function ButtonSubmit (
 
  { Title }
    
){
  

 return(
    <button                        
    className="btn-disabled"
    type="submit"
    id="button-input"
    // disabled={isEnable}
    
  >
    {Title}
 </button>
 )
}

   


