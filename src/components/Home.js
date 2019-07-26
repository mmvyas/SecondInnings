import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './Home.css';
import Aux from '../hoc/Auxiliary'
import Cards from '../components/Homepage/cards'
import SuggestionStepper from '../components/Homepage/Stepper/Stepper'
import SearchLga from '../components/Homepage/Search/Search'
// import Button from 'react-bootstrap'

export default class Home extends Component {
  state = {
    compareOrSearch: '',
    showCompareOrSearch: false,
  }

  showCompare = () => {
    this.setState({
      compareOrSearch: 'compare',
      showCompareOrSearch: true
    })
  }
  showSearch = () => {
    this.setState({
      compareOrSearch: 'search',
      showCompareOrSearch: true
    })
  }
  render() {
    let suggestionClose = () => this.setState({
      suggestionShow: false,
    });

    let compareOrSearch = null
    if(this.state.showCompareOrSearch && this.state.compareOrSearch ==="compare"){
      compareOrSearch =  <SuggestionStepper  />
    }
    else if(this.state.showCompareOrSearch && this.state.compareOrSearch ==="search"){
      compareOrSearch =  <SearchLga />
    }




    

    return (
      <div className = 'homePage'>

        <Jumbotron >
          <div className="content">
            <h1>Regional Victoria, a great place to live,<br/> work and start a new home </h1>

            <h2>International Graduates start your journey here...</h2>
            

            <h3>Learn about the perks of living in countryside, you’ll be surprised.</h3>
            <br />
            <h3 style={{marginBottom:'40px'}}>Find out which region best matches your needs, or if you already <br/>have a preferred region, search the region and find more about the region</h3>
              <Button onClick = {this.showCompare} className="compareBtn">Find your Match</Button>
            
              <Button onClick = {this.showSearch}  className="searchBtn" >Search a Region</Button>
              {compareOrSearch}
            
            </div>
          
         
         
          
        </Jumbotron>


        <Container>
          <Cards></Cards>
        </Container>

      </div>

        
        
        
    )
  }
}
