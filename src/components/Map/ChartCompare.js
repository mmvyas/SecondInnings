import React from 'react'
import PopulationChart from './charts/PopulationChart'
import CriminalChart from './charts/CrimialChart'
import JobChart from './charts/JobChart'
import HospitalChart from './charts/HospitalChart'
import { Nav, Button } from 'react-bootstrap'

export default class visPage extends React.Component {
    state = {
        chartType: 'hospital',
        populationShow: true,
        criminalShow: false,
        hospitalShow: false,
        jobShow: false
    }

    handleSelect(eventKey) {
        console.log(`${eventKey}`);
    }


        render() {

            const currentLga = this.props.lga
            let chart = null
            if (this.state.populationShow) {
                chart = <PopulationChart lga={currentLga} />
               
            }
            if (this.state.criminalShow) {
                chart = chart = <CriminalChart lga={currentLga} />
               
            }
            if (this.state.hospitalShow) {
                chart = chart = <HospitalChart lga={currentLga} />
               
            }
            if (this.state.jobShow) {
                chart = chart = <JobChart lga={currentLga} />
                
            }
            let lgaNameInChart = <h3>Please click an area in the map</h3>
            if (this.props.lgaName !== null) {
                lgaNameInChart = <h3>{this.props.lgaName}</h3>
            }






            return (
                <div className='charts'>
                    {lgaNameInChart}
                    <Nav variant="pills" defaultActiveKey="1" onSelect={k => this.handleSelect(k)}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" onClick={() => this.setState({
                        populationShow: true,
                        criminalShow: false,
                        hospitalShow: false,
                        jobShow: false
                    }
                    )} title="Item">
                            Demographic
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" onClick={() => this.setState({
                        populationShow: false,
                        criminalShow: true,
                        hospitalShow: false,
                        jobShow: false
                    }
                    )} title="Item">
                            Criminal
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" onClick={() => this.setState({
                        populationShow: false,
                        criminalShow: false,
                        hospitalShow: true,
                        jobShow: false

                    }
                    )} title="Item">
                            Hospital
                            </Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4" onClick={() => this.setState({
                        populationShow: false,
                        criminalShow: false,
                        hospitalShow: false,
                        jobShow: true
                    }
                    )} title="Item">
                                Job
                                </Nav.Link>
                        </Nav.Item>

                    </Nav>

                    {chart}

                </div>
            )
        }

    }