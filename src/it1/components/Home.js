import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './Home.css';
import Aux from '../hoc/Auxiliary'
import Cards from '../components/Homepage/cards'

export default class Home extends Component {
  render() {
    return (
      <Aux>
        
        <Jumbotron >
         
          <h1>Do you want to Relocate to Regional Victoria ?</h1>
          <h3>Learn more about the Perks of living in Countryside, You’ll be surprised</h3>
          <h3> how much there is to see and do in regional Victoria.</h3>
          <h3>Lead your life Country Style !!</h3>
          <Link to="/introduction/visa">
            <Button className ="button-jittery">Learn More</Button>
          </Link>
          
          
          </Jumbotron>
          <Container>
          <Cards></Cards>          
          </Container>       
            
       </Aux>

        
        
        
    )
  }
}
