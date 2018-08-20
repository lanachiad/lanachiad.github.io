import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <h2>Work</h2>
        <div className="project-wrapper">
          <div className="project">
            <img alt="Screenshot of Harry Potter Quiz" src="./images/hpquiz.png" />
            <h3>Harry Potter Quiz</h3>
            <p>Prove yourself as a true Harry Potter fan by taking this ultimate quiz.</p>
            <p>
              Built in ReactJS, you can guess on a series of questions based on the Harry Potter universe. It calculates
              your score and receive unique results based on your grade. We even have floating candles!
            </p>
          </div>
          <div className="project">
            <img alt="Screenshot of To Do List" src="./images/todolist.png" />
            <h3>To Do List</h3>
            <p>To Do List is just that: a to-do list. You can add, edit, complete, and delete items.</p>
            <p>Built in ReactJS, HTML, and CSS.</p>
          </div>
          <div className="project">
            <img alt="Screenshot of Real Fake Doors" src="./images/real_fake_doors.png" />
            <h3>Real Fake Doors</h3>
            <p>Real Fake Doors landing page offers premium solutions to your home.</p>
            <p>
              Built using HTML5, CSS3, Sass, JavaScript, and jQuery. Gulp was used to optimize build and minify/uglify
              CSS and JS. Uses Type.js and AOS. Images were modified using Adobe Photoshop.
            </p>
          </div>
          <div className="project">
            <img alt="Screenshot of Burn Book" src="./images/burnbook.png" />
            <h3>Burn Book</h3>
            <p>Burn Book was inspired by one of my favorite movies, Mean Girls.</p>
            <p>This web app was built with Rails, uses PostgreSQL for the database, and was deployed to Heroku.</p>
            <p>As simple as this site is, my favorite part about this app is that all the submissions were done by random people &mdash; not one of those is mine. It keeps true to the spirit of the Burn Book.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
