import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap';
import { Alert } from 'reactstrap';
import CourseModal from './CourseModal'



class Dashboard extends Component {
    constructor(props){
      super(props);
      this.state = {
        relCourseList: []
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
      .then(list => this.setState({ relCourseList: list }))
    }

    render() {
      const courseList = this.state.relCourseList;
      return (
        <>
            <CourseModal></CourseModal>
           
      {courseList.length ? (
            courseList.map((item) => {
              return(
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">{item.title}</h1>
              <p className="lead">{item.description}</p>
                  </Container>
                </Jumbotron>
              );
            })
          // </div>
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
  
  export default Dashboard;