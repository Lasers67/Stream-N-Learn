import React, { Component } from 'react';
import { Redirect } from 'react-router';

class CoursePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        // this.course = this.props.course;
        console.log(this.props);
        // this.type = this.props.route.type;
        // this.dateObj = new Date(this.course.start_time);
        // this.month = this.dateObj.getUTCMonth() + 1;
        // this.day = this.dateObj.getUTCDate();
        // this.year = this.dateObj.getUTCFullYear();
        // this.newdate = this.year + "/" + this.month + "/" + this.day;
    }
    
    render() {
        if(this.course == '')
            return (<></>);
    return(
        
        <div class="card card-cascade wider reverse">
                {this.type}
            <div class="view view-cascade overlay">
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"/>
                <a href="#">
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body card-body-cascade text-center">

                
                <h4 class="card-title"><strong>My adventure</strong></h4>
                
                <h6 class="font-weight-bold indigo-text py-2">Photography</h6>
                
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                laborum ut beatae ullam suscipit veniam.
                </p>

                
                <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
                
                <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
                
                <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

            </div>

        </div>
    );
  }
    
}

export default CoursePage;
