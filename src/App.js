import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <Container className="container" maxWidth="false" >
      <Box className="box-wrapper">
      <FormControl className="form">
      <TextField className="form-field name" placeholder="e.g. Jane Appleseed"/>
      <TextField className="form-field number" placeholder="e.g. 1234 5678 9123 0000"/>
        <TextField className="form-field month" placeholder="MM" />
        <TextField className="form-field year" placeholder="YY" />
        <TextField className="form-field cvc" placeholder="e.g. 123"/>
    </FormControl>
      </Box>
    </Container>
  );
}

export default App;
  