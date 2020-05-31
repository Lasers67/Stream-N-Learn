import React, { Component } from 'react';

class CreateCoursePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
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
    .then(list => this.setState({ list }))
  }

  render() {
    return(
    <form class="text-center bg-white border border-light p-5" action="/createcourse/done">

        <p class="h4 mb-4">Create a course</p>

        Success!


        
        {/* <button class="btn btn-info btn-block" type="submit">Create</button> */}

    </form>
    );
  }
    
}

export default CreateCoursePage;
