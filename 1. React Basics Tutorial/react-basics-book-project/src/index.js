import React from "react";
import ReactDom from "react-dom";

//ES6, Nested Components and React Tools

function Books() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
    alt="wonkey donkey"
  />
);
const Title = () => <h1>The Wonkey Donkey</h1>;
const Author = () => <p>by Craig Smith</p>;

ReactDom.render(<Books />, document.getElementById("root"));
