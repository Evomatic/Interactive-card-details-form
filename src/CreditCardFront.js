import './CreditCardFront.css';

import PropTypes from 'prop-types';

import bgCreditCardFront from './assets/bg-card-front.png';

function CreditCardFront(props) {
    const {name, expiration, number } = props;

    return (
        <div className="credit-card-front-container">
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
    )
}

CreditCardFront.propTypes = {
    number: PropTypes.number,
    name: PropTypes.string,
    expiration: PropTypes.string
};

CreditCardFront.defaultProps = {
    number: 123412341234,
    name: 'Evan Trujillo',
    expiration: '10/30'
}


export default CreditCardFront;