import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is my first React app</h1>
        </header>
        <div className="App-intro">
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;
