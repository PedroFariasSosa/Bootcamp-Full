import React from "react";
import ReactDOM from "react-dom";

const Header = ({couser}) => {
  return(
    <h1>{couser}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <h2>{props.content + props.exercises}</h2>
    </div>
  )
}

const Total = (props) => {
  return(
    <h3>Number of exercises {props.total}</h3>
  )
}

const App = () => {
  const couser = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header couser={couser} />
      <Content content={part1} exercises={exercises1} />
      <Content content={part2} exercises={exercises2} />
      <Content content={part3} exercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
