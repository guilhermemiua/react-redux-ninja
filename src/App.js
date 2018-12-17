import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play mario kart" }
    ]
  };
  render() {
    return <div className="App" />;
  }
}

export default App;
