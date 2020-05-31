import React, { Component } from 'react';

class CreateCoursePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return(
    <form class="text-center border border-light p-5" action="/mycourses">

        <p class="h4 mb-4">Create a course</p>

        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name"/>

        <div class="form-group">
            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"></textarea>
        </div>
        <input type="text" style={{width: 300}} id="defaultContactFormName" class="form-control mb-1" placeholder="Duration (in hours)"/>
        <input type="text"  style={{width: 300}} id="defaultContactFormName" class="form-control mb-2" placeholder="Start Date"/>
        <input type="text"  style={{width: 300}} id="defaultContactFormName" class="form-control mb-2" placeholder="Start Time"/>
        <input type="text"  style={{width: 300}} id="defaultContactFormName" class="form-control mb-2" placeholder="Price"/>
        <div class="custom-control custom-radio custom-control-inline">
          <label style={{"margin-right":"30px"}}>Make Course Live or upload as a playlist:</label>
          <input type="radio" class="custom-control-input" id="defaultInline1" name="createCourse" />
          <label class="custom-control-label" for="defaultInline1">Live Sessions</label>
        </div>

        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" class="custom-control-input" id="defaultInline2" name="createCourse" />
          <label class="custom-control-label" for="defaultInline2">Uploaded Sessions</label>
        </div>

        <div class="file-field">
    {/* <div class="btn btn-outline-info waves-effect btn-sm float-left"> */}
      {/* <span>Choose files</span> */}
      <span>Upload a poster for your course: </span><input type="file" multiple/><br></br><br></br>
      <span>Upload a cover for your course: </span><input type="file" multiple/>
    {/* </div> */}
    {/* <div class="file-path-wrapper"> */}
      {/* <input class="file-path validate" type="text" placeholder="Upload one or more files"/> */}
    {/* </div> */}
  </div>

        {/* </div> */}
<br></br>
        {/* <div class="custom-control custom-checkbox mb-4">
            <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy"/>
            <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
        </div> */}

        <button class="btn btn-info btn-block" type="submit">Done</button>

    </form>
    );
  }
    
}

export default CreateCoursePage;