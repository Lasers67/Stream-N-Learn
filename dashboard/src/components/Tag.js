import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap'
class Tag extends Component{
    constructor(props){
        super(props);
        this.state={
            follow_state:false,
            text:"Follow"
        };
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick() {    this.setState(state => ({      follow_state: !state.follow_state    }));
        if(!this.state.follow_state)
            this.setState({text:"Unfollow"});
        else{
            this.setState({text:"Follow"});
        }
    }

    render(){
        return(
            <Card style={{ width: '15rem' }}>
  <Card.Header as="h5">{this.props.name}</Card.Header>
  <Card.Img variant="top" src={this.props.thumbnail} />
  <Card.Footer className="text-muted">
      <Row>
          
          <Col><svg class="bi bi-collection-play-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm5.265-7.924A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
        </svg>{this.props.videos}</Col>
        <Col><Button size="sm" onClick={this.handleClick}>{this.state.text}</Button></Col>
      </Row>
      
      
  </Card.Footer>
</Card>
        );
    }
}

export default Tag;