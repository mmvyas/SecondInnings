import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Visa from './Visa/Visa'
import Activity from './Activity/Activity'
import Advantages from './Advantages/Advantage'
import './Introduction.css'
import NextSteps from './Visa/NextSteps'



export default class Introduction extends Component {



    render() {
      

        return(
          <Router>
            <div className = 'introductionContent'>
            <Route exact path="/introduction/visa" component={Visa} />
            <Route path="/introduction/activity" component={Activity} />
            <Route path="/introduction/advantage" component={Advantages} />
            <Route path="/introduction/nextsteps" component={NextSteps} />
            </div>
            

            
            
        </Router>

        )
     
    }
  }
  