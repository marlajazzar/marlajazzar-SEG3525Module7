
import img1 from '../staff1.jpg'
import img2 from '../staff2.jpg'
import img3 from '../staff3.jpg'
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';




const Instructors = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Jennifer Lopez</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Selena Gomez</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Kendall Jenner</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Instructors;