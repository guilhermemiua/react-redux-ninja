import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Post from "./components/Post/Post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
