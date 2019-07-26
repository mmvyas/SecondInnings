import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer'
import Introduction from './components/Introduction/Introduction'
import { Security, ImplicitCallback } from '@okta/okta-react';
import HomePage from './HomePage'

const config = {
  issuer: 'https://dev-803072.okta.com/oauth2/default',
  redirect_uri: 'http://secondinning.online/implicit/callback',
  client_id: '0oafrchxzg4rUmrfN356'
}



class App extends Component {

  render() {

    return (
      // <Router>
      //   <div>
      //     <CustomNavbar />
          
      //     <Route exact path="/" component={Home} />
      //     <Route path="/about" component={About} />
      //     <Route path="/introduction" component={Introduction} />
          


      //     <Footer />
      //   </div>
      // </Router>
      <Router>
        <CustomNavbar />
      <Security issuer={config.issuer}
                client_id={config.client_id}
                redirect_uri={config.redirect_uri}
      >
        <Route exact path='/' exact={true} component={HomePage}/>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/introduction" component={Introduction} />
      </Security>
      <Footer />
    </Router>
    );
  }
}

export default App;
