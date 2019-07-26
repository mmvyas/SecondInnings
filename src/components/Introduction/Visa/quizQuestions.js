import React from 'react';
var quizQuestions = [
    {
        question: "Are you currently in Australia? ",
        answers: [
            {
                type: "Eligible",
                content: "Yes"
                
            }, 
            {
                type: "Not Eligible",
                content: "No"
            }
        ]
    },
    {
        question: "Do you and/or a member of your family currently hold a subclass 500, 475, 487, 495, 489, 495 or 496 visa?",
        answers: [
            {
                type: "Eligible",
                content: "Yes"
            },
            {
                type: "Not Eligible",
                content: "No"
            }
        ]
    },
    {
        question: <div className="QuizQues">Do you satisfy all the eligibility requirements? 
        <p>You must meet the following requirements in order to apply for this visa.</p>
        <p>
            <ul>
                <li> not yet turned 50 years of age </li>
                <li> Have at least <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language" target="_blank">competent English</a></li>
                <li> Meet the <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health" target="_blank">health requirements </a></li>
                <li> Meet the <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character" target="_blank">character requirements </a></li>
                <li> Do not have any outstanding debts to the Australian government </li>
                <li> Willing to sign the <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/australian-values" target="_blank">Australian Values Statement</a></li>
            </ul>
        </p>
        </div> ,
        answers: [
            {
                type: "Eligible",
                content: "Yes"
            },
            {
                type: "Not Eligible",
                content: "No"
            }
        ]
    },
    {     
        question: <div className="QuizQues">Does your occupation qualify suitable skills assessment?<p>Check if your occupation is on the <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" target="_blank">Skilled Occupation Lists</a>.</p></div>,
        answers: [
            {
                type: "Eligible",
                content: "Yes"
            },
            {
                type: "Not Eligible",
                content: "No"
            }
        ]
    },
    {
        question: <div className="QuizQues">Do you have 65 points on australian points test?<p>You can check if you have an acceptable score on the <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment" target="_blank">DHA Website</a>.</p></div>,
        answers: [
            {
                type: "Eligible",
                content: "Yes"
            },
            {
                type: "Not Eligible",
                content: "No"
            }
        ]
    }
  ];
   
  export default quizQuestions;