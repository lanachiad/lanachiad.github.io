import React, { Component } from 'react';
import './Resume.css';
import LCResume from './images/portfolio.png';

class Resume extends Component {
  render() {
    return (
      <div className="ResumeStyle">
        <h2>Portfolio</h2>
        <img alt="Lana Chiad portfolio" src={LCResume} />
        <div className="link-wrapper external-link">
          <p>
            <a href="mailto:lanachiad7@gmail.com" target="_blank">
              Email me
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
