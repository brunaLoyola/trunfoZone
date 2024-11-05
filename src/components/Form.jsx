import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-container">
        <h2>Informações do Card</h2>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            className="form-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            className="form-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="attr1">Atributo 1</label>
          <input
            type="number"
            id="attr1"
            className="form-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="attr2">Atributo 2</label>
          <input
            type="number"
            id="attr2"
            className="form-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="attr3">Atributo 3</label>
          <input
            type="number"
            id="attr3"
            className="form-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagem (URL)</label>
          <input
            type="url"
            id="image"
            className="form-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div className="form-group">
          <label htmlFor="rare">Raridade</label>
          <select
            id="rare"
            className="form-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito-raro">Muito Raro</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            {hasTrunfo ? (
              <span>Você já tem um Super Trunfo</span>
            ) : (
              <>
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trunfo
              </>
            )}
          </label>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

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

export default Form;
