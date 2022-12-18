import './CreditCardBack.css';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import bgCreditCardBack from './assets/bg-card-back.png';

function CreditCardBack(props) {
  const { cvcValue } = props;

  return (
    <Box className="credit-card-back-container">
      <div className="credit-card-cvc">{cvcValue}</div>
      <img
        className="bg-credit-card-back"
        src={bgCreditCardBack}
        alt="credit card back"
      />
    </Box>
  );
}

CreditCardBack.propTypes = {
  cvcValue: PropTypes.string,
};

export default CreditCardBack;
