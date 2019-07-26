import React from "react";
import PropTypes from "prop-types";
import './Quiz.css';

import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from 'react-router-dom';


function Quiz(props) {

    
    let buttonStyle = {
      cursor: 'pointer',
      color:'white',
      textDecoration:'none',
      background: '#49a942',
      margin: 'auto',
      border: '1px solid',
      borderRadius: '.25rem',
      display:'flex',
      justifyContent:'center',
      fontSize:'17px',

      }

      let linkStyle = {
       marginTop: '10px',
       marginBottom: '10px'
      }
  function renderAnswerOptions(key) {

    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (

    
    <ReactCSSTransitionGroup
      className="container1"
      id = "quiz"
      component="div"
      transitionName="fade"
      transitionEnterTimoeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
    
    <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <Link style={linkStyle} to="/introduction/nextsteps">
    <button style={buttonStyle}>Skip the quiz and see steps to apply visa</button>
    </Link>
      </div>
    </ReactCSSTransitionGroup>
    
  );

}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
