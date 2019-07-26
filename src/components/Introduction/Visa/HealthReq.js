import React, { Component } from 'react';
import './List.css';
import { Button, Modal } from 'react-bootstrap';

export default class HealthReq extends Component {

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
          To meet the health requirement you must be free from any disease or condition that is:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class = "healthText">
                <li>A significant healthcare and community service cost to the Australian community</li>
                <li>Likely to limit the access of Australian citizens and permanent residents to healthcare and community services that are in short supply by placing demand on those services. </li>      

            <p>You might have to have health examinations to prove you meet the health requirement. See details on <a href = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health">Homeaffairs Health</a></p>           
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    


  )
    }
}
