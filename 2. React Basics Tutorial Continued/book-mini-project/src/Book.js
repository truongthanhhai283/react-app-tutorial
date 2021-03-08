import React, { Component } from "react";
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
      showInfo: true
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, title, author } = this.props.info;

    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vel?
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* ternary operator */}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              suscipit.
            </p>
          ) : null} */}
          {/* and  */}
          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolor recusandae aliquid iure excepturi facere fugiat
              similique omnis quisquam blanditiis.
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
