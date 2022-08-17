import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import './FormDetailFields.css';


export default function FormDetailFields() {
   return (
    <FormControl className="form">
      <InputLabel htmlfor="TextField">test</InputLabel>
      <TextField className="name-field"/>
      <TextField  className="number-field"/>
      <TextField className="date-fields"/>
      <TextField className="date-fields"/>
    </FormControl>
   );
}