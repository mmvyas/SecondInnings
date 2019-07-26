import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary'
import './Advantage.css'
import Population from './populationChart'
import Hospital from './hospitalChart'
import Job from './jobChart'
import Criminal from './criminalChart'
import HousePrice from './houseChart'
import RentPrice from './rentChart'
import { notDeepEqual } from 'assert';
export default class Advantage extends Component {
  // state is to indicate whether these modals are open or not, by default it is false means close
  state = {
    Population: false,
    Hospital: false,
    Job: false,
    Criminal: false,
    HousePrice: false,
    RentPrice: false
  };
  // I use handleClose to control close all windows
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
  // handlePopulationShow is used to control population chart, the same as other functions
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

  render() {
    return (
      <Aux className="widthWrapper">
      {/* put the function onClick={this.handlePopulationShow} inside the tag like you want to do it in <i> and <a></a> */}
        <article onClick={this.handlePopulationShow}>
         
        <img className = "postImg" src="/assets/Population.jpg"  />
        <div className = "chartText">
          <h2>Population</h2>
          <p>The population of the regional area has less than 50% of people in Melbourne, which only has 1,212,546 in total, while Melbourne has 2,628,067 in total with a higher proportion of Aus born people. The Northwest Melbourne has the most people in the regional area while the Grampians has least with 235,000.
</p>
<br></br>
          <a >Click to View more details in chart</a>
          </div></article>
          {/* <Population> is the modal for population chart, store in populationChart.js */}
          <Population show={this.state.Population}
            onHide={this.handleClose}></Population>

            <article onClick={this.handleJobShow}>
            <img className = "postImg" src="/assets/Job.jpg"  />
            <div className = "chartText">
            <h2>Job by industry</h2>
          <p>Overall, the urban job opportunities are much higher than that in regional areas, however, there are still different job occupations that need talents in the regional Victoria areas. Health Care and Social Assistance have most job opportunities with 750,700, followed by the number of job in Retail Trade. However, there is no need for the mining industry in regional areas.
</p>
<br></br>
          <a >Click to View more details in chart...</a>
          </div>
          </article><Job show={this.state.Job}
            onHide={this.handleClose}></Job>
            <article onClick={this.handleHospitalShow}>
            <img className = "postImg" src="/assets/Hospital.jpg"  />
            <div className = "chartText"><h2>Hospital</h2>
          <p>In all Victoria regions, there are total more than 300 hospitals. Including a total of 81 hospitals in Northwest Melbourne which is the regional area with the most number, while the least one is Gippsland with only 15 hospitals.
</p>
<br></br>
          <a >Click to View more details in chart...</a>
          </div>
          </article><Hospital show={this.state.Hospital}
            onHide={this.handleClose}></Hospital>
            <article onClick={this.handleCriminalShow}>
            <img className = "postImg" src="/assets/Criminal.jpg"  />
            <div className = "chartText"><h2>Criminal</h2>
          <p>The top three regional Victoria areas that most crimes take place are northwest Melbourne, south Melbourne and east Melbourne. However, the criminal rates of the top 3 areas steadily decrease from 2009 to 2018. Comparing with these areas, the amount of crimes of other areas are relatively low and steady.
</p>
<br></br>
          <a >Click to View more details in chart...</a>
          </div>
          </article><Criminal show={this.state.Criminal}
            onHide={this.handleClose}></Criminal>
            
            <article onClick={this.handleHousePriceShow}>
            <img className = "postImg" src="/assets/HousePrice.jpg"  />
            <div className = "chartText"><h2>House Price</h2>
          <p>East Melbourne has the highest median price of houses, it is more than double of the price in South Melbourne which is the number 2 place that with highest median price. Although Geelong is the number 3 area with highest house price, but the number is less than half of it in South Melbourne. The figure in all the other regional areas keep in same level, which is about half of it in Geelong. Similarly, the speed of yearly house price growth of top 3 areas are still higher than it in other areas.
</p>
<br></br>
          <a >Click to View more details in chart...</a>
          </div></article >
          <HousePrice show={this.state.HousePrice}
            onHide={this.handleClose}></HousePrice>
            
            <article onClick={this.handleRentPriceShow}>
            <img className = "postImg" src="/assets/RentPrice.jpg"  />
            <div className = "chartText"><h2>Rent Price</h2>

          <p> The average rent price are at same level in east Melbourne, south Melbourne and northwest Melbourne, which are the top three areas with highest rent price in regional Victoria, whereas the rent price are much lower in other place. Although the rent price is keeping increasing from 2014 to 2018, the increase speed of top three areas with highest rent price is higher than it in others.
</p>
<br></br>
          <a >Click to View more details in chart...</a>
          </div>
        </article>
        <RentPrice show={this.state.RentPrice}
            onHide={this.handleClose}></RentPrice>




      </Aux>

    )
  }



}

