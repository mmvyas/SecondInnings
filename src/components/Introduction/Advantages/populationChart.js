import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import TableauReport from 'tableau-react';

export default class HouseChart extends Component {

    render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Population
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* Put all things you want to display in modal in Modal.body */}
        <TableauReport
            url="https://public.tableau.com/views/VICRegionalPopulation/RegionPopulation"
            loading = {true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

      
    


  )
    }
}
