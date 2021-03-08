// stateless functional components
// class based components
// state, life cycle methods
// React Hooks
// Classes - Syntactical Sugar For Constructor Functions
// subclass of Component
// extends from Component Class
// inherits functionality
// Component class is used to transfer from basic E6 class.

import React, { Component } from "react";
import { name, age, person } from "./data";
import Banner from "./components/Header/Banner";

// const App = () => (
// <section>
//   <Banner />
//   <p>this is my content</p>
//   <p>{name}</p>
//   <p>{age}</p>
//   <p>{person.name}</p>
// </section>
// );

class App1 extends Component {
  render() {
    return (
      <section>
        <Banner />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
      </section>
    );
  }
}

export default App1;
