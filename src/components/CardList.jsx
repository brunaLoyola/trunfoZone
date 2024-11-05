import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/cardList.css';

class CardList extends Component {
  render() {
    const { baralho } = this.props;

    return (
      <section className="cards">
        {
          baralho
            .map((carta, index) => (
              <Card
                key={ index }
                cardName={ carta.cardName }
                cardDescription={ carta.cardDescription }
                cardAttr1={ carta.cardAttr1 }
                cardAttr2={ carta.cardAttr2 }
                cardAttr3={ carta.cardAttr3 }
                cardImage={ carta.cardImage }
                cardRare={ carta.cardRare }
                cardTrunfo={ carta.cardTrunfo }
              />
            ))
        }
      </section>
    );
  }
}

CardList.propTypes = {
  baralho: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};

export default CardList;
