import React from "react";
import ReactDOM from "react-dom";

// to setup external css is the same as for normal mapping .
//When putting the classname it should be in camel case like for JS.
//   <script src="../src/index.js" type="text/JSX"></script> -- update type to JSX since its reading a JSX file
// check various attributes applicable for a element
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="fasle">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
