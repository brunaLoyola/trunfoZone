import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-container">
        <h1 data-testid="name-card" className="card-header">
          {cardName}
        </h1>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-image"
        />
        <h2 data-testid="description-card" className="card-description">
          {cardDescription}
        </h2>
        <div className="card-attributes">
          <h2 data-testid="attr1-card" className="card-attribute">
            {cardAttr1}
          </h2>
          <h2 data-testid="attr2-card" className="card-attribute">
            {cardAttr2}
          </h2>
          <h2 data-testid="attr3-card" className="card-attribute">
            {cardAttr3}
          </h2>
        </div>
        <h2 data-testid="rare-card" className="card-rare">
          {cardRare}
        </h2>
        {cardTrunfo && (
          <p data-testid="trunfo-card" className="card-trunfo">
            Super Trunfo
          </p>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
