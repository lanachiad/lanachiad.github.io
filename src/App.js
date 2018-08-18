import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Portfolio lol</h1>
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
