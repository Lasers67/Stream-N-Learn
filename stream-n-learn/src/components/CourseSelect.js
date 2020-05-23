import React, { Component } from 'react';

class CourseSelect extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      courselist: []
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

  render() {
    const courseList = this.state.courselist;

    return (
      <div>
        {/* Check to see if any items are found*/}
        {courseList.length ? (
          <div>
            {/* Render the list of items */}
            {courseList.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default CourseSelect;
