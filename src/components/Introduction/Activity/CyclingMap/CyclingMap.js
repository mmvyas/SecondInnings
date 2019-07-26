import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import CyclingMapContents from './CyclingMapContents'
//import CyclingMapContainer from './cyclingMapContainer';

class CyclingMap extends Component {

    render(){
      let pStyle = {
        color:'#49a942',
        textAlign:'center'
      }
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p style={pStyle}>Cycling Trails in Regional Victoria</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CyclingMapContents

        />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

      
    


  )
    }
}

export default CyclingMap 