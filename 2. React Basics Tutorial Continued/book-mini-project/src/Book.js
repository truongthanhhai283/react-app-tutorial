import React, { Component } from "react";
// STATE IMMUTABLE !!!!!
// shallow merge
// this.setState({})
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john"
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowerCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <h3>count : {this.state.count}</h3>
          <h3>name : {this.state.name}</h3>
          <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button>
        </div>
      </article>
    );
  }
}
