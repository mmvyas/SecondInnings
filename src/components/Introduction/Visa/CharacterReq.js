import React, { Component } from 'react';
import './List.css';
import { Button, Modal } from 'react-bootstrap';

export default class CharacterReq extends Component {

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
          Character Requirements:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class = "charText">
                <p>You must be of good character to visit or live in Australia. This means you must pass the character test, and remain of good character. You may not pass the character requirements in some circumstances. These include if:  </p>
                <li>You have any kind of criminal record</li> 
                <li>You have been convicted of escaping from immigration detention, or convicted for an offence that you committed:
                    <li>while you were in immigration detention</li>
                    <li>during an escape from immigration detention</li>
                    <li>after an escape, but before you were taken into immigration detention again.</li>
                </li>      
                       
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    


  )
    }
}
