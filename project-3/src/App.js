import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
