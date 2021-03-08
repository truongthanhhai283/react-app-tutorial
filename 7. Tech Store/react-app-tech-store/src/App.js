import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

// import {BsFillChatSquareDotsFill} from 'react-icons/fa';
import { BsFillChatSquareDotsFill } from "react-icons/bs";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          hello from tech store
          <BsFillChatSquareDotsFill />
        </h1>
        <Button large>Hello World</Button><br></br>
        <Button>Hello World</Button>
      </div>
    );
  }
}

const color = "#999";
const Button = styled.button`
  color: ${color};
  background-color: black;
  /* font-size:2em; */
  font-size: ${(props) => (props.large ? "3rem" : "1rem")};
`;

export default App;
