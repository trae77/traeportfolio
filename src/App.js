import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
// import ReactCardFlip from 'react-card-flip';

import github from "./pictures/icons/github.png";
import css from "./pictures/icons/css.png";
import html from "./pictures/icons/html.png";
import handlebars from "./pictures/icons/handlebars.png";
import javascript from "./pictures/icons/javascript.png";
import jquery from "./pictures/icons/jquery.png";

import mongodb from "./pictures/icons/mongodb.png";
import mysql from "./pictures/icons/mysql.png";
import node from "./pictures/icons/node.png";
import react from "./pictures/icons/react.png";
import sass from "./pictures/icons/sass.png";
import background from "./pictures/background.jpg";
import card from "./Projects.json";

import React, { useState } from "react";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
    setIsFlipped(!isFlipped);
  }
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="App"
    >
      <div class="row">
        <div class="col-sm-3">
          <div className="custom-btn">
            <button class="button">
              <img alt="github" src={github} />
            </button>
            <button class="button">
              <img src={css} alt="css" />
            </button>
            <button class="button">
              <img src={html} alt="html" />
            </button>
            <button class="button">
              <img src={handlebars} alt="handlebars" />
            </button>
            <button class="button">
              {" "}
              <img src={javascript} alt="javascript" />
            </button>
            <button class="button">
              <img src={jquery} alt="jquery" />
            </button>
          </div>
        </div>
        <div class="col-sm-6">
          <h1>Full-stack Software engineer</h1>
          <h3>
            I currently live in Thornton Colorado but am originally from
            Michigan. I enjoy playing sports and video games in my free time.
            Web Developer trained at the University of Denver Coding Bootcamp
            and earned a full-Stack Web Development Certificate. Innovative
            problem-solver that is passionate about developing apps focused on
            mobile-first design and development. Strengths in creativity,
            teamwork, and building projects from ideation to execution. To
            secure a position that will utilize my skills and experience to
            maximum potential, with the opportunity for advancement based on
            performance.
          </h3>

          {card.map(($Card) => (
            <div
              className="card-container"
              key={card.id}
              style={{
                backgroundcolor: "white",
              }}
            >
              <div className="card"  style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover" }} >
              <div className="card-body">
                <h5>{$Card.name}</h5>
                <p>{$Card.description}</p>
                <button onClick={handleClick}>Click to flip</button>
              </div>

              <div className="card-back">
                <h5>lol</h5>
                <p>{$Card.tools}</p>
                <button onClick={handleClick}>Click to flip</button>
                <button href={$Card.deployed}></button>
              </div>
            </div>
            </div>
          ))}
        </div>

        <div class="col-sm-3">
          <div className="custom-btn">
            <button class="button">
              <img src={react} alt="react" />
            </button>
            <button class="button">
              <img src={sass} alt="sass" />
            </button>
            <button class="button">
              <img src={mongodb} alt="mongodb" />
            </button>
            <button class="button">
              <img src={mysql} alt="mysql" />
            </button>
            <button class="button">
              <img src={node} alt="node" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
