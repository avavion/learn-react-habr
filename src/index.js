import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

import App from "./App";

// #1
// function App() {
//   return (
//     <div>
//       <h1>You are currently logged </h1>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(state) {
//     super(state);
//     this.state = {
//       isLogin: true,
//     };
//   }

//   render() {
//     let wordDisplay;
//     if (this.state.isLogin === true) {
//       wordDisplay = "in";
//     } else {
//       wordDisplay = "out";
//     }

//     return (
//       <div>
//         <h1>You are currently logged {wordDisplay}</h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <Greeting />
//     </div>
//   );
// }

// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}!</p>
//     </header>
//   );
// }

// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();

//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "aftrenoon";
//   } else {
//     timeOfDay = "night";
//   }

//   return <h1>Good {timeOfDay} to you!</h1>;
// }

// class App extends React.Component {
//   constructor(state) {
//     super(state);
//     this.state = {
//       answer: "yes",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

// // #2

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <h1>Welcome, {this.props.username}!</h1>
//       </header>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();

//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "aftrenoon";
//     } else {
//       timeOfDay = "night";
//     }

//     return (
//         <h1>Good {timeOfDay} to you!</h1>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
