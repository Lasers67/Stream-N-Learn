import React, { Component } from 'react';
import './player.js'
import Stream from './player';
import MenuBar from './menubar'
import Dashboard from './dashboard';
import Chatbox from './chatbox';
class Mainpage extends Component {
    render() {
      return (
        <div className="Mainpage">
          <MenuBar></MenuBar>
          <Dashboard></Dashboard>
          <Chatbox></Chatbox>
        </div>
      );
    }
  }
  
  export default Mainpage;

  