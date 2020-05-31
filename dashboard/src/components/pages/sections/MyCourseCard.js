import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const MyCourseCard = ({course}) => {
    var dateObj = new Date(course.start_time);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = year + "/" + month + "/" + day;

    if(course == '')
        return (<></>);
  return (
        <div class="card card-cascade">
            <div class="view view-cascade overlay">
                <img class="card-img-top" src={process.env.PUBLIC_URL + "images/" +  course.image_url} alt="Card image cap" />
                <a>
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <div class="card-body card-body-cascade text-center">
                
                <h4 class="card-title"><strong>{course.title}</strong></h4>
                
                <h6 class="font-weight-bold indigo-text py-2">{course.creator}</h6>
                
                <p class="card-text">{course.description}
                </p>

            </div>

            
            <div class="card-footer text-center">
                <ul class="list-unstyled list-inline font-small">
                    <li class="list-inline-item pr-3"><i class="far fa-clock pr-1"></i>{newdate}</li>
                    <li class="list-inline-item pr-3"><a href="#"><i class="far fa-comments pr-1"></i>0</a></li>
                    <li class="list-inline-item pr-3"><a href="#"><i class="far fa-user pr-1"></i>{course.students.length}</a></li>
                </ul>
            </div>

        </div>
  )
}

export default MyCourseCard;

