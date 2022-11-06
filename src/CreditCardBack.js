import './CreditCardBack.css';

import PropTypes from 'prop-types';

import bgCreditCardBack from './assets/bg-card-back.png';

function CreditCardBack(props) {
  const { cvcValue } = props;

  return (
    <div className="credit-card-back-container">
      <div className="credit-card-cvc">{cvcValue}</div>
      <img
        className="bg-credit-card-back"
        src={bgCreditCardBack}
        alt="credit card back"
      />
    </div>
  );
}

CreditCardBack.propTypes = {
  cvcValue: PropTypes.string.isRequired,
};

CreditCardBack.defaultProps = {
  cvcValue: '123',
};

export default CreditCardBack;
