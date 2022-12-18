import './CardDetailsForm.css';

import { InputLabel, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

import CompleteView from './CompleteView';
import CreditCardBack from './CreditCardBack';
import CreditCardFront from './CreditCardFront';
import {
  formatCardNumber,
  isEmptyString,
  lettersOnly,
  onlyNumbers,
} from './utils';

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    fontSize: '18px',
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
};

const ERROR_MESSAGE = {
  EMPTY_STRING: "Can't be blank",
  NUMBERS_ONLY: 'Wrong format, numbers only',
};

function CardDetailsForm() {
  const [cvcValue, setCvcValue] = useState('');
  const [ccNumber, setCcNumber] = useState('');
  const [ccMonth, setCcMonth] = useState('');
  const [ccYear, setCcYear] = useState('');
  const [ccName, setCcName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({ card_holder: null,
    card_number: null,
    month: null,
    year: null,
    cvc: null,});

  let errorMessages = error;
  console.log(error)

  const dataToSubmit = {
    card_holder: ccName,
    card_number: ccNumber.replace(/\s/g, ''),
    month: ccMonth,
    year: ccYear,
    cvc: cvcValue,
    submit: submit,
  };

  const creditCardBackOnChange = e => {
    const results = onlyNumbers(e.target.value);
    setCvcValue(results);
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

  const onClickSubmit = () => {
    Object.entries(dataToSubmit).filter(([key, value]) => {
      if (key !== 'submit') {
        if (isEmptyString(value)) {
          setError(errorMessages[key] = ERROR_MESSAGE.EMPTY_STRING);
          setSubmit(false);
        }
      }
    });
  };

  return (
    <Fragment>
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
        {!submit && (
          <Fragment>
            <InputLabel className="name-label" size="small">
              CARDHOLDER NAME
            </InputLabel>
            <TextField
              error={errorMessages.card_holder === null ? false : true}
              helperText={errorMessages.card_holder}
              className="form-field name"
              placeholder="e.g. Jane Appleseed"
              sx={textFieldStyle}
              onChange={creditCardNameFrontOnChange}
            />
            <InputLabel className="number-label" size="small">
              {console.log(errorMessages)}
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
          </Fragment>
        )}
        {submit && <CompleteView />}
        <Button
          className="confirm-btn"
          type="submit"
          variant="contained"
          size="large"
          onClick={onClickSubmit}>
          {!submit ? 'Confirm' : 'Continue'}
        </Button>
      </FormControl>
    </Fragment>
  );
}

CardDetailsForm.propTypes = {
  submit: PropTypes.bool,
};

export default CardDetailsForm;
