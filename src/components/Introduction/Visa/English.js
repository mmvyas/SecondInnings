import React, { Component } from 'react';
import './List.css';
import { Button, Modal } from 'react-bootstrap';

export default class English extends Component {

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
          Level of English Competency:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class = "englishText">
                <p>If you are not a citizen of United Kingdom, the United States of America, Canada, New Zealand or the Republic of Ireland, you must have following marks for supporting your level of English:</p>
                <p>For Competent:</p>
                    <li>PTE: At least 50 for each of the 4 components </li>
                    <li>IELTS: At least 6 for each of the 4 components</li>
                    <li>TOEFL iBT: At least 12 for listening, 13 for reading, 21 for writing and 18 for speaking</li>
                <p>For Proficient:</p>
                    <li>PTE: At least 65 for each of the 4 components  </li>
                    <li>IELTS: At least 7 for each of the 4 components</li>
                    <li>TOEFL iBT: At least 24 for listening, 24 for reading, 27 for writing and 23 for speaking</li>
                <p>For Superior:</p>
                    <li>PTE: At least 79 for each of the 4 components   </li>
                    <li>IELTS: At least 8 for each of the 4 components</li>
                    <li>TOEFL iBT: At least 28 for listening, 29 for reading, 30 for writing and 26 for speaking</li>        
                       
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    


  )
    }
}
