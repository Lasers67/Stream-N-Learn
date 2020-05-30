import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {Route, BrowserRouter as Router} from 'react-router-dom';

class CourseFeedCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.course = this.props.course;
        this.dateObj = new Date(this.course.start_time);
        this.month = this.dateObj.getUTCMonth() + 1;
        this.day = this.dateObj.getUTCDate();
        this.year = this.dateObj.getUTCFullYear();
        this.newdate = this.year + "/" + this.month + "/" + this.day;
    }    

    handleOnClick = () => {
        this.setState({redirect: true});
    }
    
    render() {
    if(this.course == '')
        return (<></>);
    return (
        <div class="card card-cascade" onClick={this.handleOnClick}>
            <div class="view view-cascade overlay">
                <img class="card-img-top" src={process.env.PUBLIC_URL + "images/" +  this.course.image_url} alt="Card image cap" />
                <a>
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <div class="card-body card-body-cascade text-center">
                
                <h4 class="card-title"><strong>{this.course.title}</strong></h4>
                
                <h6 class="font-weight-bold indigo-text py-2">{this.course.creator}</h6>
                
                <p class="card-text">{this.course.description}</p>
                <p>Tags : {this.course.tags.length ? (
                    this.course.tags.map((item) => {
                        return(
                            <>{item}&nbsp;</>
                        );
                    })
                    ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                    )
                }</p>
                <a class="btn btn-unique">Enroll</a>

            </div>

            
            <div class="card-footer text-center">
                <ul class="list-unstyled list-inline font-small">
                    <li class="list-inline-item pr-3"><i class="far fa-clock pr-1"></i>{this.newdate}</li>
                    <li class="list-inline-item pr-3"><a href="#"><i class="far fa-comments pr-1"></i>{this.course.comments}</a></li>
                    <li class="list-inline-item pr-3"><a href="#"><i class="far fa-user pr-1"></i>{this.course.students.length}</a></li>
                </ul>
            </div>

        </div>
  )
}
}

export default CourseFeedCard;

