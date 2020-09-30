import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button/index';

class App extends React.Component {
  state = {
    contador: 0,
  }

  changeText = (e) => {
    this.setState({
      nome: e.target.value,
    });
  }

  adicionar = () => {
    this.setState({
      contador: this.state.contador+1,
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <input onChange={this.changeText} />
        nome: {this.state.nome}<br />
        contador: {this.state.contador}
        <Button press={this.adicionar}>
          Update
        </Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));