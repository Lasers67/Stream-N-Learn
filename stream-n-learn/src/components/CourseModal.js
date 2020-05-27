import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap'
import CourseSelect from './CourseSelect'

class CourseModal extends Component{
  
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

  handleClose = () => {
    this.setState({ show: false })
  }
  handleShow = () => {
    this.setState({ show: true })
  }

    render(){
        return (
            <div>
            <Button variant="primary" onClick={this.handleShow}>
                Get Course List
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><CourseSelect></CourseSelect></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default CourseModal;