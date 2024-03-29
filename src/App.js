import "bootstrap/dist/css/bootstrap.css";
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
import {
  Card,
  Col,
  Container,
  Button,
  ButtonGroup,
  Row,
} from "react-bootstrap";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
      className="App"
    >
      <div className="row">
        <div className="col-sm-2">
          {" "}
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
        <Col sm={7}>
          {" "}
          <h1>Full-stack Software engineer UNDER CONSTRUCTION</h1>
          <h5>
            I enjoy playing sports and video games in my free time. Web
            Developer trained at the University of Denver Coding Bootcamp and
            earned a full-Stack Web Development Certificate. Strengths in
            creativity, teamwork, and building projects from ideation to
            execution. I would like to secure a position that will utilize my
            skills and experience to maximum potential, with the opportunity for
            advancement based on performance.
          </h5>
          <div class="map-container">
            {card.map((card) => (
              <div class="card-container">
                <div class="flip-box">
                  <div class="flip-box-inner">
                    <div class="flip-box-front">
                      <Card id="card" key={card.id}>
                      <h2>{card.name}</h2>
                        <img
                          src={card.image}
                          className="portfolio-image"
                          alt="project image"
                        />
                      </Card>
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
                        <a
                          href={card.deployed}
                          target="_blank"
                          rel="noreferrer"
                        >
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
            ))}
          </div>
        </Col>

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
  );
}

export default App;
