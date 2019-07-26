import React from 'react'
import './vis.css'
import Map from './map'
import Map2 from './map2'
import { Dropdown, Button } from 'react-bootstrap'
import { Jumbotron } from 'reactstrap';



export default class visPage extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.location.state)
        let displayArea = null
        let origin = null
        if (typeof this.props.location.state === 'undefined') {
            console.log("from homepage")
            displayArea = null
        }
        else {
            console.log("from recommendation")
            displayArea = this.props.location.state
            origin = "recommendation"

        }
        console.log()


        this.state = {
            colorVisType: 'population',
            displayArea: displayArea,
            origin: origin,
            clickedArea: null
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
      }




    render() {

        let h5Style = {
            color: '#49a942',
            fontWeight: 'bold',
            paddingTop: '10px',
            background:'white',
            paddingLeft: '40px'
        }

        let h3Style = {
            color: '#4c4c4c',
            fontWeight: 'bold',
            paddingTop: '40px',
            background:'white',
            paddingLeft: '40px',
            fontSize: '28px'
        }
        
        let map = null
        let dropDown = null
        let explanation = <h5 style = {h5Style}>Click on the map to select and explore that region</h5>
        if (this.state.origin === "recommendation") {
            dropDown = (<Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Top 5 regions
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({ clickedArea: this.state.displayArea.topFiveAreas[0] })}>1. {this.state.displayArea.topFiveAreas[0].name}</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({ clickedArea: this.state.displayArea.topFiveAreas[1] })}>2. {this.state.displayArea.topFiveAreas[1].name}</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({ clickedArea: this.state.displayArea.topFiveAreas[2] })}>3. {this.state.displayArea.topFiveAreas[2].name}</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({ clickedArea: this.state.displayArea.topFiveAreas[3] })}>4. {this.state.displayArea.topFiveAreas[3].name}</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({ clickedArea: this.state.displayArea.topFiveAreas[4] })}>5. {this.state.displayArea.topFiveAreas[4].name}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>)

            explanation = <h5>Click the highlighted area to see the demographic, criminal, hospital and job industry information</h5>

        }

        if (this.state.colorVisType === 'population') { map = <Map chooseArea={this.state.clickedArea} lgas={this.state.displayArea} /> }
        if (this.state.colorVisType === 'criminal') { map = <Map2 chooseArea={this.state.clickedArea} lgas={this.state.displayArea} /> }


        return (
        <div>
        
      <Jumbotron className="map-jumbo">
      <h1>Map Exploration in regional Victoria</h1>
      </Jumbotron>
                <div className='vis'>
                
                <h3 style={h3Style}>Once you select a region on the Map, you can see various details like:</h3>
                <div className = 'mapContent'>
                <ul >
                <li><strong>Criminal:</strong> Yearly rate of crimes in that region<br /></li>
                <li><strong>Hospital: </strong>Number of hospitals in the region as well as the list of hospitals<br/></li>
                <li><strong>Jobs:</strong> Popular jobs in different sectors among yours.</li>
                </ul> <br/></div>
                {explanation}               
                {map}
        </div>
        </div>
            )
        }
    
}