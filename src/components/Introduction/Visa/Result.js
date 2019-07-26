import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
const Result =(props)=> {
	let linkStyle = {
		cursor: 'pointer',
	  }
	  const result = props.quizResult
	  let link = null
	  if (result === "Eligible"){
		link = <Link to="/introduction/nextsteps">
		<a style = {linkStyle}> &nbsp; See the Next Steps here</a>
		</Link>
	  }
	  else{
		link = (<div>
			
			<ul>
                    <li>You must be in Australia if you want to apply for the visa.</li>
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
			</div>)
		}
		
	return (<div>
		<ReactCSSTransitionGroup
			className="container result"
			component ="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div className="result">
				You are &nbsp;<strong>{props.quizResult}</strong>!

				{link}
			</div>
		</ReactCSSTransitionGroup>
		</div>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};
 
export default Result;