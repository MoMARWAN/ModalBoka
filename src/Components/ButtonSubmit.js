import '../Pages/Layout/signUp/SignUp.css';


export default function ButtonSubmit (
 
  { Title , ...rest }
    
){
  

 return(
    <button                        
    className="btn-disabled"
    type="submit"
    
    // disabled={isEnable}
    {...rest}
  >
    {Title}
 </button>
 )
}

   


