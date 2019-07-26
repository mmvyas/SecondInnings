import React from 'react'
import { Modal } from 'react-bootstrap'
const popup = props => {


    return (<Modal>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Suggestions</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ul>
                    <li>You must in Australia if you want to apply for the visa.</li>
                    <li>You and your family member must currently hold these visa.</li>
                    <li>Take course related to the occupation in Skilled Occupation Lists to pass the career assessment. </li>
                    <li><b>Gain more points! </b></li>
                    <li>Take 2 years course in Australia. If your course is less than 2 years, you can take a diploma course.</li>
                    <li>The best age is 25-32. If you are younger, apply when you reach 25. If you are older, apply before 40.</li>
                    <li>Improve English ability. Superior English (8 or more in IELTS Test) would give 20 points and Proficient
             English (7 or more in IELTS Test) would provide 10.</li>
                    <li>Increase work experience to get more points</li>
                    <li>Participant in Professional Year courses for 5 extra points</li>

                </ul>
            </Modal.Body>


        </Modal.Dialog>
    </Modal>
    )

}

export default popup