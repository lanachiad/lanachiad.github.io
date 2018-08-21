import React, { Component } from 'react';
import LCResume from './images/portfolio.png';

class Resume extends Component {
  render() {
    return (
      <div className="ResumeStyle">
        <h1>Portfolio</h1>
          <img alt="Lana Chiad portfolio" src={LCResume} />
      </div>
    );
  }
}

export default Resume;
