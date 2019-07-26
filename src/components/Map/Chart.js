import React from 'react'
import PopulationChart from './charts/PopulationChart'
import CriminalChart from './charts/CrimialChart'
import JobChart from './charts/JobChart'
import HospitalChart from './charts/HospitalChart'
import { Nav } from 'react-bootstrap'

export default class visPage extends React.Component {
    state = {
        chartType: 'hospital',
        criminalShow: false,
        hospitalShow: false,
        jobShow: true
    }

    handleSelect(eventKey) {
        console.log(`${eventKey}`);
    }

        
        render() {
        const currentLga = this.props.lga
        let chart = null

      
        if(this.state.criminalShow){
            chart = chart = <CriminalChart lga={currentLga} />
        }
        if(this.state.hospitalShow){
            chart = chart = <HospitalChart lga={currentLga} />
        }
        if(this.state.jobShow){
            chart = chart = <JobChart lga={currentLga} />
        }
            let lgaNameInChart = <h3>Please click an area in the map</h3>
        if (this.props.lgaName !== null){
            lgaNameInChart = <h3>{this.props.lgaName}</h3>
        }






            return (
                <div className='charts'>
                    {lgaNameInChart}
                    <Nav variant="pills" defaultActiveKey="3" onSelect={k => this.handleSelect(k)}>

                        <Nav.Item>
                            <Nav.Link eventKey="1" onClick={() => this.setState({
                        criminalShow: true,
                        hospitalShow: false,
                        jobShow: false
                    }
                    )} title="Item">
                            Crime rate
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" onClick={() => this.setState({
                        criminalShow: false,
                        hospitalShow: true,
                        jobShow: false

                    }
                    )} title="Item">
                            Hospitals
                            </Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" onClick={() => this.setState({
                        criminalShow: false,
                        hospitalShow: false,
                        jobShow: true
                    }
                    )} title="Item">
                                Popular jobs
                                </Nav.Link>
                        </Nav.Item>

                    </Nav>

                    {chart}

                </div>
            )
        }

    }