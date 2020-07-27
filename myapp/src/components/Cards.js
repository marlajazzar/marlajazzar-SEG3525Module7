
import img1 from '../kandle1.png'
import img2 from '../kandle2.png'
import img3 from '../kandle3.png'
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';




const Example = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;