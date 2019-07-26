import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
const Result =(props)=> {
	let linkStyle = {
		cursor: 'pointer',
	  }
	return (
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
				
				<a style = {linkStyle} onClick = {props.handler}> &nbsp; See the Next Steps here</a>
			</div>
		</ReactCSSTransitionGroup>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};
 
export default Result;