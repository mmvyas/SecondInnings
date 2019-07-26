import React, { Component } from 'react';
import Quiz from './Quiz';
import update from 'react-addons-update';
import quizQuestions from './quizQuestions';
import Result from './Result';
import '../../../App.css'
import './Quiz.css'


export default class Visa extends Component {
  constructor(props){
    super(props);
  

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      Eligible: 0,
      'Not Eligible': 0
    },
    result: '',
    quizShow: false
  };

  this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
}

componentWillMount() {
  const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

handler = () => {
  this.setState({
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      Eligible: 0,
      'Not Eligible': 0
    },
    result: '',
    quizShow: true
  }
  )
  const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

handleAnswerSelected(event) {
  this.setUserAnswer(event.currentTarget.value);

  if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
  } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
  }
}

setUserAnswer(answer) {
  const updatedAnswersCount = update(this.state.answersCount, {
    [answer]: {$apply: (currentValue) => currentValue + 1}
  });

  this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
  });
}

setNextQuestion() {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;

  this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
  });
}

getResults() {
  const answersCount = this.state.answersCount;
  const answersCountKeys = Object.keys(answersCount);
  const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
  const maxAnswerCount = Math.max.apply(null, answersCountValues);

  return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
}

setResults(result) {
  if (result.length === 1) {
    this.setState({ result: result[0] });
  } else {
    this.setState({ result: 'Undetermined' });
  }
}

renderQuiz() {
  return (
    <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
    />
  );
}

renderResult() {
  return (
    <Result quizResult={this.state.result} handler={this.handler} />
  );
}

scrollToAnchor = () => {
      
      this.setState({quizShow:true})

  }

  render() {
    let style = {
      overflow: 'visible'
  }


  let quiz = null
  if (this.state.quizShow){
    quiz = this.state.result ? this.renderResult() : this.renderQuiz()
  }

  let linkStyle = {
    cursor: 'pointer',
    color:'#006dae'
  }


 
    return (
      <div>
<div id= "content" className="visapolicy">
          <h2>Golden opportunity for International Students who want to live and work in Australia.</h2>
          <p>If you get this visa, you might be able to apply for the Skilled Regional (Permanent) visa (subclass 887)</p>
          <p>There are three visas as which the international student can be apply to be eligible for PR in Victoria, including 489 Skilled Regional (Provisional) Visa, 190 Skilled Nominated visa and 189 Skilled independent visa. 
            Detailed information on each visa can be found on the <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489">Department of Homeaffairs</a>
            <p> </p>
              However, it is worth to mention that, according to the newest information of Australia government the permanent overseas migration cap <bold>has come down from 190,000 to 160,000 a year which includes 23,000 regional visas</bold> for skilled migrants.
              The number of invitation to apply for 489 Skilled Regional (Provisional) Visa is quite high as compared to Skilled Independent visa 189. Therefore, the overseas students need to select the suitable visa for their pathway to get PR.</p>
          <p></p>
          <a  className = 'Quizlink' style = {linkStyle} onClick={this.scrollToAnchor}>See if you are eligible to apply.</a>
          </div>
          {quiz}

      </div>

    );
 
  }
 
}
 
