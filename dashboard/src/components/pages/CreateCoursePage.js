import React, { Component } from 'react';

class CreateCoursePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      cname: '',
      cdesc: '',
      cposter: '',
      clive: ''
    }
    this.handleCreateCourse = this.handleCreateCourse.bind(this)
  }

  handleCreateCourse(e) {
    e.preventDefault();
    const { cname, cdesc, cposter, clive } = this.state;
    console.log(cname + " " + cposter);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "title": cname, "description": cdesc, "cost": 100, "creator": "lakshya", "start_time": (new Date()).toJSON(), "duration":"", "image_url":""})
    };
    fetch('/api/createPost', requestOptions)
      .then(response => response.json())
      // .then(data => console.log(data.toString()));
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { cname, cdesc, cposter, clive } = this.state;
    return(
    <form class="text-center border border-light p-5" action="/mycourses">

        <p className="h4 mb-4">Create a course</p>

        <input value={cname} onChange={this.onChange} type="text" name="cname" id="defaultContactFormName" class="form-control mb-4" placeholder="Name"/>

        <div className="form-group">
            <textarea value={cdesc} onChange={this.onChange} class="form-control rounded-0" name="cdesc" id="exampleFormControlTextarea2" rows="3" placeholder="Description"></textarea>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <label style={{"marginRight":"30px"}}>Make Course Live or upload as a playlist:</label>
          <input value={clive} onChange={this.onChange} type="radio" class="custom-control-input" id="defaultInline1" name="clive" />
          <label class="custom-control-label" htmlFor="defaultInline1">Live Sessions</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input value={clive} onChange={this.onChange} type="radio" class="custom-control-input" id="defaultInline2" name="clive" />
          <label class="custom-control-label" htmlFor="defaultInline2">Uploaded Sessions</label>
        </div>

        <div class="file-field">
    {/* <div class="btn btn-outline-info waves-effect btn-sm float-left"> */}
      {/* <span>Choose files</span> */}
      <span>Upload a poster for your course: </span><input value={cposter} onChange={this.onChange} name="cposter" type="file" multiple/>
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

        <button class="btn btn-info btn-block" type="submit" onClick={this.handleCreateCourse}>Done</button>

    </form>
    );
  }
    
}

export default CreateCoursePage;
