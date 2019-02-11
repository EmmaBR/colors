import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.defaultColor,
    };
  }

  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <div className="App">
        <p>MY COLOR APP</p>
        <input
          type="text"
          value={this.state.color}
          onChange={event => this.setState({ color: event.target.value })}
        />
        <div
          className="colorbox"
          style={{
            width: '50vw',
            height: '50vh',
            background: this.state.color,
            paddingLeft: '100%',
          }}
        />
      </div>
    );
  }
}

export default App;
