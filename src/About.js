import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>About</h2>
        <p>My name is Lana Chiad and I'm a web developer.</p>
        <p>
          Though my background lies in technical communication, I've chosen a career following my passion for front-end
          development. I've worked with a wide range of industries in understanding a user's experience in how they
          interact with a company's product and web-based platform that can lead to conversion. I'm always seeking
          opportunities to challenge my knowledge and grow as a developer.
        </p>
        <p>
          When I'm not developing, I'm playing video games or writing fiction. I'm pretty darn good at sudoku, and have
          an interesting in ornithology. I can recognize over 120 North American birds by sight and/or sound.
        </p>
        <p>Check out my portfolio, Github, and LinkedIn to learn more about my work.</p>
        <div className="link-wrapper">
          <p>
            <a href="https://github.com/lanachiad" target="_blank">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/lanachiad/" target="_blank">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="mailto:lanachiad7@gmail.com" target="_blank">
              Email
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
