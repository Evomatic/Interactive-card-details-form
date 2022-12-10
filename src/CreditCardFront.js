import './CreditCardFront.css';

import PropTypes from 'prop-types';

import bgCreditCardFront from './assets/bg-card-front.png';
import cardLogo from './assets/card-logo.svg';
import { isStringEmpty } from './utils';
function CreditCardFront(props) {
  const { name, month, year, number } = props;

  return (
    <div className="credit-card-front-container">
      <img className="credit-card-logo" src={cardLogo} alt="credit card logo" />
      <div className="credit-card-number">{number}</div>
      <div className="credit-card-name-exp">
        <span className="credit-card-name">{isStringEmpty(name) ? 'JANE APPLESEED' : name}</span>
        <span className="credit-card-exp">
          <span className="month">{month}</span>
          <span className="slash">/</span>
          <span className="year">{year}</span>
        </span>
      </div>
      <img
        className="bg-credit-card-front"
        src={bgCreditCardFront}
        alt="credit card front"
      />
    </div>
  );
}

CreditCardFront.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
};

export default CreditCardFront;
