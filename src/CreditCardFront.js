import './CreditCardFront.css';

import PropTypes from 'prop-types';

import bgCreditCardFront from './assets/bg-card-front.png';
import cardLogo from './assets/card-logo.svg';

function CreditCardFront(props) {
  const { name, expiration, number } = props;

  return (
    <div className="credit-card-front-container">
      <img className="credit-card-logo" src={cardLogo} alt="credit card logo" />
      <div className="credit-card-number">{number}</div>
      <div className="credit-card-name-exp">
        <span className="credit-card-name">{name}</span>
        <span className="credit-card-exp">{expiration}</span>
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
  expiration: PropTypes.string,
};

CreditCardFront.defaultProps = {
  name: 'Evan Trujillo',
  expiration: '10/30',
};

export default CreditCardFront;
