import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  incrementCounter() {
    this.setState({
      counter: ++this.state.counter
    });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.incrementCounter.bind(this)}>Incrementa</button>
      </div>
    );
  }
}

export default App;
