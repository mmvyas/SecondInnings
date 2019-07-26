import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import HikingMapContents from './HikingMapContents'
//import CyclingMapContainer from './cyclingMapContainer';

class HikingMap extends Component {

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
            <p style={{color:'#49a942'}}>Great Hiking spots in Regional Victoria</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <HikingMapContents
        
        />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

      
    


  )
    }
}

export default HikingMap 