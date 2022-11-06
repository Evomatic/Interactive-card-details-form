import bgCreditCardBack from './assets/bg-card-back.png';
import PropTypes from 'prop-types';
import './CreditCardBack.css';

function CreditCardBack(props) {
  const { cardCvc } = props;

  return (
    <div className="credit-card-back-container">
      <div className="credit-card-cvc">{cardCvc}</div>
      <img
        className="bg-credit-card-back"
        src={bgCreditCardBack}
        alt="credit card back"
      />
    </div>
  );
}

CreditCardBack.propTypes = {
  cardCvc: PropTypes.number,
};

CreditCardBack.defaultProps = {
  cardCvc: 123,
};

export default CreditCardBack;
