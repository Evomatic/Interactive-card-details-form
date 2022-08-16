import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import './FormDetailFields.css';



export default function FormDetailFields() {
   return (
    <FormControl className="form">
      <TextField className="name-field"/>
      <TextField  className="number-field"/>
      <TextField className="date-field" />
    </FormControl>
   );
}