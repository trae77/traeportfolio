import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import ReactCardFlip from "react-card-flip";

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

import React, { useState } from "react";

function App() {
  const cardData = [
    {
      id: 1,
      name: "Foodmersion",
      image: "./pictures/foodmersion.png",
      description:
        "FullStack website for our imaginary restaurant FoodMersion - an interactive dining experience.",
      tools:
        " HTML, JavaScript, Bootstrap, sequalize , Mysql, tailwind css, Insomnia",
      deployed: "https://evening-spire-50554.herokuapp.com/",
      repo: "https://github.com/jacksoncurdo/FoodMersion-",
    },
    {
      id: 2,
      name: "wheather data",
      image: "./pictures/Screenshot (21).png",
      description: "Look up the wheather in different cities using an api",
      tools: "HTML, CSS, JavaScript, Bootstrap, local storage",

      deployed: "https://trae77.github.io/wheather-data/",
      repo: "https://github.com/trae77/wheather-data",
    },
    {
      id: 3,
      name: "Quiz",
      image: "./pictures/quiz.png",
      description: "A quiz with timer and high score",
      tools: " node.js, MySQL",
      deployed: " https://trae77.github.io/web-api-/",
      repo: "https://github.com/trae77/web-api-",
    },
    {
      id: 4,
      name: "Movie Rec",
      image: "./pictures/Screenshot (17).png",
      description:
        "Movie recommendation system based on user's history and movie's genre.",
      tools: "HTML, CSS, JavaScript, Bootstrap",

      deployed: "https://oborendo.github.io/group-project/",
      repo: "https://github.com/Oborendo/group-project",
    },
    {
      id: 5,
      name: "Employee Management",
      image: "./pictures/Screenshot-201520.png",
      description:
        "Command line application keeping track of employees, their departments, managers, salaries, and roles.",
      tools: "HTML, CSS, JavaScript, Bootstrap",
      deployed: "https://github.com/trae77/office-",
    },
    {
      id: 6,
      name: "Blog Post",
      image: "./pictures/prof pic.jpg",
      description: "keeps blogs with titles",
      tools: "HTML, CSS, JavaScript, Bootstrap, sequalize , Mysql, Insomnia",
      deployed: " https://github.com/trae77/blog-post",
    },
  ];
  const [cards, setCard] = useState(cardData);

  const handleFlip = (id) => {
    setCard((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, flip: !card.flip };
        }
        return card;
      });
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="App"
    >
      <div class="row">
        <div class="col-sm-2">
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
        <div class="col-lg-7">
          <h1>Full-stack Software engineer</h1>
          <h3>
            I currently live in Thornton Colorado but am originally from
            Michigan. I enjoy playing sports and video games in my free time.
            Web Developer trained at the University of Denver Coding Bootcamp
            and earned a full-Stack Web Development Certificate. Innovative
            problem-solver that is passionate about developing apps focused on
            mobile-first design and development. Strengths in creativity,
            teamwork, and building projects from ideation to execution. I would
            like to secure a position that will utilize my skills and experience
            to maximum potential, with the opportunity for advancement based on
            performance.
          </h3>

          <div className="card-list">
            {cardData.map((Card) => (
              <div className="card-container" key={Card.id}>
                <ReactCardFlip isFlipped={Card.flip} flipDirection="horizontal">
                  <div
                    className="card-front"
                    onClick={() => handleFlip(Card.id)}
                  >
                    <h5>{Card.name}</h5>
                    <p>{Card.description}</p>
                    <button onClick={() => handleFlip(Card.id)}>Flip</button>
                  </div>
                  <div
                    className="card-back"
                    onClick={() => handleFlip(Card.id)}
                  >
                    <h5>{Card.name}</h5>
                    <p>Tools used: {Card.tools}</p>
                    <button onClick={() => handleFlip(Card.id)}>Flip</button>
                    <button>
                      <a href={Card.repo}>Github</a>
                    </button>
                    <button>
                      <a href={Card.deployed}>Deployed</a>
                    </button>
                  </div>
                </ReactCardFlip>
              </div>
            ))}
          </div>
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
