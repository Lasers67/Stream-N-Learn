import React, { Component } from 'react';
import CourseEnrolCard from './pages/sections/CourseEnrolCard';
import CoursePage from './pages/CoursePage'
import { Link } from 'react-router-dom';

class FetchEnroledCourses extends Component {

  constructor(props){
    super(props);
    this.state = {
      course_list: [],
      show:false,
      course_prop: "",
      course_image: ""
    }
    // this.bind=this.show_page.bind(this);
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getAllEnroledPosts')
    .then(res => res.json())
    .then(list => this.setState({ course_list:list }));
  }
   
  show_page(props){
    
    return(<CoursePage course={props}/>);
  }
  
  render() {
    // const { list } = this.state.course_list;
    var rows = [];
    
    for (var i = 0; i < this.state.course_list.length; i+=3) {     
      rows.push(
        <div className="row" key={i}>
          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[0],course_image:"programming_big.jpg"})}}><CourseEnrolCard course={this.state.course_list[i]} img="https://learnworthy.net/wp-content/uploads/2019/12/Why-programming-is-the-skill-you-have-to-learn-1280x720.jpg" /></div>
          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[1]})}}><CourseEnrolCard course={i+1 < this.state.course_list.length ? this.state.course_list[i+1] : ''} /></div>
          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[2]})}}><CourseEnrolCard course={i+2 < this.state.course_list.length ? this.state.course_list[i+2] : ''} /></div>

        </div>
      );
    }
    if(this.state.show==false)
    return(
    <>
      {rows}      
    </>
    )
    return(
      <this.show_page course={this.state.course_prop} image={this.state.course_image} />
    )
  }
    
}

export default FetchEnroledCourses;
