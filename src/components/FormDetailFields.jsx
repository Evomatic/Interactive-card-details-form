import { Fragment } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import './FormDetailFields.css';

export default function FormDetailFields() {

  function dateFields() {
    return (
      <Fragment>
        <TextField className="form-field month" />
        <TextField className="form-field year" />
        <TextField className="form-field cvc" />
      </Fragment>
    )
  }
   return (
    <FormControl className="form">
      <TextField className="form-field name" placeholder="e.g. Jane Appleseed"/>
      <TextField className="form-field number" placeholder="e.g. 1234 5678 9123 0000"/>
      {dateFields()}
    </FormControl>
   );
}