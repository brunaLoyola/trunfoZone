import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: [],
    };
  }

  validacao = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    if (!cardName
      || !cardDescription || !cardImage || !cardRare || this.validacaoAttr() === 1) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    this.setState({ isSaveButtonDisabled: false });
  };

  validacaoAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const max = 90;
    const min = 0;
    const maxSoma = 211;
    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (cardAttr1 < min
      || cardAttr1 > max
      || cardAttr2 < min
      || cardAttr2 > max
      || cardAttr3 < min
      || cardAttr3 > max
      || soma >= maxSoma) {
      return 1;
    }
    return 0;
  };

  validacaoHasTrunfo = () => {
    const { baralho } = this.state;

    const valor = baralho.some((carta) => carta.cardTrunfo);
    if (valor === false) {
      return this.setState({
        hasTrunfo: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validacao);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const adicionando = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };

    this.setState((prevState) => ({
      baralho: [...prevState.baralho, adicionando],
      isSaveButtonDisabled: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
    }), this.validacaoHasTrunfo);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, baralho } = this.state;

    return (
      <div className="container">
        <h1>Trunfo Zone</h1>
        <div className="form-card-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <CardList baralho={ baralho } />
      </div>
    );
  }
}

export default App;
