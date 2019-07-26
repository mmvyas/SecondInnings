import React from 'react'
import Samplecard from './SamplecardCatogried'
import './SearchResult.css'
import JobChart from './JobChart'
import { Jumbotron } from 'reactstrap';


export default class SearchResult extends React.Component {
    constructor(props) {
        super(props)
        let displayArea = this.props.location.state
        console.log(displayArea)
        this.state = {
            displayArea: null,
            lgaId: displayArea.id,
            getResult: false
            
        }
        console.log(this.state.lgaId)
        const lgaid = this.state.lgaId
        let jsonResponse = null
        let url = 'https://scin-model-dev.appspot.com/searchreg?lgaid=' + lgaid
        console.log(url)
          var res = encodeURI(url);
          var x = new XMLHttpRequest();
          x.open('GET', res);
          x.onload = x.onerror = function() {
          var data=x.responseText;
          jsonResponse = JSON.parse(data);
          this.setState({
            displayArea: jsonResponse,
            getResult: true
          })
          }.bind(this)
          x.send();

    }

    render(){
        console.log(this.state.displayArea);
        return(
            <div className='displayResult'>
                {this.state.getResult? (
                    <div className='displayResult'>
                <Jumbotron className="search-jumbo">
                <div className="SearchJumboContent">
                    <h1>Already have a favourite regional area? </h1>
                      <p></p>      
                    <h3>See all its living factors here</h3>
                </div>
        
            </Jumbotron>
            <div className = "sContent">
                <h1></h1>
                
                <div class="my-legend">
                    <div class="legend-title">Legend to understand the level of living factors</div>
                    <div class="legend-scale">
                        <ul class="legend-labels">
                            <li><span style={{ background: '#49a942' }}></span>High</li>
                            <li><span style={{ background: '#ec7800' }}></span>Average</li>
                            <li><span style={{ background: '#bd0018' }}></span>Low</li>
                        </ul>
                    </div>
                    <div class="legend-source">Source: <a>Based on our research</a></div>
                </div>
                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea[0].name}</h2>

                    </span>
                        <Samplecard
                            id={this.state.displayArea[0].id}
                            name={this.state.displayArea[0].name}
                            jobExist={false}
                            cultureExist={false}
                            housePrice={this.state.displayArea[0].house.price}
                            rentPrice={this.state.displayArea[0].house.rent}
                            distance={this.state.displayArea[0].dist}
                            hospitalNumber={this.state.displayArea[0].num_of_hospitals}
                            criminal={this.state.displayArea[0].crime_rate}
                        /> 
                        
                        
                </div>
                </div>
                <h5>Top five job industries in this region</h5>
                <JobChart lga={this.state.displayArea[0].id} /></div>
                ):null}
               
            </div>
        )
    }
}