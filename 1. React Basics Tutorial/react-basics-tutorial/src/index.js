import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4>this is john and this is my first react compoenent</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
