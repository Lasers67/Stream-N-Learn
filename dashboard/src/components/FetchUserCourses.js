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
          <div className="col-lg-4 col-md-12 mb-4"><MyCourseCard course={list[i]} img="https://cnet3.cbsistatic.com/img/FXRw1Z9opH05BgW0NVHTnB7lP8Q=/2019/11/12/e66cc0f3-c6b8-4f6e-9561-e23e08413ce1/gettyimages-1002863304.jpg" /></div>
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
