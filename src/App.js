import React, { Component } from "react";
// import Conditional from "./Conditional";

// import Header from "./components/Header/Header.js";
// import MainContent from "./components/MainContent/MainContent.js";
// import Footer from "./components/Footer/Footer.js";

// import Joke from "./components/Joke/Joke";
// import jokesData from "./jokesData";

// function App() {
//   const jokesCompontents = jokesData.map((joke) => {
//     return (
//       <Joke
//         key={joke.id}
//         question={joke.question}
//         punchLine={joke.punchLine}
//       ></Joke>
//     );
//   });
//   return <div>{jokesCompontents}</div>;
// }

// Условный рендинг первая часть

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState(
//         {
//           isLoading: false,
//         }
//       );
//     }, 2000);
//   }

//   render(){
//     return (
//       <div>
//         {this.state.isLoading ? <h1>Loading...</h1> : <Conditional></Conditional>}
//       </div>
//     )
//   }
// }

// Условный рендеринг 2
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       unreadMessages: [
//         "Call your mom!",
//         "New Spam email available",
//         "Купи у нас апельсины...",
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.unreadMessages.length > 0 && (
//           <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//         )}
//       </div>
//     );
//   }
// }

// Задание по условному рендерингу

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1>Пользователь в системе</h1>
        ) : (
          <h1>Пользователь не авторизован</h1>
        )}
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Выйти" : "Войти"}</button>
      </div>
    );
  }
}

export default App;
