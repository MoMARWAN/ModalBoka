import { Field } from 'formik';
import * as Yup from 'yup';



export default function FieldLabel(
    {...rest }
) {
    return (

        <Field
            name=""
            className='input-emil form-control'
           {...rest}
        />


    )
}