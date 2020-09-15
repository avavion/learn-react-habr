import React from "react";

function Joke(props) {
  return (
    <div className="joke">
      <h3>Question: {props.question}</h3>
      <h3>Answer: {props.punchLine}</h3>
      <button onClick={() => {console.log("I was clicked!");}}>Click me</button>
      <hr></hr>
    </div>
  );
}

export default Joke;
