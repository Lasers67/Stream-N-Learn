import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './components/Routes'
import LiveStream from './components/LiveStream';

class App extends Component {  
  render() {
    return (
      <Router>
        <>
        <TopNavigation />
        <SideNavigation />
        <div className="flexible-content">
          
          <main id="content" className="p-5">
            <AppRoutes/>
            <LiveStream></LiveStream>
          </main>
          <Footer />
        </div>
        </>
      </Router>
    );
  }
}

export default App;
