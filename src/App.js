import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormDetailFields from './components/FormDetailFields';
import './App.css';

function App() {
  return (
    <Container className="container" maxWidth="false" >
      <Box className="box-wrapper">
        <FormDetailFields className="form-detail-fields" />
      </Box>
    </Container>
  );
}

export default App;
  