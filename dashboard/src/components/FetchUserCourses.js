import React, { Component } from 'react';
import MyCourseCard from './pages/sections/MyCourseCard';

class FetchUserCourses extends Component {

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
    fetch('/api/getMyPosts')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;
    var rows = [];
    for (var i = 0; i < list.length; i+=3) {     
      rows.push(
        <div className="row" key={i}>
          <div className="col-lg-4 col-md-12 mb-4"><MyCourseCard course={list[i]} /></div>
          <div className="col-lg-4 col-md-12 mb-4"><MyCourseCard course={i+1 < list.length ? list[i+1] : ''} /></div>
          <div className="col-lg-4 col-md-12 mb-4"><MyCourseCard course={i+2 < list.length ? list[i+2] : ''} /></div>
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

export default FetchUserCourses;
