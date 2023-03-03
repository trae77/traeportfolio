import React from "react";
function Navbar() {
  return (
    <nav>
      <div className="nav">
      <button className="button">
        <a href="https://www.linkedin.com/in/william-pollak-7145bb200/" target="_blank" rel = "noreferrer" >
          Linkedin
        </a>
      </button>

      <button className="button">
        <a href="https://github.com/trae77" target="_blank"   rel = "noreferrer">Github</a>
      </button>
      <button className="button">
        <a href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing" target="_blank"  rel = "noreferrer">
          Resume
        </a>
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
