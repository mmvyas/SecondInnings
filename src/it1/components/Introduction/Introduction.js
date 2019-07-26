import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introsidebar from './IntroSidebar'
import Visa from './Visa/Visa'
import Activity from './Activity/Activity'
import Advantages from './Advantages/Advantage2'
import './Introduction.css'


export default class Introduction extends Component {



    render() {
      

        return(
          <Router>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Introsidebar></Introsidebar>
            <div className = 'introductionContent'>
            <Route exact path="/introduction/visa" component={Visa} />
            <Route path="/introduction/activity" component={Activity} />
            <Route path="/introduction/advantage" component={Advantages} />
            </div>
            </div>

            
            
        </Router>

        )
     
    }
  }
  