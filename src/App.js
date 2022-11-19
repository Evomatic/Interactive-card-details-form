import './App.css';

import { InputLabel, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';
import { formatCardNumber, lettersOnly, onlyNumbers } from './utils';

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
  const [cvcValue, setCvcValue] = useState('000');
  const [ccNumber, setCcNumber] = useState('0000 0000 0000 0000');
  const [ccMonth, setCcMonth] = useState('00');
  const [ccYear, setCcYear] = useState('00');
  const [ccName, setCcName] = useState('JANE APPLESEED');

  const creditCardBackOnChange = e => {
    setCvcValue(e.target.value);
  };

  const creditCardNumberFrontOnChange = e => {
    const results = formatCardNumber(e.target.value);
    setCcNumber(results);
  };

  const creditCardMonthFrontOnChange = e => {
    const results = onlyNumbers(e.target.value);
    setCcMonth(results);
  };

  const creditCardYearFrontOnChange = e => {
    const results = onlyNumbers(e.target.value);
    setCcYear(results);
  };

  const creditCardNameFrontOnChange = e => {
    const results = lettersOnly(e.target.value);
    setCcName(results);
  };

  return (
    <Container className="container" maxWidth="false">
      <Box className="credit-card-container">
        <CreditCardBack cvcValue={cvcValue} />
        <CreditCardFront
          name={ccName}
          number={ccNumber}
          month={ccMonth}
          year={ccYear}
        />
      </Box>
      <FormControl className="form">
        <InputLabel className="name-label" size="small">
          CARDHOLDER NAME
        </InputLabel>
        <TextField
          className="form-field name"
          placeholder="e.g. Jane Appleseed"
          sx={textFieldStyle}
          onChange={creditCardNameFrontOnChange}
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
              onChange={creditCardMonthFrontOnChange}
              inputProps={{
                maxLength: 2,
              }}
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
              onChange={creditCardYearFrontOnChange}
              inputProps={{
                maxLength: 2,
              }}
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
