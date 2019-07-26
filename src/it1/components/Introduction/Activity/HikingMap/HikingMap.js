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
            Cycling Trail Map
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <HikingMapContents
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqNU6Z5NzAq0fE5eoi-Rd5Fa6gATIlLpc&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
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