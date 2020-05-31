import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import DragAndDrop from '../Dragndrop';
class CoursePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [],
            showEnrol : true,
            modal: false,
            files:[]
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
    handleDrop = (files) => {
        let fileList = this.state.files
        for (var i = 0; i < files.length; i++) {
          if (!files[i].name) return
          fileList.push(files[i].name)
        }
        this.setState({files: fileList})
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
        let liveBtn="";
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
                <MDBModalHeader toggle={this.toggle}>Upload Courses</MDBModalHeader>
                <MDBModalBody>
                    <DragAndDrop handleDrop={this.handleDrop}>
                        <div style={{height: 300, width: 250}}>
                        {this.state.files.map((file) =>
                            <div key={i}>{file}</div>
                        )}
                    </div>
                </DragAndDrop>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={this.toggle}>Save changes</MDBBtn>
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
