import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import './index.css';
import { Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          {/* <Routes/> */}
          <TopNavigation />
          {/* <Routes> */}
            <SideNavigation />
          {/* </Routes> */}
          <main id="content" className="p-5">
            <CourseCard/>
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
