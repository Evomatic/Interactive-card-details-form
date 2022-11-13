import './App.css';

import { InputLabel, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';
import { formatCardNumber } from './utils';

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    fontSize: '18px',
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
};

function App() {
  const [cvcValue, setCvcValue] = useState('123');
  const [ccNumber, setCcNumber] = useState('0000 0000 0000 0000');

  const creditCardBackOnChange = e => {
    setCvcValue(e.target.value);
  };

  const creditCardNumberFrontOnChange = e => {
    const results = formatCardNumber(e.target.value);
    setCcNumber(results);
  };

  return (
    <Container className="container" maxWidth="false">
      <Box className="credit-card-container">
        <CreditCardBack cvcValue={cvcValue} />
        <CreditCardFront number={ccNumber} />
      </Box>
      <FormControl className="form">
        <InputLabel className="name-label" size="small">
          CARDHOLDER NAME
        </InputLabel>
        <TextField
          className="form-field name"
          placeholder="e.g. Jane Appleseed"
          sx={textFieldStyle}
        />
        <InputLabel className="number-label" size="small">
          CARD NUMBER
        </InputLabel>
        <TextField
          className="form-field number"
          placeholder="e.g. 1234 5678 9123 0000"
          sx={textFieldStyle}
          onChange={creditCardNumberFrontOnChange}
          inputProps={{
            maxLength: 16,
          }}
        />
        <Box className="field-group">
          <Box className="expiration-box">
            <InputLabel className="exp-label" size="small">
              EXP. DATE
            </InputLabel>
            <TextField
              className="form-field month"
              placeholder="MM"
              sx={textFieldStyle}
            />
          </Box>
          <Box className="mm-yy-box">
            <InputLabel
              className="mm-yy-label"
              size="small"
              sx={textFieldStyle}>
              (MM/YY)
            </InputLabel>
            <TextField
              className="form-field year"
              placeholder="YY"
              sx={textFieldStyle}
            />
          </Box>
          <Box className="cvc-box">
            <InputLabel className="cvc-label" size="small">
              CVC
            </InputLabel>
            <TextField
              required
              className="form-field cvc"
              placeholder="e.g. 123"
              sx={textFieldStyle}
              onChange={creditCardBackOnChange}
              inputProps={{
                maxLength: 3,
              }}
            />
          </Box>
        </Box>
        <Button
          className="confirm-btn"
          type="submit"
          variant="contained"
          size="large">
          Confirm
        </Button>
      </FormControl>
    </Container>
  );
}

export default App;
