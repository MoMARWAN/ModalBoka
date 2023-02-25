import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';



export default function FieldLabel (
    { name , type }
){
    return(
<Form.Group  className="form-floating mb-3" >
<Form.Label htmlFor="floatingInput" className="email-phone mb-5">Email/Phone</Form.Label>

<Field
  name="email"
  className='input-emil form-control'
//  onKeyUp={handleKeyUp}
type='text'

/>
</Form.Group>

    )
}