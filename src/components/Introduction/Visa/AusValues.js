import React, { Component } from 'react';
import './List.css';
import { Button, Modal } from 'react-bootstrap';

export default class AusValues extends Component {

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
          When you apply for a provisional visa you must sign the Australian values statement which is as follows:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class = "ausValueText">
                <p>I confirm that I have read, or had explained to me, information provided by the Australian Government on Australian society and values.</p>
                <p>I understand:</p>
                    <li>Australian society values respect for the freedom and dignity of the individual, freedom of religion, commitment to the rule of law, Parliamentary democracy, equality of men and women and a spirit of egalitarianism that embraces mutual respect, tolerance, fair play and compassion for those in need and pursuit of the public good </li>
                    <li>Australian society values equality of opportunity for individuals, regardless of their race, religion or ethnic background</li>
                    <li>The English language, as the national language, is an important unifying element of Australian society.</li>
                <p>I undertake to respect these values of Australian society during my stay in Australia and to obey the laws of Australia.</p>
                <p>I understand that, if I should seek to become an Australian citizen:</p>
                    <li>Australian citizenship is a shared identity, a common bond which unites all Australians while respecting their diversity </li>
                    <li>Australian citizenship involves reciprocal rights and responsibilities. The responsibilities of Australian Citizenship include obeying Australian laws, including those relating to voting at elections and serving on a jury.</li>
                
                <p>If I meet the legal qualifications for becoming an Australian citizen and my application is approved I understand that I would have to pledge my loyalty to Australia and its people.</p>           
                       
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    


  )
    }
}
