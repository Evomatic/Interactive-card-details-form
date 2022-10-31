import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField, InputLabel } from '@mui/material';
import './App.css';

function App() {
  return (
   <Container className="container" maxWidth="false">
     <Box className="bg-image" />
     <FormControl className="form">
       <InputLabel className="name-label" size="small" >CARDHOLDER NAME</InputLabel>
       <TextField className="form-field name" placeholder="e.g. Jane Appleseed"/>
       <InputLabel className="number-label" size="small" >CARD NUMBER</InputLabel>
       <TextField className="form-field number" placeholder="e.g. 1234 5678 9123 0000"/>
      <Box className="field-group">
        <Box className="expiration-box">
          <InputLabel className="exp-label" size="small" >EXP. DATE</InputLabel>
          <TextField className="form-field month" placeholder="MM" />
        </Box>
        <Box className="mm-yy-box">
          <InputLabel className="mm-yy-label" size="small" >(MM/YY)</InputLabel>
          <TextField className="form-field year" placeholder="YY" />
        </Box>
        <Box className="cvc-box">
          <InputLabel className="cvc-label" size="small" >CVC</InputLabel>
          <TextField className="form-field cvc" placeholder="e.g. 123"/>
        </Box>
      </Box>
      <Button className="confirm-btn" type ="submit" variant="contained" size="large">Confirm</Button>
     </FormControl>
   </Container>
  );
}

export default App;
  