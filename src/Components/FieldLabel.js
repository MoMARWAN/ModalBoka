import { Field } from 'formik';
import * as Yup from 'yup';



export default function FieldLabel(
    { name, type, placeholder }
) {
    return (

        <Field
            name="email"
            className='input-emil form-control'
            //  onKeyUp={handleKeyUp}
            placeholder=""
            type=""
            

        />


    )
}