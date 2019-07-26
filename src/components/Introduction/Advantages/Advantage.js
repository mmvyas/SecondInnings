import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary'
import './Advantage.css'
import Population from './populationChart'
import Hospital from './hospitalChart'
import Job from './jobChart'
import Criminal from './criminalChart'
import HousePrice from './houseChart'
import RentPrice from './rentChart'
import { Jumbotron } from 'reactstrap';
export default class Advantage extends Component {
  state = {
    Population: false,
    Hospital: false,
    Job: false,
    Criminal: false,
    HousePrice: false,
    RentPrice: false
  };

  handleClose = () => {
    this.setState({
      Population: false,
      Hospital: false,
      Job: false,
      Criminal: false,
      HousePrice: false,
      RentPrice: false
    });
  }

  

  handlePopulationShow = () => {
    this.setState({ Population: true });
  }

  handleHospitalShow = () => {
    this.setState({ Hospital: true });
  }

  handleJobShow = () => {
    this.setState({ Job: true });
  }

  handleCriminalShow = () => {
    this.setState({ Criminal: true });
  }

  handleHousePriceShow = () => {
    this.setState({ HousePrice: true });
  }

  handleRentPriceShow = () => {
    this.setState({ RentPrice: true });
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    let pStyle = {
      maxWidth:'800px',
      textAlign:'justify',
      alignSelf:'center'
      }
    let p2Style = {
      textAlign:'center',
      fontWeight:'bold',
      color:'#49a942'

    }  
    return (
      
      <Aux className="widthWrapper">
      <Jumbotron className="adv-jumbo">
        <div className="advJumboContent">
            <h1> Why Regional Victoria? </h1>

            <h3>Regional Victoria has everything you need for an outstanding lifestyle. It offers affordable housing, good health and education services and excellent job prospects.</h3>
            
            </div>
        
        </Jumbotron>
        <div className="advContent"><p style={pStyle}><p style={p2Style}>THE BIGGEST MOVE YOU COULD MAKE FOR YOUR FAMILY</p>There are plenty of reasons to move to Regional Victoria, but housing affordability 
        and job prospects are the top most. If you are struggling with finding a good but cheap 
        place to live and want to get away form huge amount of transportation, moving to regional area can be the answer for you. <p></p><a href ="https://www.vic.gov.au/homes-victorians-policy-changes-housing-and-renting" target='blank'>See Government plans for Housing and Renting</a>
              <p></p> As an International student, the biggest part of your life is getting job. 
              Moving to regional area can be especially beneficial to you, for they have a wide range of job 
              opportunities. <p></p>
                                      <a href = "https://hiring.vic.gov.au/" target='blank'>Find more about Jobs here </a>
                                    </p></div>

        <article onClick={this.handlePopulationShow}>         
        <img className = "postImg" src="/assets/Population.jpg"  />
        <div className = "chartText">
          <h2>Flourishing Population</h2>
          <ul>
            <li>50% less population than in cities.</li>
            <li>20% of population in regional areas are international residents.</li>
          </ul>
<br></br>
          <a >Click to view population in different regions</a>
          </div></article>
          <Population show={this.state.Population}
            onHide={this.handleClose}></Population>

            <article onClick={this.handleJobShow}>
            <img className = "postImg" src="/assets/Job.jpg"  />
            <div className = "chartText">
            <h2>No shortage of Jobs</h2>
            <ul>
              <li>Job security is high.</li>
              <li>Various kinds of job prospects available in a wide range of occupations.</li>
              <li>Health Care and Social Assistance have most job opportunities with 750,700 followed by 
                  Retail Trade, and Professional Scientific and Technical Services.</li>
            </ul>
<br></br>
          <a >Click to view number of jobs in different industries</a>
          </div>
          </article><Job show={this.state.Job}
            onHide={this.handleClose}></Job>

            <article onClick={this.handleHospitalShow}>
            <img className = "postImg" src="/assets/Hospital.jpg"  />
            <div className = "chartText"><h2>Health Services</h2>
            <ul>
              <li>One of the top considerations when considering to move to a regional Victoria is the availability 
                  and quality of health care services.</li>
              <li>Outstanding medical facilities and practitioners are available in regional Victoria including medical services such as dental, physio, 
                  general medicine, hospitals and specialists in all fields.</li> 
              <li>Billions of dollars worth projects and health initiatives are being undertaken by the Victorian Government for making health care more accessible.</li>
            </ul>
<br></br>
          <a >Click to view ratio of hospital to population</a>
          </div>
          </article><Hospital show={this.state.Hospital}
            onHide={this.handleClose}></Hospital>

            <article onClick={this.handleCriminalShow}>
            <img className = "postImg" src="/assets/Criminal.jpg"  />
            <div className = "chartText"><h2>Safety comes First</h2>
            <ul>
              <li>Crime rate is relative low and has been low since long time in Regional Victoria.</li>
              <li>Very less crime rate in Gippsland, Hume and Grampians.</li>
            </ul>
<br></br>
          <a >Click to view criminal incident rate in different regions</a>
          </div>
          </article><Criminal show={this.state.Criminal}
            onHide={this.handleClose}></Criminal>
            
            <article onClick={this.handleHousePriceShow}>
            <img className = "postImg" src="/assets/HousePrice.jpg"  />
            <div className = "chartText"><h2>Affordable house prices</h2>
            <ul>
              <li>A multitude of choice for you, whether you prefer a  townhouse close to shopping center 
                  or a peaceful farm cottage far from the hustle or maybe a vacant plot awaiting your grand design.</li>
              <li>The real estate costs you a lot less as compared to in cities.</li>    
              <li>Mildura, Shepparton, Traralgon and Warranambool has the lowest house prices.</li>

            </ul>
<br></br>
          <a >Click to view median house prices in different regions</a>
          </div></article >
          <HousePrice show={this.state.HousePrice}
            onHide={this.handleClose}></HousePrice>
            
            <article onClick={this.handleRentPriceShow}>
            <img className = "postImg" src="/assets/RentPrice.jpg"  />
            <div className = "chartText"><h2>Rent a place and make it home</h2>

            <ul>
              <li>Whether you are looking for a residence that’s established or brand new sparkling flat, finding a place to rent is much easier and affordable here.</li>
              <li>Spend much less for renting a house in Regional Victoria.</li>
              <li>Rent increase rate much slower than in city.</li>
            </ul>
<br></br>
          <a >Click to view average rent price in different regions</a>
          </div>
        </article>
        <RentPrice show={this.state.RentPrice}
            onHide={this.handleClose}></RentPrice>




      </Aux>

    )
  }



}

