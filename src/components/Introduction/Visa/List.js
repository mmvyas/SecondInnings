import React, { Component } from 'react';
import './List.css';
import { Button, Modal } from 'react-bootstrap';

export default class List extends Component {

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
          List of Documents to apply:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class = "nsListText">
                <ol>
                    <li>Identity documents :  your current passport showing your photo, personal details, and passport issue and expiry dates.</li>
                    <li>Relationship documents: If you are or have been married, widowed, divorced or permanently separated, provide proof such as marriage certificates, divorce documents, death certificates, separation documents or statutory declarations.</li>
                    <li>Character documents: Provide an Australian police certificate if you have spent a total of 12 months or more in Australia in the last 10 years since you turned 16. </li>
                    <li>Skills assessment documents</li>
                    <li>Documents to support your expression of interest: You must provide documents to prove all of the claims you made in your EOI.</li>
                    <li>Sponsor documents: If you are being sponsored, provide: 
                        <ul>
                            <li>Skilled Regional (class SP) 489 (provisional) visa Sponsor declaration (51KB PDF) completed by your sponsor.</li>
                            <li>proof that your sponsor is an Australian citizen, permanent resident or an eligible New Zealand citizen</li>
                            <li>proof that your sponsor is usually resident in a designated area of Australia</li>
                            <li>proof of your relationship to your sponsor </li>

                        </ul>
                    </li>	
                </ol>        
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    


  )
    }
}
