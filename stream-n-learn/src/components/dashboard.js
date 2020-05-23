import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap';
import { Alert } from 'reactstrap';
import CourseModal from './CourseModal'

class Dashboard extends Component {
    render() {
      return (
        <div>
            <CourseModal></CourseModal>
           <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Dashboard</h1>
          {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </Container>
      </Jumbotron>
        </div>
      );
    }
  }
  
  export default Dashboard;