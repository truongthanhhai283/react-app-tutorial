import React from "react";
import ReactDom from "react-dom";

//ES6, Nested Components and React Tools

function Greeting() {
  return (
    <section>
      <Person />
      <Message />
    </section>
  );
}
const Person = () => <h2>john doe</h2>;
const Message = () => <p>this is my message</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
