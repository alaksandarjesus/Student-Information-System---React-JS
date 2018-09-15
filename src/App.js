import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
