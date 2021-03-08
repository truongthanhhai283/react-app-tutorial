import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

//PROPS (PROPERTIES) = ARGUMENTS TO COMPONENTS

// Paramaters and Arguments
// function sayName(name) {
//   console.log(name);
// }
// sayName("john");

function People() {
  return (
    <section>
      <Person name="john doe" job="developer" />
      <Person name="bob doe" job="designer" />
      <Person name="susy doe" job="artist" age="22" />
    </section>
  );
}

const Person = props => {
  console.log(props);

  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>{props.age}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
