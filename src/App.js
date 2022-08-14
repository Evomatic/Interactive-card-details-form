
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container className="container" maxWidth="lg" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url(./assets/bg-main-mobile.png)"
    }}>
      <Box className="box" sx={{width: "100%", height: "100%", backgroundColor: "black"}}></Box>
    </Container>
  );
}

export default App;
