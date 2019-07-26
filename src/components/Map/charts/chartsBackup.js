import React from 'react'
import PopulationChart from './charts/PopulationChart'
import CriminalChart from './charts/CrimialChart'
import JobChart from './charts/JobChart'
import HospitalChart from './charts/HospitalChart'
import { Button, ButtonGroup } from 'react-bootstrap'

export default class visPage extends React.Component {
    state = {
        chartType: 'population',
        populationShow: true,
        criminalShow: false,
        hospitalShow: false,
        jobShow: false
    }

   

    render() {

        const charttype = this.state.chartType
        const currentLga = this.props.lga
        let chart = null
        let style = {
            display:"none"
        }


        

        return (
            <div className='charts'>
                <h3>{this.props.lgaName}</h3>
                <ButtonGroup aria-label="Basic example" style={style}>
                        <Button variant="secondary" onClick={() => this.setState({
                            populationShow: true,
                            criminalShow: false,
                            hospitalShow: false,
                            jobShow: false
                        }
                        )}>Demographic</Button>
                        <Button variant="secondary" onClick={() => this.setState({
                             populationShow: false,
                             criminalShow: true,
                             hospitalShow: false,
                             jobShow: false
                        }
                        )}>Criminal</Button>
                        <Button variant="secondary" onClick={() => this.setState({
                             populationShow: false,
                             criminalShow: false,
                             hospitalShow: true,
                             jobShow: false
                 
                        }
                        )}>Hospital</Button>
                        <Button variant="secondary" onClick={() => this.setState({
                            populationShow: false,
                            criminalShow: false,
                            hospitalShow: false,
                            jobShow: true
                        }
                        )}>Job</Button>
                </ButtonGroup>
                
                <HospitalChart  lga={currentLga} />
        
        </div>
        )
            }
        
}