import React from "react";


function Navbar() {
  return (
    <nav >

      <button className="button">
        <a
          href="https://www.linkedin.com/in/william-pollak-7145bb200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Linkedin
          
        </a>
      </button>

      <button className="button">
        <a href="https://github.com/trae77" target="blank" rel="noopener noreferrer">
          {" "}
          Github
        </a>
      </button>
      <button className="button">
        <a
          href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing"
          target="blank" rel="noopener noreferrer"
        >
          {" "}
          Resume
        </a>
      </button>
    </nav>
  )};


export default Navbar;

