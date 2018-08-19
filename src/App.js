import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      showWork: false,
      showResume: false
    };
  }

  onAboutBtnClick = () => {
    this.onlyOneTrue();
    this.setState({ showAbout: !this.state.showAbout });
  };

  onWorkBtnClick = () => {
    this.onlyOneTrue();
    this.setState({ showWork: !this.state.showWork });
  };

  onResumeBtnClick = () => {
    this.onlyOneTrue();
    this.setState({ showResume: !this.state.showResume });
  };

  onlyOneTrue = () => {
    if (this.state.showAbout === true) {
      this.setState({ showAbout: false });
    } else if (this.state.showResume === true) {
      this.setState({ showResume: false });
    } else if (this.state.showWork === true) {
      this.setState({ showWork: false });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Lana Chiad</h1>
        <nav>
          <ul>
            <li>
              <button id="about-btn" onClick={this.onAboutBtnClick}>
                About
              </button>
            </li>
            <li>
              <button id="work-btn" onClick={this.onWorkBtnClick}>
                Work
              </button>
            </li>
            <li>
              <button id="resume-btn" onClick={this.onResumeBtnClick}>
                Resume
              </button>
            </li>
          </ul>
        </nav>
        {this.state.showAbout ? <About /> : null}
        {this.state.showWork ? <Work /> : null}
        {this.state.showResume ? <Resume /> : null}
      </div>
    );
  }
}

export default App;
