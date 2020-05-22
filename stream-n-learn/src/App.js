import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import Mainpage from './components/mainpage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainpage></Mainpage>
      </div>
    );
  }
}

export default App;
