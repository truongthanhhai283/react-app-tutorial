import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }
//three arguments element, propsObject, children
function Greeting() {
  return React.createElement("div", {});
}
ReactDom.render(<Greeting />, document.getElementById("root"));
