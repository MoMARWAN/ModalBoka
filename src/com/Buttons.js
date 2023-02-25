import Button from 'react-bootstrap/Button';

export default function ButtonSubmit (
    { Title }
){
 return(
    <Button                        
    className={"btn-disabled"}
    type="submit"
    id="button-input"
  >
    {Title}
 </Button>
 )
}

   


