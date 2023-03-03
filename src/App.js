import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
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
import React from "react";
import card from "./Projects.json";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="App"
    >
      <div class="row" />
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
        <h1>Full-stack Software engineer UNDER CONSTRUCTION</h1>
        <h3>
          I currently live in Thornton Colorado but am originally from Michigan.
          I enjoy playing sports and video games in my free time. Web Developer
          trained at the University of Denver Coding Bootcamp and earned a
          full-Stack Web Development Certificate. Innovative problem-solver that
          is passionate about developing apps focused on mobile-first design and
          development. Strengths in creativity, teamwork, and building projects
          from ideation to execution. I would like to secure a position that
          will utilize my skills and experience to maximum potential, with the
          opportunity for advancement based on performance.
        </h3>

        <div class="card-container">
          <div class="row row-cols-1 row-cols-md-2 mt-3">
            <div class="col mb-4">
              <div class="card card-envo">
                <div class="flip-box">
                  <div class="flip-box-inner">
                    <div class="flip-box-front">
                      <img
                        src="./pictures/icons/css.png"
                        class="card-img-top project-image"
                        alt="img"
                      />
                    </div>
                    <div class="flip-box-back project-image">
                      <h3 class="mt-2">Short summary</h3>
                      <h6 class="mt-2 pt-2">
                        The user can search using their cars VIN number and get
                        the average market price for their car in USD and the
                        current Crypto Currency price. Because the cryto
                        currency market is changing at such a rapid pace, the
                        user can save the searched price eveytime they search to
                        see if the crypto price is increasing or decreasing.
                      </h6>
                      <div class="row pt-2">
                        <div class="col-6">
                          <h6>
                            Technologies Used:
                            <ul>
                              <li>React</li>
                              <li>MongoDB</li>
                              <li>Javascript</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>Node.js</li>
                            </ul>
                          </h6>
                        </div>
                        <div class="col-6">
                          <h6>
                            Node Packages Used:
                            <ul>
                              <li>Express</li>
                              <li>Material-UI</li>
                              <li>Bcrypt</li>
                              <li>Mongoose</li>
                            </ul>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title text-center">
                    National Park and Weather Service
                  </h4>
                  <p class="card-text text-center">
                    Full Stack Web Development
                  </p>
                  <p class="text-muted text-center"> University of Denver</p>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6 col-md-6 col-6">
                        <button type="button" class="btn btn-outline-primary">
                          <a
                            class="text-reset text-decoration-none"
                            href="https://cryptocarsmern.herokuapp.com/"
                            target="_blank"
                          >
                            Link to App
                          </a>
                        </button>
                      </div>
                      <div class="col-sm-6 col-md-6 col-6">
                        <button type="button" class="btn btn-outline-primary">
                          <a
                            class="text-reset text-decoration-none"
                            href="https://github1s.com/TolgaS92/CryptoCars"
                            target="_blank"
                          >
                            Link to Code
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="container">
          {card.map((card) => (
            <div class="card-container">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <div id="card" key={card.id}>
                      <img alt="github" src={card.image} />
                    </div>
                  </div>

                  <div class="flip-box-back project-image">
                    <h3>{card.name}</h3>
                    <h6>{card.description}</h6>
                    <div class="row pt-2">
                      <div class="col-6">
                        <h6>
                          Technologies Used:
                          {card.tools}
                        </h6>
                      </div>
                    </div>
                    <button variant="small" className="button">
                      <a href={card.deployed} target="_blank" rel="noreferrer">
                        Deployed
                      </a>
                    </button>
                    <button variant="small" className="button">
                      <a href={card.repo} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))} */}

          <div class="col-sm-2">
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
    </div>
  );
}

export default App;
