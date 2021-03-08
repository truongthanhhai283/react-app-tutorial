import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

//DESTRUCTURING

function People() {
  const friends = [
    { name: "john", job: "developer", age: 23, company: "apple" },
    { name: "bob", job: "designer", age: 21, company: "facebook" },
    { name: "susy", job: "artist", age: 26, company: "google" }
  ];
  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const person = {
  name: "john",
  age: 26
};
const { name } = person;
// console.log(name);

const showPerson = ({ name, age }) => console.log(name, age);

// showPerson(person);

const Person = ({ person: { name, job, age, company } }) => {
  // const { name, job, age, company } = props.person;

  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
