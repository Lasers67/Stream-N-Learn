import React, { Component } from 'react';
import './player.js'
import Stream from './player.js';
import MenuBar from './menubar.js'
import Player from './player.js';
import Chatbox from './chatbox.js';
class Mainpage extends Component {
    render() {
      return (
        <div className="Mainpage">
          <MenuBar></MenuBar>
           <Player></Player>
          <Chatbox></Chatbox>
        </div>
      );
    }
  }
  
  export default Mainpage;

  