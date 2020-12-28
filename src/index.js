import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="fasle">
      My Favourite Foods
    </h1>
    {/* to get imgae as java script const(img) and render in HTML src */}
    <img src={img} alt="random pic" />
    <img src={img + "?greyscale"} alt="random pic" />
    {/* 
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    <div>
      <img
        className="food-img"
        src="https://thenovicechefblog.com/wp-content/uploads/2012/01/How-to-cook-bacon-in-the-oven-1-sm-720x405.jpg"
        alt="Bacon"
      />
      <img
        className="food-img"
        src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
        alt="Jamon"
      />
      <img
        className="food-img"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
        alt="Noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
