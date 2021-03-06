import React, { Component } from 'react'

export class CourseCard extends Component {
    render() {
        return (

            <div class="card">


                <div class="view overlay">
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"/>
                    <a>
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>


                <a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i
                    class="fas fa-chevron-right pl-1"></i></a>


                <div class="card-body">

                
                    <h4 class="card-title">Card title</h4>
                    <hr/>
                    
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>

                </div>


                <div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
                <ul class="list-unstyled list-inline font-small">
                    <li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>05/10/2015</li>
                    <li class="list-inline-item pr-2"><a href="#" class="white-text"><i
                        class="far fa-comments pr-1"></i>12</a></li>
                    <li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
                        </i>21</a></li>
                    <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
                </ul>
                </div>

            </div>
        )
    }
}

export default CourseCard
