import React, { Component } from 'react';
import { Alert,Container,Row,Col,Button } from 'react-bootstrap';
import './chatbox.css';
class Chatbox extends Component {
    render() {
      return (
        <Container>
            <Row xs="1">
            <Col>
            <Alert variant="outline-dark" className="pull-right" style={{border: '1px solid grey'}}>
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                <hr />
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={9}>
                        <input type="text" className="text-line" />
                    </Col>
                    <Col sm={2}>
                        <Button variant="outline-secondary">Send</Button>
                    </Col>
                    

                </Row>
                
            </Alert>
            </Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Chatbox;