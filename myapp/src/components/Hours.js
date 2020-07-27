import React from 'react';
import { Card, Button, CardTitle, CardImg,  CardText, Row, Col } from 'reactstrap';
import img1 from '../location.png'
import img2 from '../Hours.jpg'


const Hours = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Location</CardTitle>
          <br></br>
          <CardImg top width="100%" src={img1} alt="Card image cap" />
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Hours</CardTitle>
          <CardImg top width="100%" src={img2} alt="Card image cap" />
        </Card>
      </Col>
    </Row>
      );
    };
    
    export default Hours;