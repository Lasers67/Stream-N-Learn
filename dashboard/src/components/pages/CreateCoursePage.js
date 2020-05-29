import React, { Component } from 'react';
import CourseFeedCard from './sections/CourseFeedCard';

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
    <form class="text-center border border-light p-5" action="#!">

        <p class="h4 mb-4">Create a course</p>

        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name"/>

        <div class="form-group">
            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"></textarea>
        </div>

        <div class="file-field">
    {/* <div class="btn btn-outline-info waves-effect btn-sm float-left"> */}
      {/* <span>Choose files</span> */}
      <input type="file" multiple/>
    {/* </div> */}
    {/* <div class="file-path-wrapper"> */}
      {/* <input class="file-path validate" type="text" placeholder="Upload one or more files"/> */}
    {/* </div> */}
  </div>

        {/* </div> */}

        {/* <div class="custom-control custom-checkbox mb-4">
            <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy"/>
            <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
        </div> */}

        <button class="btn btn-info btn-block" type="submit">Next:Monetization</button>

    </form>
    );
  }
    
}

export default CreateCoursePage;
