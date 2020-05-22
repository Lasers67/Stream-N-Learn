import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import './App.css';
import Mainpage from '../components/mainpage';
import List from '../components/List';

class App extends Component {
  render() {
    const App = () => (
      <div class="switcher">
        <Switch>
          <Route exact path='/' component={Mainpage}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
