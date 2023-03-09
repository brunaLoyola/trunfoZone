/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <>
        <label htmlFor="nameInput">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="nameInput"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            type="textarea"
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr1:
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            min="1"
            max="90"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            min="1"
            max="90"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr3:
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            min="1"
            max="90"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            type="select"
            data-testid="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="" disabled selected>Selecione uma opção</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
          />
        </label>
        <button
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </>
    );
  }
}
export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
