import React from "react";
import ReactDom from "react-dom";
// import "./index.css";
//ES6, Nested Components and React Tools

const btnText = "small button";

function Person() {
  const btn = "search button";
  const name = "peter";
  const lastName = "doe";
  return (
    <section>
      <button>{btnText}</button>
      {/* <h2>{name + " " + lastName}</h2> */}
      <h2>{`${name} ${lastName}`}</h2>
      <p>info</p>
      <p>{12 + 35}</p>
      {/* <p>{let x = 6}</p> */}
    </section>
  );
}

ReactDom.render(<Person />, document.getElementById("root"));
