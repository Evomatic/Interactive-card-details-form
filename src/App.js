import './App.css';

import Container from '@mui/material/Container';

import CardDetailsForm from './CardDetailsForm';

// import CompleteView from './CompleteView';

function App() {
  return (
    <Container className="container" maxWidth="false">
      <CardDetailsForm />
    </Container>
  );
}

export default App;
