import React, { Component } from "react";
import "./App.css";
//uncontrolled inputs

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;

    const email = this.email.value;

    const text = this.refs.myText;
    const textValue = text.textContent;
    text.style.color = "red";
    console.log(nameValue, email, textValue);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={orange => (this.email = orange)} />
          <button type="submit">submit</button>
        </form>
        <p ref="myText">hello world</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
