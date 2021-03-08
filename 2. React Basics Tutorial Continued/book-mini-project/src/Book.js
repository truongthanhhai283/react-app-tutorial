import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // }
  handleClick = () => {
    console.log("you clicked me");
    console.log(this.state.count);
  };

  render() {
    // console.log(this.props);

    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleClick}>
            add count
          </button>
        </div>
      </article>
    );
  }
}
