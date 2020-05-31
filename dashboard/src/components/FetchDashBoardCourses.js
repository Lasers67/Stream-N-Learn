import React, { Component } from 'react';
import CourseFeedCard from './pages/sections/CourseFeedCard';
import CoursePage from './pages/CoursePage';
class FetchDashBoardCourses extends Component {

  constructor(props){
    super(props);
    this.state = {
      course_list: [],
      show:false,
      course_prop: "",
      course_image: ""
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getAllPosts')
    .then(res => res.json())
    .then(list => this.setState({ course_list:list }));
  }
  show_page(props){
    
    return(<CoursePage course={props}/>);
  }
  render() {
    // const { list } = this.state.course_list;
    var rows1 = [];
    var rows2 = [];
    for (var i = 0; i < this.state.course_list.length; i+=3) {     
      rows1.push(
        <div className="row" key={i}>

          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[0],course_image:"guitar_big.jpg"})}}><CourseFeedCard course={this.state.course_list[i]} /></div>
          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[1],course_image:"cooking_big.jpg"})}}><CourseFeedCard course={i+1 < this.state.course_list.length ? this.state.course_list[i+1] : ''} /></div>

          <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[2],course_image:"chess_big.jpg"})}}><CourseFeedCard course={i+2 < this.state.course_list.length ? this.state.course_list[i+2] : ''} /></div>
        </div>
      );
    }
    // for (var i = 0; i < this.state.course_list.length; i+=3) {     
    //   rows1.push(
    //     <div className="row" key={i}>

    //       <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[0]})}}><CourseFeedCard course={this.state.course_list[i]} /></div>
    //       <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[1]})}}><CourseFeedCard course={i+1 < this.state.course_list.length ? this.state.course_list[i+1] : ''} /></div>

    //       <div className="col-lg-4 col-md-12 mb-4" onClick={()=>{this.setState({show:true,course_prop:this.state.course_list[2]})}}><CourseFeedCard course={i+2 < this.state.course_list.length ? this.state.course_list[i+2] : ''} /></div>
    //     </div>
    //   );
    // }
    if(this.state.show==false)
    return(
    <>

      {rows1}      
    </>
    )
    return(
      <this.show_page course={this.state.course_prop} image={this.state.course_image} />
    )
  }
    
}

export default FetchDashBoardCourses;
