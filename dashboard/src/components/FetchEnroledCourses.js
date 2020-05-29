import React, { Component } from 'react';
import CourseEnrolCard from './pages/sections/CourseEnrolCard';

class FetchEnroledCourses extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getAllEnroledPosts')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;
    var rows = [];
    for (var i = 0; i < list.length; i+=3) {     
      rows.push(
        <div className="row" key={i}>
          <div className="col-lg-4 col-md-12 mb-4"><CourseEnrolCard course={list[i]} /></div>
          <div className="col-lg-4 col-md-12 mb-4"><CourseEnrolCard course={i+1 < list.length ? list[i+1] : ''} /></div>
          <div className="col-lg-4 col-md-12 mb-4"><CourseEnrolCard course={i+2 < list.length ? list[i+2] : ''} /></div>
        </div>
      );
    }
    return(
    <>
      {rows}      
    </>
    )
  }
    
}

export default FetchEnroledCourses;
