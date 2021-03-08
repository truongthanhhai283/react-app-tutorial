// named and default import/exports
//only one default export module
//think of module as file

import React from "react";
import { name, age, person } from "./data";
import Banner from "./components/Header/Banner";

const App = () => (
  <section>
    <Banner />
    <p>this is my content</p>
    <p>{name}</p>
    <p>{age}</p>
    <p>{person.name}</p>
  </section>
);

// import * as data from "./data";
// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );

export default App;
