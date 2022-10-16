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
       <TextField className="form-field number" placeholder="e.g. 1234 5678 9123 0000"/>
      <Box className="field-group">
        <TextField className="form-field month" placeholder="MM" />
        <TextField className="form-field year" placeholder="YY" />
        <TextField className="form-field cvc" placeholder="e.g. 123"/>
      </Box>
      <Button variant="contained" size="large">Confirm</Button>
     </FormControl>
   </Container>
  );
}

export default App;
  