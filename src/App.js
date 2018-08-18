import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lana Chiad</h1>
        <nav>
          <ul>
            <li>
              <button id="about-btn">About</button>
            </li>
            <li>
              <button id="work-btn">Work</button>
            </li>
            <li>
              <button id="resume-btn">Resume</button>
            </li>
          </ul>
        </nav>
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
