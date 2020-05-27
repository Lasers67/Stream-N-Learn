import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import styles from './courseSelect.module.css'

class CourseSelect extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      courselist: [],
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getCourseList')
    .then(res => res.json())
    .then(list => this.setState({ courselist : list }))
  }

  toggleClassName  = () => {
    this.className = (this.className == `${styles.courseCol}`) ? `${styles.courseCol} border border-primary` : `${styles.courseCol}`;
  }
//border border-primary 
  getColList(courseList) {
    var rows = [];
    for (var i = 0; i < courseList.length; i+=3) {     
        rows.push(
          <Row key={i}>
            <Col className={`${styles.courseCol}`} onClick={this.addRemCourse}>{'#' + courseList[i]}</Col>
            <Col className={`${styles.courseCol}`}>{i+1 < courseList.length ? '#' + courseList[i+1] : ''}</Col>
            <Col className={`${styles.courseCol}`}>{i+2 < courseList.length ? '#' + courseList[i+2] : ''}</Col>
          </Row>
        );
    }

    
    return <>{rows}</>;
  }

  render() {
    const courseList = this.state.courselist;

    return (
      <>
        {/* Check to see if any items are found*/}
        {courseList.length ? (
          <Container fluid>
              {this.getColList(courseList)}
          </Container>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </>
    );
  }
}

export default CourseSelect;
