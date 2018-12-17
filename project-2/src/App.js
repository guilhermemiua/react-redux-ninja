import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Play some mario kart" }]
  };

  deleteTodo = id => {
    let todoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: todoList });
  };

  AddTodo = todo => {
    todo.id = Math.random();
    let todoList = [...this.state.todos, todo];
    this.setState({
      todos: todoList
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo AddTodo={this.AddTodo} />
      </div>
    );
  }
}

export default App;
