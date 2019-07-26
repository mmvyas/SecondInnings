import React from 'react'
import CriminalChart from '../Map/charts/CrimialChart'
import JobChart from '../Map/charts/JobChart'
import HospitalChart from '../Map/charts/HospitalChart'
import { Nav } from 'react-bootstrap'
import './Compare.css'

export default class visPage extends React.Component {
    constructor(props){
        super(props)
        if(this.props.chart === "hospital"){
            this.state = {
                criminalShow: false,
                hospitalShow: true,
                jobShow: false
            }
        }
        else if(this.props.chart === "criminal"){
            this.state = {
                criminalShow: true,
                hospitalShow: false,
                jobShow: false
            }
        }
        else if(this.props.chart === "job"){
            this.state = {
                criminalShow: false,
                hospitalShow: false,
                jobShow: true
            }
        }
    }
    
    

    handleSelect(eventKey) {
        console.log(`${eventKey}`);
    }


        render() {

           
            const currentLga = this.props.lga
            let chart = null

            if (this.state.criminalShow) {
                chart = <CriminalChart lga={currentLga} />
               
            }
            if (this.state.hospitalShow) {
                chart = <HospitalChart lga={currentLga} />
               
            }
            if (this.state.jobShow) {
                chart = <JobChart lga={currentLga} />
                
            }
            let lgaNameInChart = <h3>Please click an area in the map</h3>
            if (this.props.lgaName !== null) {
                lgaNameInChart = <h3>{this.props.lgaName}</h3>
            }

            let defaultKey = ""
            if(this.props.chart === "hospital"){
                defaultKey = "2"
            }
            else if(this.props.chart === "criminal"){
                defaultKey = "1"
            }
            else if(this.props.chart === "job"){
                defaultKey = "3"
            }

            return (
                <div className='charts'>
                    {lgaNameInChart}
                    {/* <Nav variant="pills" defaultActiveKey={defaultKey} onSelect={k => this.handleSelect(k)}>

                        <Nav.Item >
                            <Nav.Link eventKey="1" onClick={() => this.setState({
                        criminalShow: true,
                        hospitalShow: false,
                        jobShow: false
                        
                    }
                    )} title="Item">
                            Crime Rate
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" onClick={() => this.setState({
                        criminalShow: false,
                        hospitalShow: true,
                        jobShow: false

                    }
                    )} title="Item">
                            Hospital List
                            </Nav.Link>
                            
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="3" onClick={() => this.setState({
                        criminalShow: false,
                        hospitalShow: false,
                        jobShow: true
                    }
                    )} title="Item">
                                Popular Jobs
                                </Nav.Link>
                        </Nav.Item>

                    </Nav> */}

                    {chart}

                </div>
            )
        }


    }