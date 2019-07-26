import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import TableauReport from 'tableau-react';
import Aux from '../../../hoc/Auxiliary'
import './Advantage.css'

export default class Advantage extends Component {

state = {
    chart: ""
  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  render(){

    return(
      <Aux>
        <div className = "AdvantageButtons">
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor("population")}>Population</Button>
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor("job")}>Job by Industry</Button>
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor("hospital")}>Hospitals</Button>
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor("criminal")}>Criminal</Button>
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor("house")}>House Price</Button>
        <Button className = "AdvantageButton" onClick = {()=>this.scrollToAnchor('rent')}>Rent Price</Button>
        </div>
        <div id = 'population'><br></br></div>
        <div className = 'Vischart'>
        <h2 className = 'advh2'>Population</h2>
            <TableauReport
    url="https://public.tableau.com/views/VICRegionalPopulation/RegionPopulation
    "
  />
  </div>
  <div id = 'job'><br></br></div>
  <div className = 'Vischart' id = "job">
<h2 className = 'advh2'>Job by Industry
</h2>
  <TableauReport
    url="https://public.tableau.com/views/JobbyIndustry/JobbyIndustryinRegional
    "
  />
  </div>
  <div id = 'hospital'><br></br></div>

  <div className = 'Vischart' id = "hospital">
<h2 className = 'advh2'>Hospitals</h2>
  <TableauReport
    url="https://public.tableau.com/views/pophosp/PopulationHospitalRatio"
  /></div>

  <div id = 'criminal'><br></br></div>

  <div className = 'Vischart'>
<h2 className = 'advh2'>Criminal</h2>
<TableauReport
    url="https://public.tableau.com/views/crmnrec/CriminalRecordedIncidents
    "
  /></div>

<div id = 'house'><br></br></div>

<div className = 'Vischart' >
  <div id = 'house'><br></br></div>

<h2 className = 'advh2'>House Price
</h2>
  <TableauReport
    url="https://public.tableau.com/views/houpri/YearlyPriceGrowth
    "
  /></div>
    <div id = 'rent'><br></br></div>

<div className = 'Vischart'></div>
  <div id = "rent">
<h2 className = 'advh2'>Rent Price
</h2>
  <TableauReport
  url="https://public.tableau.com/views/rentpri/RentPrice2018"
/>
</div>
          
</Aux>

  )
}



}
