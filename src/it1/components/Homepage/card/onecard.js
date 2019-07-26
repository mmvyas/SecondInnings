import React from 'react';
import './onecard.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const onecard = props => {

  return (

    <Card>
      <Card.Img variant="top" src={props.img} alt="Card image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
        <Link to={props.link}>
          <Button className = 'cardbutton' variant="primary">Learn More</Button>
        </Link>
  </Card>


      )
  
  }
  
export default onecard;