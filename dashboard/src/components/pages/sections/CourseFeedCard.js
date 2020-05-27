import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const CourseFeedCard = ({course}) => {
    if(course == '')
        return (<></>);
  return (
        <div class="card card-cascade">
            <div class="view view-cascade overlay">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
                <a>
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <div class="card-body card-body-cascade text-center">
                
                <h4 class="card-title"><strong>{course.title}</strong></h4>
                
                <h6 class="font-weight-bold indigo-text py-2">{course.instructor}</h6>
                
                <p class="card-text">{course.description}
                </p>
                
                <a class="btn btn-unique">Enroll</a>

            </div>

            
            <div class="card-footer text-muted text-center">
                <ul class="list-unstyled list-inline font-small">
                    <li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>{course.start}-{course.end}</li>
                    <li class="list-inline-item pr-2"><a href="#" class="white-text"><i
                            class="far fa-comments pr-1"></i>{course.comments}</a></li>
                </ul>
            </div>

        </div>
  )
}

export default CourseFeedCard;

