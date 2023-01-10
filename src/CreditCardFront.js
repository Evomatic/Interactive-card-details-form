import './CreditCardFront.css';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import bgCreditCardFront from './assets/bg-card-front.png';
import cardLogo from './assets/card-logo.svg';
import { isEmptyString } from './utils';
function CreditCardFront(props) {
  const { name, month, year, number } = props;

  return (
    <Box className="credit-card-front-container">
      <img className="credit-card-logo" src={cardLogo} alt="credit card logo" />
      <div className="credit-card-number">{isEmptyString(number) ? '0000 0000 0000 0000': number}</div>
      <div className="credit-card-name-exp">
        <span className="credit-card-name">
          {isEmptyString(name) ? 'JANE APPLESEED' : name}
        </span>
        <span className="credit-card-exp">
          <span className="month">{isEmptyString(month) ? '00' : month}</span>
          <span className="slash">/</span>
          <span className="year">{isEmptyString(year) ? '00' : year}</span>
        </span>
      </div>
      <img
        className="bg-credit-card-front"
        src={bgCreditCardFront}
        alt="credit card front"
      />
    </Box>
  );
}

CreditCardFront.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
};

export default CreditCardFront;
