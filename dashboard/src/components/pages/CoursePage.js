import React, { Component } from 'react';
import { Redirect } from 'react-router';

class CoursePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        console.log(this.props.course.course.title);
        // this.course = this.props.course;

        // this.type = this.props.route.type;
        // this.dateObj = new Date(this.course.start_time);
        // this.month = this.dateObj.getUTCMonth() + 1;
        // this.day = this.dateObj.getUTCDate();
        // this.year = this.dateObj.getUTCFullYear();
        // this.newdate = this.year + "/" + this.month + "/" + this.day;
    }
    
    render() {
        var tags=[];
        for(var i=0;i<this.props.course.course.tags.length;i++){
        tags.push(<span>{this.props.course.course.tags[i]} &nbsp;</span>);
        }
        if(this.course == '')
            return (<></>);
            var dateObj = new Date(this.props.course.course.start_time);
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var newdate = year + "/" + month + "/" + day;
        
    return(
        
        <div class="card card-cascade wider reverse">
                {this.type}
            <div class="view view-cascade overlay">
                <img class="card-img-top" src={process.env.PUBLIC_URL + "images/" +  this.props.course.course.image_url} alt="Card image cap"/>
                <a href="#">
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body card-body-cascade text-center">

                
                <h4 class="card-title"><strong>{this.props.course.course.title}</strong></h4>
                <h6 class="card-title"><strong>By: {this.props.course.course.creator}</strong></h6>
                
                <h6 class="font-weight-bold indigo-text py-2">{tags}</h6>
                
                <p class="card-text">{this.props.course.course.description}</p>
                <p class="card-text">Scheduled On:  {newdate}</p>
                <p class="card-text">Duration:  {this.props.course.course.duration} hours

                </p>

                
                <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
                
                <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
                
                <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

            </div>

        </div>
    );
  }
    
}

export default CoursePage;
