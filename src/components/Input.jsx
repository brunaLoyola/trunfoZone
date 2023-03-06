import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="nameInput">
          Nome:
          <input type="text" data-testid="name-input" id="nameInput" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="textarea" data-testid="description-input" id="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr1:
          <input type="number" data-testid="attr1-input" id="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Attr2:
          <input type="number" data-testid="attr2-input" id="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Attr3:
          <input type="number" data-testid="attr3-input" id="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" data-testid="image-input" id="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select type="select" data-testid="rare-input" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <button data-testid="save-button" id="save-button">Salvar</button>
      </>
    );
  }
}

export default Input;
