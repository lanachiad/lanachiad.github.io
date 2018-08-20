import React, { Component } from 'react';
import './Work.css';
import HPQuiz from './images/hpquiz.png';
import ToDoList from './images/todolist.png';
import RealFakeDoors from './images/real_fake_doors.png';
import BurnBook from './images/burnbook.png';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <h2>Work</h2>
        <div className="project-wrapper">
          <div className="project">
            <a href="#">
              <img alt="Screenshot of Harry Potter Quiz" src={HPQuiz} />
            </a>
            <h3>Harry Potter Quiz</h3>
            <p>Prove yourself as a true Harry Potter fan by taking this ultimate quiz.</p>
            <p>
              Built in ReactJS, you can guess on a series of questions based on the Harry Potter universe. It calculates
              your score and receive unique results based on your grade. We even have floating candles!
            </p>
            <div className="link-wrapper">
              <p>
                <a href="https://github.com/lanachiad/hp-quiz" target="_blank">
                  View repo
                </a>
              </p>
              <p>
                <a href="https://lanachiad.github.io/hp-quiz/" target="_blank">
                  View site
                </a>
              </p>
            </div>
          </div>
          <div className="project">
            <a href="#">
              <img alt="Screenshot of Real Fake Doors" src={RealFakeDoors} />
            </a>
            <h3>Real Fake Doors</h3>
            <p>Real Fake Doors landing page offers premium solutions to your home.</p>
            <p>
              Built using HTML5, CSS3, Sass, JavaScript, and jQuery. Gulp was used to optimize build and minify/uglify
              CSS and JS. Uses Type.js and AOS. Images were modified using Adobe Photoshop.
            </p>
            <div className="link-wrapper">
              <p>
                <a href="https://github.com/lanachiad/real-fake-doors-landing-page" target="_blank">
                  View repo
                </a>
              </p>
              <p>
                <a href="https://lanachiad.github.io/real-fake-doors-landing-page/" target="_blank">
                  View site
                </a>
              </p>
            </div>
          </div>
          <div className="project">
            <a href="#">
              <img alt="Screenshot of To Do List" src={ToDoList} />
            </a>
            <h3>To Do List</h3>
            <p>To Do List is just that: a to-do list. You can add, edit, complete, and delete items.</p>
            <p>Built in ReactJS, HTML, and CSS.</p>
            <div className="link-wrapper">
              <p>
                <a href="https://github.com/lanachiad/todo-list" target="_blank">
                  View repo
                </a>
              </p>
              <p>
                <a href="https://lanachiad.github.io/todo-list/" target="_blank">
                  View site
                </a>
              </p>
            </div>
          </div>
          <div className="project">
            <a href="#">
              <img alt="Screenshot of Burn Book" src={BurnBook} />
            </a>
            <h3>Burn Book</h3>
            <p>Burn Book was inspired by one of my favorite movies, Mean Girls.</p>
            <p>This web app was built with Rails, uses PostgreSQL for the database, and was deployed to Heroku.</p>
            <p>
              As simple as this site is, my favorite part about this app is that all the submissions were done by random
              people &mdash; not one of those is mine. It keeps true to the spirit of the Burn Book.
            </p>
            <div className="link-wrapper">
              <p>
                <a href="https://github.com/lanachiad/burn-book" target="_blank">
                  View repo
                </a>
              </p>
              <p>
                <a href="https://lc-burn-book.herokuapp.com/" target="_blank">
                  View site
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
