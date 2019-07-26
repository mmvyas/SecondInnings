import React, { Component } from 'react';
import Quiz from './Quiz';
import { Link } from 'react-router-dom';
import update from 'react-addons-update';
import quizQuestions from './quizQuestions';
import Result from './Result';
import { Jumbotron, Button } from 'reactstrap';
import Popup from './Popup/popup'


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
    quizShow: false,
    popupShow:false,
    popup1Show:false,
    popup2Show:false,
    popup3Show:false,
    popup4Show:false,
    popup5Show:false
  };

  this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
}
componentDidMount() {
  window.scrollTo(0, 0)
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


popupHandler = () =>{
  this.setState({
    popupShow:true
  })
}
handler = () => {
  this.setState({
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      'Eligible': 0,
      'Not Eligible': 0
    },
    result: '',
    quizShow: true,
    popUp: false
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
  console.log(event.currentTarget.value)
  if (event.currentTarget.value === "Not Eligible" && this.state.questionId === 1){
   this.setState({popup1Show: true})
  }
  if (event.currentTarget.value === "Not Eligible" && this.state.questionId === 2){
    this.setState({popup2Show: true})  }
  if (event.currentTarget.value === "Not Eligible" && this.state.questionId === 3){
    this.setState({popup3Show: true})  }
  if (event.currentTarget.value === "Not Eligible" && this.state.questionId === 4){
    this.setState({popup4Show: true})  }
  if (event.currentTarget.value === "Not Eligible" && this.state.questionId === 5){
    this.setState({popup5Show: true})  }
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
 if(this.state.answersCount.Eligible < 5){
   this.setState({
     result: "Not Eligible"
   })
 }
 else{
  this.setState({
    result: "Eligible"
  })
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
    <Result quizResult={this.state.result} handler={this.handler} popupHandler = {this.popupHandler} />
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
    color:'#49a942'
    }

  let popUpClose = () =>{
  this.setState({
    popupShow:false,
    popup1Show:false,
    popup2Show:false,
    popup3Show:false,
    popup4Show:false,
    popup5Show:false
  })
}

 
    return (
      <div>
      <Jumbotron className="visa-jumbo">
        
      </Jumbotron>
        <div id= "content" className="visapolicy">
        <h4 class ="green">
        <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489">RECENT NEWS</a></h4>
          <h2>Positive news for international students</h2>
          <h3>If you get this visa, you might be able to apply for the Skilled Regional (Permanent) visa</h3>
          <p>There are three visas as which the international student can be apply to be eligible for PR in Victoria, including 489 Skilled Regional (Provisional) Visa, 190 Skilled Nominated visa and 189 Skilled independent visa. 
            Detailed information on each visa can be found on the <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-provisional-489">Department of Homeaffairs</a></p>
            
            <table width="100%" cellpadding="0" cellspacing="5" class="vistable">
            <tbody>
              <tr>
                <td class = "td"><figure><img class="vismap" src="/assets/mapvisa.JPG"/><figcaption>The major regions sponsored under 489 visa are <br/>Geelong, Ballarat, Bendigo, Horsham, Seymour And <br/>Shepparton, Wangaratta and Traralagon.
                  <p>Want to Explore more?</p>
                  <Link to="/mapExploration" target = 'blank'>
                      <Button style={{backgroundColor: "#49a942" }}>Explore Victoria</Button>
                  </Link>
                  </figcaption></figure></td>
              <td class = "td">
              <div className = "pVisa">
              <p>However, Important points to note here: 
              <ul>
                <li>As per 2019 latest information, the permanent overseas migration cap <bold>has come down from 190,000 to 160,000 a year which includes 23,000 regional visas</bold> for skilled migrants.</li>
                <li>The rate of invitations to apply for 489 Skilled Regional (Provisional) Visa is 25% higher as compared to Skilled Independent visa 189.</li>
                <li>Migrants who apply for a 489 Skilled Regional (Provisional) visa before November 2019 will be
              eligible to apply for <bold> permanent residence after only 2 years </bold> of living and working in a regional area.</li>
              </ul> 
              
              <p></p>So, If you have been considering a Subclass 489 visa, then we suggest applying for this as soon as possible in order to avoid having to wait a further year to be eligible for PR. <p></p>
              
              <bold><a  className = 'Quizlink' style = {linkStyle} onClick={this.scrollToAnchor}>Check if you satisfy all conditions before you apply.</a></bold></p>
              </div>
          </td></tr></tbody></table>
          
          
          </div>
          {quiz}
          <Popup width='100%' show={this.state.popupShow}
          onHide={popUpClose}></Popup>
   

      </div>

    );
 
  }
 
}
 
