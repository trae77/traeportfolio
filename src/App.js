import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import github from './picture/icons/github.png';
import css from './picture/icons/css.png';
import html from './picture/icons/html.png';
import handlebars from './picture/icons/handlebars.png';
import javascript from './picture/icons/javascript.png';
import jquery from './picture/icons/jquery.png';

import mongodb from './picture/icons/mongodb.png';
import mysql from "./picture/icons/mysql.png";
import node from "./picture/icons/node.png";
import react from "./picture/icons/react.png";
import sass from "./picture/icons/sass.png"; 
// import card from "./Projects.json";

function App() {
  return (
    <container-fluid  className="App">
      <div className="background">
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
            </div></div>
  <div class="col"> 
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
        
            <div className="card-container">
              <div className="card">
                <div className="card-image">
                  <img src={mongodb} alt="mongodb" />
                  </div>
                <div className="card-content">
                  <h2 className="card-title">MongoDB</h2>
                  <p className="card-text">
                    MongoDB is a cross-platform document-oriented database
                    program. Classified as a NoSQL database program, MongoDB
                    uses JSON-like documents with optional schemas.
                  </p>
                  </div>
                  </div>
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
      <script src="./flipcard.js"></script>
    </container-fluid>  

  );

}

export default App;