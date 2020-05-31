import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class CoursePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [],
            showEnrol : true,
            modal: false
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
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    render() {
        var tags=[];
        for(var i=0;i<this.props.course.course.tags.length;i++){
            tags.push(<span>{this.props.course.course.tags[i]} &nbsp;</span>);
        }
        let enrolButton;
        let liveBtn="Asd";
        if(this.state.showEnrol == true && this.props.course.course.creator != "lakshya" && this.props.course.course.students.indexOf("lakshya") == -1) {
            enrolButton = <a class="btn btn-unique" onClick={() => this.setState({showEnrol:false})}>Enroll</a>;
        } else {
            enrolButton ='';
        }

        if(this.props.course.course.creator == "lakshya") {
            liveBtn = <>
            <a href="/streamlive" class="btn btn-primary">Go Live</a>
            <MDBBtn onClick={this.toggle}>Upload Playlist</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                (...)
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            </>
        }
        if(this.course == '')
            return (<></>);
    return(
        
        <div class="card card-cascade wider reverse">
            {this.type}
            <div class="view view-cascade overlay">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"/>
                <a href="#">
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body card-body-cascade text-center">

                
                <h4 class="card-title"><strong>{this.props.course.course.title}</strong></h4>
                
                <p class="font-weight-bold" >Tags : {tags}</p>
                
                <p class="card-text">{this.props.course.course.description}
                </p>
                {enrolButton}
                {liveBtn}
            </div>
            
        </div>
    );
  }
    
}

export default CoursePage;
