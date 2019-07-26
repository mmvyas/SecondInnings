import React from 'react'
import Map from './MapCompare'
import Chart from './ChartCompare'
import {Modal} from 'react-bootstrap'
import './MapChart.css'

export default class MapChart extends React.Component{
    render(){

        return(
            <Modal
          show={this.props.show}
          onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" style={{color:'#4c4c4c'}}>
              See Criminal Rate, List of Hospitals and Popular Jobs In This Region
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className = "mapComparechart">
            {/* <Map /> */}
          <Chart chart ={this.props.chart} lga={this.props.id}/>
          </div>
          </Modal.Body>
          
        </Modal>
        )
    }

}