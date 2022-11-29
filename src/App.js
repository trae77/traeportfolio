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

// import mongodb from "../picture/icons/mongodb.png";
// import mysql from "../picture/icons/mysql.png";
// import node from "../picture/icons/node.png";
// import react from "../picture/icons/react.png";
// import sass from "../picture/icons/sass.png";

function App() {
  return (
    <container-fluid  className="App">

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
  <div class="col">.col</div>
  <div class="col">col-sm-3</div>
</div>

    </container-fluid>  
  );

}

export default App;
